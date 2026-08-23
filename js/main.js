/**
 * GULFCOM TOURS & TRAVELS - MAIN JAVASCRIPT
 * Location: Maniyoth Complex, Chinthavalappu Junction, Palayam, Kozhikode
 * Fast, Vanilla JS, Zero External Libraries
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  renderPackagesGrid(TOURS_DATA);
  renderServicesGrid(SERVICES_DATA);
  renderTestimonialsGrid(TESTIMONIALS_DATA);
  renderFAQGrid(FAQ_DATA);
  initPackageFiltersAndSearch();
  initModals();
  initScrollAnimations();
  initForms();
});

/* --------------------------------------------------------------------------
   1. Header & Navigation Handling
   -------------------------------------------------------------------------- */
function initHeader() {
  const header = document.getElementById('siteHeader');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  let navBackdrop = document.getElementById('navBackdrop');

  if (!navBackdrop) {
    navBackdrop = document.createElement('div');
    navBackdrop.id = 'navBackdrop';
    navBackdrop.className = 'nav-backdrop';
    document.body.appendChild(navBackdrop);
  }

  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNavLink();
  }, { passive: true });

  function openMobileNav() {
    navMenu.classList.add('open');
    mobileToggle.classList.add('active');
    mobileToggle.setAttribute('aria-expanded', 'true');
    navBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    navMenu.classList.remove('open');
    mobileToggle.classList.remove('active');
    mobileToggle.setAttribute('aria-expanded', 'false');
    navBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Mobile drawer toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    // Close mobile drawer when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', closeMobileNav);
    });

    // Close on backdrop tap
    navBackdrop.addEventListener('click', closeMobileNav);
  }

  // Active link highlighter based on scroll position
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}

/* --------------------------------------------------------------------------
   2. Render Tour Packages Grid
   -------------------------------------------------------------------------- */
function renderPackagesGrid(packages) {
  const container = document.getElementById('packagesContainer');
  if (!container) return;

  if (packages.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: #64748b;">
        <svg style="width: 48px; height: 48px; margin: 0 auto 1rem; opacity: 0.5;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h4 style="font-size: 1.2rem; color: #0b1a2d; margin-bottom: 0.5rem;">No matching packages found</h4>
        <p>Try searching for a different destination or clear your filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = packages.map((pkg, idx) => `
    <article class="package-card reveal delay-${((idx % 3) + 1) * 100}" data-id="${pkg.id}" data-category="${pkg.category}">
      <div class="card-image-wrap">
        <a href="package-details.html?id=${pkg.id}" aria-label="View ${pkg.title} Tour Details">
          <img 
            src="${pkg.image}" 
            alt="${pkg.title} Tour Package - Gulfcom Tours & Travels Calicut" 
            class="card-img" 
            loading="lazy" 
            decoding="async"
          />
        </a>
        <span class="card-badge">${pkg.badge}</span>
      </div>
      <div class="card-body">
        <a href="package-details.html?id=${pkg.id}">
          <h3 class="card-title">${pkg.title}</h3>
        </a>
        <p class="card-desc">${pkg.tagline}</p>
        <div class="card-footer">
          <div class="price-box">
            <span class="price-val">${pkg.priceDisplay}</span>
            <span class="price-unit">onwards</span>
          </div>
          <div class="card-actions-group">
            <a href="package-details.html?id=${pkg.id}" class="card-btn" style="background: var(--color-primary-navy); color: #ffffff;">
              Details
            </a>
            <button type="button" class="card-btn" onclick="openPackageDetails('${pkg.id}')">
              Quick View
            </button>
          </div>
        </div>
      </div>
    </article>
  `).join('');

  // Trigger intersection observer on newly rendered cards
  initScrollAnimations();
}

/* --------------------------------------------------------------------------
   3. Render Services Grid
   -------------------------------------------------------------------------- */
function renderServicesGrid(services) {
  const container = document.getElementById('servicesContainer');
  if (!container) return;

  const iconMap = {
    'plane': `<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>`,
    'car': `<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
    'suitcase': `<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>`,
    'headset': `<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 0 0-9-9z"/></svg>`
  };

  container.innerHTML = services.map((srv, idx) => `
    <div class="service-card reveal delay-${(idx + 1) * 100}">
      <div class="service-icon-circle">
        ${iconMap[srv.icon] || ''}
      </div>
      <h3 class="service-title">${srv.title}</h3>
      <p class="service-desc">${srv.shortDesc}</p>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   4. Render Testimonials Grid
   -------------------------------------------------------------------------- */
function renderTestimonialsGrid(testimonials) {
  const container = document.getElementById('testimonialsContainer');
  if (!container) return;

  container.innerHTML = testimonials.map((item, idx) => `
    <div class="testimonial-card reveal delay-${(idx + 1) * 100}">
      <div class="rating-stars">★★★★★</div>
      <p class="testimonial-text">"${item.comment}"</p>
      <div class="testimonial-author">
        <img src="${item.avatar}" alt="${item.name}" class="author-img" loading="lazy" />
        <div class="author-info">
          <h5>${item.name}</h5>
          <span>${item.location} • ${item.package}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   5. Render FAQ Accordion
   -------------------------------------------------------------------------- */
function renderFAQGrid(faqs) {
  const container = document.getElementById('faqContainer');
  if (!container) return;

  container.innerHTML = faqs.map((faq, idx) => `
    <div class="faq-item reveal delay-${(idx + 1) * 100}">
      <button type="button" class="faq-question" aria-expanded="false">
        <span>${faq.q}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer">
        <p>${faq.a}</p>
      </div>
    </div>
  `).join('');

  // Attach accordion click events
  const faqItems = container.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close other open faqs
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          other.querySelector('.faq-answer').style.maxHeight = null;
        }
      });

      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. Package Filters & Real-Time Search
   -------------------------------------------------------------------------- */
function initPackageFiltersAndSearch() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const searchInput = document.getElementById('packageSearchInput');
  let currentCategory = 'all';
  let searchQuery = '';

  function applyFilters() {
    const filtered = TOURS_DATA.filter(pkg => {
      const matchesCategory = currentCategory === 'all' || pkg.category === currentCategory;
      const matchesSearch = pkg.title.toLowerCase().includes(searchQuery) ||
                            pkg.tagline.toLowerCase().includes(searchQuery) ||
                            pkg.description.toLowerCase().includes(searchQuery);
      return matchesCategory && matchesSearch;
    });
    renderPackagesGrid(filtered);
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.dataset.category || 'all';
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }
}

/* --------------------------------------------------------------------------
   7. Modals (Package Details, Quick Enquiry, Custom Planner)
   -------------------------------------------------------------------------- */
function initModals() {
  const modalOverlay = document.getElementById('modalOverlay');
  const modalContainer = document.getElementById('modalContainer');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  function openModal(title, contentHtml) {
    modalTitle.textContent = title;
    modalBody.innerHTML = contentHtml;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Global window functions for modal triggers
  window.openPackageDetails = function(packageId) {
    const pkg = TOURS_DATA.find(p => p.id === packageId);
    if (!pkg) return;

    const galleryList = pkg.gallery && pkg.gallery.length ? pkg.gallery : [pkg.imageHigh, pkg.image];

    const html = `
      <div style="margin-bottom: 1.5rem;">
        <div style="position: relative; height: 260px; border-radius: 12px; overflow: hidden; margin-bottom: 0.75rem; background: #0b1a2d;">
          <img id="modalFeatureImg" src="${galleryList[0]}" alt="${pkg.title}" style="width: 100%; height: 100%; object-fit: cover; transition: opacity 0.2s ease;" />
        </div>

        <!-- Thumbnail Photo Strip -->
        <div class="modal-gallery-strip">
          ${galleryList.map((img, i) => `
            <div class="modal-gallery-thumb ${i === 0 ? 'active' : ''}" onclick="switchModalThumb('${img}', this)">
              <img src="${img}" alt="${pkg.title} preview ${i+1}" />
            </div>
          `).join('')}
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; margin-top: 0.8rem;">
          <span style="font-size: 0.85rem; font-weight: 700; color: #d49b38; text-transform: uppercase;">${pkg.duration} • ★ ${pkg.rating} (${pkg.reviewsCount} reviews)</span>
          <span style="font-size: 1.3rem; font-weight: 800; color: #0b1a2d;">${pkg.priceDisplay} <span style="font-size: 0.85rem; font-weight: 400; color: #64748b;">onwards</span></span>
        </div>
        <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.25rem;">${pkg.description}</p>
        
        <h4 style="font-size: 1rem; color: #0b1a2d; margin-bottom: 0.6rem; font-weight: 700;">Package Highlights:</h4>
        <ul style="list-style: disc; padding-left: 1.25rem; color: #334155; font-size: 0.88rem; line-height: 1.7; margin-bottom: 1.25rem;">
          ${pkg.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>

        <h4 style="font-size: 1rem; color: #0b1a2d; margin-bottom: 0.6rem; font-weight: 700;">Inclusions:</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.5rem;">
          ${pkg.inclusions.map(inc => `<span style="background: #f1f5f9; padding: 0.3rem 0.75rem; border-radius: 9999px; font-size: 0.8rem; color: #0b1a2d; font-weight: 600;">✓ ${inc}</span>`).join('')}
        </div>

        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="package-details.html?id=${pkg.id}" class="btn btn-dark" style="flex: 1; text-align: center;">
            Full Day-Wise Itinerary & Photos ➔
          </a>
          <button type="button" class="btn btn-gold" onclick="openBookingForm('${pkg.title}', '${pkg.priceDisplay}')">
            Book Now
          </button>
          <a href="https://wa.me/919847521066?text=${encodeURIComponent(`Hi Gulfcom Tours & Travels, I would like to inquire about the ${pkg.title} tour package (${pkg.priceDisplay} onwards). Please share the complete itinerary and offer details.`)}" target="_blank" rel="noopener noreferrer" class="btn btn-glass" style="background: #25d366; border: none; color: white;">
            WhatsApp
          </a>
        </div>
      </div>
    `;

    openModal(`${pkg.title} Holiday Package`, html);
  };

  window.switchModalThumb = function(imgSrc, thumbEl) {
    const mainImg = document.getElementById('modalFeatureImg');
    if (!mainImg) return;
    mainImg.style.opacity = '0.3';
    setTimeout(() => {
      mainImg.src = imgSrc;
      mainImg.style.opacity = '1';
    }, 120);

    document.querySelectorAll('.modal-gallery-thumb').forEach(t => t.classList.remove('active'));
    if (thumbEl) thumbEl.classList.add('active');
  };

  window.openBookingForm = function(packageName = 'General Tour Package', price = '') {
    const html = `
      <form id="bookingModalForm" class="contact-form" onsubmit="handleModalBookingSubmit(event, '${packageName}')">
        <div class="form-group">
          <label class="form-label">Selected Destination / Service</label>
          <input type="text" class="form-control" value="${packageName} ${price ? `(${price} onwards)` : ''}" readonly style="background: #f8fafc; font-weight: 600; color: #0b1a2d;" />
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label">Your Full Name *</label>
            <input type="text" id="bkName" class="form-control" placeholder="e.g. Rahul Nambiar" required />
          </div>
          <div class="form-group">
            <label class="form-label">Phone / WhatsApp *</label>
            <input type="tel" id="bkPhone" class="form-control" placeholder="e.g. +91 98475 21066" required />
          </div>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          <div class="form-group">
            <label class="form-label">Preferred Travel Date</label>
            <input type="date" id="bkDate" class="form-control" />
          </div>
          <div class="form-group">
            <label class="form-label">Number of Travelers</label>
            <select id="bkGuests" class="form-control">
              <option value="1-2">1 - 2 Persons (Couple / Solo)</option>
              <option value="3-5" selected>3 - 5 Persons (Family)</option>
              <option value="6-10">6 - 10 Persons (Group)</option>
              <option value="10+">10+ Persons (Corporate / Large Group)</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Any Special Requirements / Vehicle Choice</label>
          <textarea id="bkNotes" class="form-control" rows="2" placeholder="e.g. Innova cab pickup from Kozhikode Railway Station, 4-star hotel stay..."></textarea>
        </div>
        <div style="display: flex; gap: 0.75rem; margin-top: 0.5rem;">
          <button type="submit" class="btn btn-gold" style="flex: 1;">
            Submit Request
          </button>
          <button type="button" class="btn btn-dark" onclick="sendBookingViaWhatsApp('${packageName}')">
            Send via WhatsApp
          </button>
        </div>
      </form>
    `;

    openModal('Book / Request Custom Itinerary Quote', html);
  };

  window.handleModalBookingSubmit = function(e, packageName) {
    e.preventDefault();
    const name = document.getElementById('bkName').value.trim();
    const phone = document.getElementById('bkPhone').value.trim();
    const date = document.getElementById('bkDate').value || 'Flexible';
    const guests = document.getElementById('bkGuests').value;

    showToast(`Thank you, ${name}! Your inquiry for ${packageName} has been received. Our Calicut team will contact you shortly.`);
    closeModal();
  };

  window.sendBookingViaWhatsApp = function(packageName) {
    const name = document.getElementById('bkName') ? document.getElementById('bkName').value.trim() : '';
    const phone = document.getElementById('bkPhone') ? document.getElementById('bkPhone').value.trim() : '';
    const date = document.getElementById('bkDate') ? document.getElementById('bkDate').value : 'Flexible';
    const guests = document.getElementById('bkGuests') ? document.getElementById('bkGuests').value : 'Family';
    const notes = document.getElementById('bkNotes') ? document.getElementById('bkNotes').value.trim() : '';

    const text = `*New Travel Enquiry - Gulfcom Tours & Travels*
📍 *Package/Service:* ${packageName}
👤 *Name:* ${name || 'Prospective Traveler'}
📞 *Phone:* ${phone || 'Not specified'}
📅 *Travel Date:* ${date}
👥 *Travelers:* ${guests}
📝 *Notes:* ${notes || 'Looking for best customized quote'}`;

    window.open(`https://wa.me/919847521066?text=${encodeURIComponent(text)}`, '_blank');
    closeModal();
  };
}

/* --------------------------------------------------------------------------
   8. Scroll-Triggered Reveal Animations
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('revealed'));
  }
}

/* --------------------------------------------------------------------------
   9. Forms Handling & Toast System
   -------------------------------------------------------------------------- */
function initForms() {
  const contactForm = document.getElementById('contactForm');
  const newsletterForm = document.getElementById('newsletterForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('[name="name"]').value.trim();
      showToast(`Thank you, ${name}! Your travel consultation request is sent. We will call you back today.`);
      contactForm.reset();
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]').value.trim();
      showToast(`Subscribed! Exclusive travel deals will be sent to ${email}.`);
      newsletterForm.reset();
    });
  }
}

function showToast(message) {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#d49b38"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
