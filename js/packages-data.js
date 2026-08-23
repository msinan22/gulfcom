/**
 * Gulfcom Tours & Travels - Comprehensive Packages & Services Data
 * Maniyoth Complex, Chinthavalappu Junction, Ram Mohan Road, Palayam, Kozhikode
 */

const TOURS_DATA = [
  {
    id: "munnar",
    title: "Munnar",
    tagline: "Tea country charm, hill station views, waterfalls",
    category: "hill-stations",
    startingPrice: 6300,
    priceDisplay: "₹6,300",
    duration: "3 Days / 2 Nights",
    rating: 4.9,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    imageHigh: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85"
    ],
    badge: "Bestseller",
    description: "Explore the emerald hills of Munnar, renowned for endless rolling tea plantations, mist-covered valleys, sparkling waterfalls, and refreshing mountain air. A tranquil paradise perfect for couples, families, and nature enthusiasts.",
    highlights: [
      "Mattupetty Dam & Eco Point Boating with breathtaking reservoir views",
      "Eravikulam National Park to spot the rare Nilgiri Tahr and wild blooms",
      "Tata Tea Museum & Tea Processing Heritage Walk",
      "Attukad, Cheeyappara & Valara cascading waterfalls",
      "Scenic Kundala Lake boating & Top Station panoramic valley view"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Munnar & Waterfall Circuit",
        desc: "Pick up from Calicut / Kochi by private AC chauffeur cab. Enjoy the scenic mountain drive with stops at Cheeyappara and Valara waterfalls. Check-in to your misty resort and spend a relaxing evening exploring Munnar Town and local spice markets.",
        image: "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 2,
        title: "Eravikulam National Park & Tea Trails",
        desc: "Morning visit to Eravikulam National Park (Rajamalai) home of the endangered Nilgiri Tahr. Afternoon tour of Tata Tea Museum, Mattupetty Dam, Eco Point echo resonance spot, and serene Kundala Lake. Sunset viewpoint at Photo Point.",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 3,
        title: "Top Station & Departure",
        desc: "Post breakfast, take an early morning excursion to Top Station for clouds floating beneath your feet. Check out and transfer comfortably back to Calicut Railway Station / Airport with wonderful holiday memories.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
      }
    ],
    inclusions: [
      "2 Nights Deluxe Mountain View Room Stay",
      "Daily Buffet Breakfast",
      "Private AC Chauffeur Driven Cab (Sedan / Innova)",
      "All Sightseeing & Toll Taxes Included",
      "Driver Allowance & Parking Charges",
      "24/7 Dedicated Trip Coordinator from Calicut"
    ],
    exclusions: [
      "Airfare / Train tickets (Available on request)",
      "Entry fees to monuments, parks, and boating tickets",
      "Personal expenses, laundry, and meals not mentioned"
    ],
    popularFor: "Couples, Families, Nature Lovers",
    pickupLocation: "Calicut (Kozhikode) / Cochin Airport / Any Kerala point"
  },
  {
    id: "goa",
    title: "Goa",
    tagline: "Beaches, water sports, heritage forts & nightlife",
    category: "beaches",
    startingPrice: 7200,
    priceDisplay: "₹7,200",
    duration: "4 Days / 3 Nights",
    rating: 4.8,
    reviewsCount: 188,
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    imageHigh: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=85"
    ],
    badge: "Popular",
    description: "Experience the ultimate coastal getaway in Goa. Pristine golden sandy beaches, thrilling water sports, 17th-century Portuguese colonial architecture, sunset boat cruises along the Mandovi River, and vibrant beach shacks.",
    highlights: [
      "Calangute, Baga & Anjuna Beach visits with water sports options",
      "Water Sports combo: Parasailing, Jet Ski, Banana Ride & Bumper Ride",
      "Aguada Fort & Chapora 'Dil Chahta Hai' Fort sunset vistas",
      "Old Goa UNESCO Heritage: Basilica of Bom Jesus & Se Cathedral",
      "Mandovi River Sunset Cruise with Goan folk music & dance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Goa & Beachside Leisure",
        desc: "Arrive at Goa Airport / Railway Station. Private cab transfer to your beachfront resort. Spend the afternoon soaking in the sun at Calangute Beach and enjoy vibrant seaside shacks.",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 2,
        title: "North Goa Forts, Water Sports & Baga",
        desc: "Explore historic Aguada Fort and lighthouse. Head to Baga/Anjuna Beach for thrilling water sports. Sunset visit to Chapora Fort overlooking the Arabian Sea.",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 3,
        title: "South Goa Heritage & Mandovi Sunset Cruise",
        desc: "Discover Old Goa's Basilica of Bom Jesus, Mangueshi Temple, and Miramar Beach. Evening Mandovi River cruise with live Goan cultural performances.",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 4,
        title: "Souvenir Shopping & Departure",
        desc: "Breakfast at the resort. Morning shopping at Panjim flea market for cashew nuts and feni. Transfer to airport/railway station for your onward journey.",
        image: "https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=600&q=80"
      }
    ],
    inclusions: [
      "3 Nights Beach Resort Stay with Swimming Pool",
      "Daily Buffet Breakfast",
      "AC Vehicle for North & South Goa Sightseeing",
      "Mandovi River Sunset Cruise Tickets Included",
      "Airport / Station Pickup & Drop"
    ],
    exclusions: [
      "Water sports activity charges (Optional add-on pass available)",
      "Meals other than specified breakfast",
      "Personal tips and nightlife expenses"
    ],
    popularFor: "Friends, Solo Travelers, Couples",
    pickupLocation: "Goa Airport (GOI / GOX) / Madgaon Railway Station"
  },
  {
    id: "manali",
    title: "Manali",
    tagline: "Himalayan vistas, adventure activities, valley tours",
    category: "adventure",
    startingPrice: 7200,
    priceDisplay: "₹7,200",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviewsCount: 215,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    imageHigh: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=85"
    ],
    badge: "Trending",
    description: "Nestled in the Beas River Valley, Manali offers breathtaking snow-capped Himalayan peaks, Solang Valley adventure sports, charming cedar forests, and therapeutic natural hot springs.",
    highlights: [
      "Solang Valley Adventure: Paragliding, Zorbing, and Cable Car ropeway",
      "Atal Tunnel & Sissu Waterfall snowy day excursion in Lahaul Valley",
      "Hadimba Devi ancient wooden temple & Vashisht sulfur hot baths",
      "Old Manali Bohemian Cafes & Mall Road shopping",
      "Jogini Waterfall nature trek through apple orchards"
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi/Chandigarh to Manali Scenic Drive",
        desc: "Overnight luxury Volvo / private cab drive alongside the roaring Beas River. Arrive in Manali, check-in to your mountain-view hotel, and acclimatize with a stroll through Mall Road.",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 2,
        title: "Manali Local Sightseeing & Temples",
        desc: "Visit the 450-year-old Hadimba Temple amidst towering deodars, Manu Temple, Tibetan Monastery, and the soothing Vashisht Hot Springs.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 3,
        title: "Solang Valley, Atal Tunnel & Sissu Expedition",
        desc: "An exhilarating day! Drive through the world's longest high-altitude Atal Tunnel into the snow valleys of Sissu. Experience paragliding and snow activities in Solang Valley.",
        image: "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 4,
        title: "Kullu Valley Rafting & Naggar Castle",
        desc: "Day trip to Kullu for white-water river rafting and shawl factory visits. Explore the historic wooden Naggar Castle and Nicholas Roerich Art Gallery.",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 5,
        title: "Farewell Himalayas",
        desc: "Enjoy breakfast overlooking the snowy peaks. Check out and embark on your return journey with heartwarming Himalayan memories.",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80"
      }
    ],
    inclusions: [
      "4 Nights Premium Mountain View Hotel Stay",
      "Breakfast & Dinner Daily (MAP Plan)",
      "Dedicated Private Vehicle for all transfers & excursions",
      "Driver allowances, toll taxes, and green tax",
      "Atal Tunnel & Solang Valley sightseeing permits"
    ],
    exclusions: [
      "Adventure activity charges (Paragliding, River Rafting)",
      "Rohtang Pass special NGT permit fee (if opted)"
    ],
    popularFor: "Honeymooners, Adventure Seekers, Families",
    pickupLocation: "Delhi / Chandigarh / Bhuntar Airport"
  },
  {
    id: "jaipur",
    title: "Jaipur",
    tagline: "Pink City heritage, historic forts, vibrant bazaars",
    category: "heritage",
    startingPrice: 7200,
    priceDisplay: "₹7,200",
    duration: "3 Days / 2 Nights",
    rating: 4.7,
    reviewsCount: 130,
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    imageHigh: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1603204077537-88d447d2b270?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=85"
    ],
    badge: "Heritage",
    description: "Step into royal Rajasthan with the Pink City's majestic Amer Fort, intricate Hawa Mahal, grand City Palace, and bustling Johari & Bapu bazaars brimming with handicrafts and gemstones.",
    highlights: [
      "Amer Fort & Elephant / Jeep Ride up the cobbled ramparts",
      "Hawa Mahal (Palace of Winds) & Jal Mahal photo stop",
      "City Palace museum & Jantar Mantar astronomical observatory",
      "Nahargarh Fort panoramic sunset viewpoint",
      "Chokhi Dhani traditional Rajasthani cultural dinner"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Pink City & Heritage Corridors",
        desc: "Meet and greet at Jaipur Airport/Station. Check in to your heritage hotel. Visit the grand City Palace and Jantar Mantar. Evening photo stop at the illuminated Hawa Mahal.",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 2,
        title: "Amer Fort, Jal Mahal & Nahargarh Sunset",
        desc: "Full day fort excursion! Tour the magnificent Amer Fort with Sheesh Mahal (Mirror Palace). Stop by Jal Mahal floating on Man Sagar Lake. Sunset at Nahargarh Fort.",
        image: "https://images.unsplash.com/photo-1603204077537-88d447d2b270?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 3,
        title: "Bazaars Shopping & Departure",
        desc: "Morning shopping for block-print textiles, blue pottery, and silver jewelry in Bapu Bazaar. Transfer to airport/station for departure.",
        image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=600&q=80"
      }
    ],
    inclusions: [
      "2 Nights Royal Heritage Hotel Stay",
      "Daily Traditional Breakfast",
      "Private AC Chauffeur Driven Sedan Car",
      "Monument Entry Assistance & Driver Allowances"
    ],
    exclusions: ["Monument entrance fees & optional cultural show tickets"],
    popularFor: "History Buffs, Cultural Enthusiasts, Families",
    pickupLocation: "Jaipur International Airport / Railway Station"
  },
  {
    id: "darjeeling",
    title: "Darjeeling",
    tagline: "Tea gardens, Himalayan views, monasteries",
    category: "hill-stations",
    startingPrice: 8100,
    priceDisplay: "₹8,100",
    duration: "4 Days / 3 Nights",
    rating: 4.8,
    reviewsCount: 96,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    imageHigh: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85"
    ],
    badge: "Scenic",
    description: "Wake up to panoramic golden sunrise views of Mt. Kanchenjunga, world-famous Happy Valley tea estates, UNESCO heritage Toy Train steam engine rides, and serene Buddhist monasteries.",
    highlights: [
      "Tiger Hill 4:00 AM Sunrise over Mt. Kanchenjunga peak",
      "UNESCO World Heritage Himalayan Toy Train Joyride",
      "Batasia Loop spiral railway track & Gorkha War Memorial",
      "Ghoom Buddhist Monastery & Japanese Peace Pagoda",
      "Happy Valley Tea Estate aroma walk & tea tasting"
    ],
    itinerary: [
      {
        day: 1,
        title: "Bagdogra to Queen of Hills",
        desc: "Scenic uphill drive through Kurseong tea gardens. Check in to your hotel overlooking the valley. Evening stroll at Darjeeling Mall (Chowrasta).",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 2,
        title: "Tiger Hill Sunrise & 7-Points Sightseeing",
        desc: "Early morning sunrise over Mt. Kanchenjunga. Visit Batasia Loop, Ghoom Monastery, Himalayan Mountaineering Institute (HMI), and Padmaja Naidu Zoo (Snow Leopard).",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 3,
        title: "Toy Train Experience & Tea Estates",
        desc: "Ride the iconic steam toy train. Tour the sprawling tea estates and learn about orthodox Darjeeling black tea. Visit Peace Pagoda.",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 4,
        title: "Departure to Bagdogra / NJP",
        desc: "Breakfast with mountain views. Transfer back to Bagdogra Airport or NJP Railway Station.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80"
      }
    ],
    inclusions: [
      "3 Nights Mountain View Hotel Stay",
      "Daily Breakfast & Dinner",
      "Dedicated Vehicle for all Transfers & Sightseeing",
      "Tiger Hill Special Early Morning Permit"
    ],
    exclusions: ["Toy Train tickets & personal porterage"],
    popularFor: "Couples, Photographers, Tea Lovers",
    pickupLocation: "Bagdogra Airport (IXB) / New Jalpaiguri (NJP)"
  },
  {
    id: "uttarakhand",
    title: "Uttarakhand",
    tagline: "Mountain retreats, pilgrimage routes, lake circuits",
    category: "adventure",
    startingPrice: 9000,
    priceDisplay: "₹9,000",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviewsCount: 164,
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
    imageHigh: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=85"
    ],
    badge: "Top Rated",
    description: "Immerse in the 'Land of the Gods' covering Nainital's emerald lakes, Rishikesh river rafting on the sacred Ganges, Mussoorie's Queen of Hills charm, and spiritual Ganga Aarti.",
    highlights: [
      "Nainital Naini Lake boating & Naina Devi Temple",
      "Rishikesh White Water Rafting & Triveni Ghat Ganga Aarti",
      "Mussoorie Kempty Falls & Gun Hill Cable Car",
      "Jim Corbett National Park Jeep Safari option",
      "Haridwar Har Ki Pauri Holy Dip & Aarti"
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Nainital (Lake District)",
        desc: "Pick up from Delhi and drive through scenic Kumaon hills to Nainital. Check in and enjoy boating in Naini Lake surrounded by 7 lush peaks.",
        image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 2,
        title: "Nainital Lake Tour & Viewpoints",
        desc: "Excursion to Bhimtal, Sattal, and Naukuchiatal. Cable car ride to Snow View Point for Himalayan views. Stroll through Mall Road.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 3,
        title: "Nainital to Rishikesh Spiritual Capital",
        desc: "Drive to Rishikesh. Visit Ram Jhula, Laxman Jhula, and Beatles Ashram. Witness the majestic evening Maha Aarti at Triveni Ghat.",
        image: "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 4,
        title: "Ganges Rafting & Mussoorie Hills",
        desc: "Experience thrilling Grade III river rafting in Shivpuri. Afternoon excursion to Mussoorie to see Kempty Falls and Camel's Back Road.",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 5,
        title: "Haridwar & Return to Delhi",
        desc: "Visit Har Ki Pauri in Haridwar. Drive back to Delhi for your onward flight or train.",
        image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=600&q=80"
      }
    ],
    inclusions: [
      "4 Nights Quality Hotel Stays (Nainital + Rishikesh)",
      "Daily Breakfast & Dinner (MAP Plan)",
      "Private AC Sedan / Innova Cab for entire circuit",
      "Tolls, State Permits, and Driver Allowances"
    ],
    exclusions: ["Rafting activity fee & jungle safari permits"],
    popularFor: "Families, Spiritual Seekers, Adventure Lovers",
    pickupLocation: "Delhi Airport / Dehradun Airport / Kathgodam"
  },
  {
    id: "himachal",
    title: "Himachal Pradesh",
    tagline: "Snow valleys, pine forests, adventure trails",
    category: "hill-stations",
    startingPrice: 10800,
    priceDisplay: "₹10,800",
    duration: "6 Days / 5 Nights",
    rating: 4.9,
    reviewsCount: 240,
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80",
    imageHigh: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=85"
    ],
    badge: "Must Visit",
    description: "The complete Himachal Grand Circuit spanning British colonial Shimla, snowy Kufri peaks, adventure haven Manali, and serene Kasol in the Parvati Valley.",
    highlights: [
      "Shimla Mall Road, historic Christ Church & Ridge",
      "Kufri Yak rides & Himalayan Nature Park",
      "Manali Rohtang / Atal Tunnel snow adventure",
      "Kullu River Rafting & traditional Kullu Shawl weaving",
      "Scenic mountain drives through apple orchards and pine woods"
    ],
    itinerary: [
      {
        day: 1,
        title: "Chandigarh to Shimla (Summer Capital)",
        desc: "Scenic hill climb to Shimla. Check into hotel. Evening walk along the historic Mall Road, Lakkar Bazaar, and Scandal Point.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 2,
        title: "Kufri Snow Excursion & Jakhoo Temple",
        desc: "Visit Kufri at 8,600 ft for horse rides and valley panoramas. Afternoon visit to the giant Lord Hanuman statue at Jakhoo Hill.",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 3,
        title: "Shimla to Manali via Kullu Valley",
        desc: "Picturesque drive along Pandoh Dam and Hanogi Mata Temple. Stop in Kullu for shawl shopping and arrive in Manali by evening.",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 4,
        title: "Solang Valley & Atal Tunnel",
        desc: "Full day in the snow wonderland! Cross the Atal Tunnel to Sissu and indulge in paragliding and zorbing at Solang Valley.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 5,
        title: "Manali Local Heritage & Kasol Excursion",
        desc: "Explore Hadimba Temple, Vashisht springs, and take an optional drive to the chill vibes of Kasol and Manikaran Gurudwara.",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 6,
        title: "Manali to Chandigarh Departure",
        desc: "Post breakfast, descend to Chandigarh Airport / Railway Station with incredible memories.",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80"
      }
    ],
    inclusions: [
      "5 Nights Stays in Shimla (2N) & Manali (3N)",
      "Daily Breakfast & Dinner at all hotels",
      "Private AC Cab for the complete 6-day circuit",
      "All Interstate Taxes, Tolls & Driver Allowances"
    ],
    exclusions: ["Adventure sports entry tickets"],
    popularFor: "Couples, Groups, Family Vacations",
    pickupLocation: "Chandigarh / Delhi"
  },
  {
    id: "kerala-special",
    title: "Kerala Special",
    tagline: "Backwaters, houseboats, cultural & wellness tours",
    category: "beaches",
    startingPrice: 14400,
    priceDisplay: "₹14,400",
    duration: "5 Days / 4 Nights",
    rating: 5.0,
    reviewsCount: 310,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    imageHigh: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=1000&q=85"
    ],
    badge: "Special Exclusive",
    description: "Discover God's Own Country curated by local Calicut experts. Cruise the tranquil Alleppey backwaters on a private luxury houseboat, explore Munnar's misty tea plantations, Fort Kochi's colonial lanes, and authentic Ayurvedic wellness.",
    highlights: [
      "Private Deluxe Houseboat cruise in Alleppey with all authentic Kerala meals",
      "Munnar Misty Tea Garden excursions & wildlife safari",
      "Fort Kochi colonial heritage & Chinese Fishing Nets",
      "Authentic Ayurvedic rejuvenation massage experience",
      "Traditional Kerala Sadya on banana leaf & Kathakali live show"
    ],
    itinerary: [
      {
        day: 1,
        title: "Calicut / Kochi to Munnar Hills",
        desc: "Private luxury vehicle pickup from Calicut / Kochi. Drive past cascading Cheeyappara waterfalls and spice gardens. Check in to Munnar resort.",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 2,
        title: "Munnar Tea Country & Wildlife",
        desc: "Visit Eravikulam National Park, Mattupetty Dam, Eco Point, and Tea Museum. Evening Kathakali and Kalaripayattu martial arts show.",
        image: "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 3,
        title: "Alleppey Private Houseboat Cruise",
        desc: "Drive to Alleppey. Board your traditional luxury houseboat (Kettuvallam) at 12:00 PM. Cruise through lush palm-fringed canals, paddy fields, and village hamlets. Enjoy fresh Karimeen fish curry and all meals on board.",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 4,
        title: "Fort Kochi Heritage Walk",
        desc: "Disembark after breakfast. Drive to Fort Kochi to see 500-year-old Chinese Fishing Nets, St. Francis Church, Jewish Synagogue, and Mattancherry Palace.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 5,
        title: "Calicut / Kochi Departure",
        desc: "Breakfast at the hotel. Transfer comfortably back to Calicut or Cochin Airport.",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80"
      }
    ],
    inclusions: [
      "2 Nights Luxury Resort in Munnar",
      "1 Night Exclusive AC Houseboat in Alleppey (All Meals Included)",
      "1 Night Heritage Boutique Stay in Fort Kochi",
      "All Breakfasts + Lunch, Evening Tea & Dinner on Houseboat",
      "Chauffeur Driven AC Luxury Vehicle from Calicut/Kochi",
      "All Fuel, Tolls, Driver Allowance & Local Guide Assistance"
    ],
    exclusions: ["Airfare / Train tickets (Available on request)"],
    popularFor: "Luxury Travelers, Honeymooners, NRI & International Visitors",
    pickupLocation: "Calicut (Kozhikode) / Cochin Airport"
  },
  {
    id: "ladakh",
    title: "Ladakh",
    tagline: "High-altitude passes, Pangong Lake, monastery trails",
    category: "adventure",
    startingPrice: 22500,
    priceDisplay: "₹22,500",
    duration: "6 Days / 5 Nights",
    rating: 4.9,
    reviewsCount: 175,
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
    imageHigh: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=85"
    ],
    badge: "Bucket List",
    description: "Journey across the rooftop of the world. Witness turquoise Pangong Lake, double-humped camel rides in Nubra Valley sand dunes, Khardung La (highest motorable pass), and ancient cliffside gompas.",
    highlights: [
      "Khardung La Pass (17,982 ft) world's highest motorable pass crossing",
      "Pangong Tso Lake camping under the Milky Way galaxy",
      "Nubra Valley & Hunder Sand Dunes Double-Humped Bactrian Camel Safari",
      "Thiksey Monastery & Shanti Stupa in Leh",
      "Magnetic Hill & Sangam (Indus-Zanskar river confluence)"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh & Complete Rest",
        desc: "Fly into Kushok Bakula Rimpochee Airport (Leh). Dedicated transfer to hotel. Mandatory full day rest for high-altitude acclimatization (11,500 ft).",
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 2,
        title: "Sham Valley: Magnetic Hill & Sangam",
        desc: "Excursion to Sangam (confluence of Indus and Zanskar rivers), Magnetic Hill anti-gravity phenomenon, Gurudwara Pathar Sahib, and Hall of Fame.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 3,
        title: "Leh to Nubra Valley via Khardung La",
        desc: "Drive across legendary Khardung La Pass (17,982 ft). Descend into Nubra Valley. Enjoy double-humped camel safari on Hunder White Sand Dunes. Overnight in Swiss camp.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 4,
        title: "Nubra to Pangong Tso Lake via Shyok",
        desc: "Drive along the Shyok River to the breathtaking Pangong Tso Lake (14,270 ft) that changes color from blue to green. Stargazing at night by the lake.",
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 5,
        title: "Pangong Sunrise to Leh via Chang La",
        desc: "Witness the magnificent sunrise over Pangong Lake. Return to Leh crossing Chang La pass (17,590 ft). Visit Thiksey Monastery and Shey Palace.",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80"
      },
      {
        day: 6,
        title: "Departure from Leh",
        desc: "Early morning transfer to Leh Airport with extraordinary memories of the Himalayas.",
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600&q=80"
      }
    ],
    inclusions: [
      "3 Nights Deluxe Hotel in Leh + 1 Night Nubra Camp + 1 Night Pangong Camp",
      "Daily Breakfast & Dinner Included",
      "Dedicated Private 4x4 / Scorpio Cab with Oxygen Cylinder",
      "Inner Line Permits, Wildlife & Environmental Fees",
      "Airport Transfers in Leh"
    ],
    exclusions: ["Airfare to/from Leh & camel safari fees"],
    popularFor: "Adventure Seekers, Biking Groups, Photographers",
    pickupLocation: "Leh Airport (IXL)"
  }
];

const SERVICES_DATA = [
  {
    id: "flight-ticketing",
    title: "Flight & Ticket Booking",
    shortDesc: "Domestic & International flight bookings, train ticketing, and intercity bus booking.",
    longDesc: "Seamless flight reservations for domestic airlines and major international carriers (Emirates, Qatar Airways, Air India Express, Saudia, Etihad, FlyDubai, Indigo). Instant PNR generation, group fares, seat selection, extra baggage, and train/intercity luxury bus tickets with zero hassle.",
    icon: "plane"
  },
  {
    id: "transportation-rental",
    title: "Transportation & Rental",
    shortDesc: "Car rentals, tempo traveller rentals, and tourist bus hire.",
    longDesc: "Well-maintained fleet of sanitized vehicles with experienced, courteous drivers. Available for airport transfers (CCJ / COK / CNN / TRV), outstation road trips, wedding entourages, corporate tours, and pilgrim circuits. Choose from Sedans, Innova Crysta, 12-26 Seater Tempo Travellers, and 35-50 Seater Luxury Tourist Buses.",
    icon: "car"
  },
  {
    id: "tour-packages",
    title: "Tour Packages",
    shortDesc: "Tailored domestic & international holiday packages, FIT travel plans & group tours.",
    longDesc: "Customized holiday packages crafted to your schedule and budget. We specialize in Free Independent Traveler (FIT) itineraries, family vacations, honeymoon packages, school/college excursions, corporate MICE retreats, and GCC/International tours (Dubai, Thailand, Malaysia, Singapore, Bali, Maldives, Europe).",
    icon: "suitcase"
  },
  {
    id: "travel-assistance",
    title: "Travel Assistance",
    shortDesc: "Destination management, customized itinerary planning & travel consultation.",
    longDesc: "End-to-end destination management with visa assistance, travel insurance, currency exchange consultation, hotel vouchers, local sightseeing permits, and dedicated 24/7 trip coordinator support from start to finish.",
    icon: "headset"
  }
];

const TESTIMONIALS_DATA = [
  {
    name: "Dr. Mohammed Ashraf",
    location: "Kozhikode, Kerala",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    package: "Kerala Special & Munnar Tour",
    comment: "Gulfcom Tours made our family vacation seamless and relaxing! From the Innova cab pickup at Calicut to the Alleppey houseboat, everything was top-notch. Truly the best travel agency in Palayam, Calicut."
  },
  {
    name: "Aparna & Rahul Menon",
    location: "Kochi / Dubai NRI",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    package: "Manali & Himachal Honeymoon",
    comment: "Booked our honeymoon to Manali with Gulfcom. Transparent pricing, excellent mountain resort, and prompt 24/7 support throughout. Special thanks for arranging our Atal Tunnel and Sissu trip on short notice!"
  },
  {
    name: "Sujith Kumar",
    location: "Malappuram, Kerala",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    package: "Ladakh Adventure Expedition",
    comment: "Flawless planning for our group of 6 to Leh-Ladakh. The oxygen support in the cab, luxury camp at Pangong Lake, and local permits were handled effortlessly. 100% recommended for adventure trips!"
  }
];

const FAQ_DATA = [
  {
    q: "Where is Gulfcom Tours & Travels located in Calicut?",
    a: "We are centrally located at Maniyoth Complex, Chinthavalappu Junction, Ram Mohan Road, Palayam, Kozhikode (Calicut), Kerala – 673002, conveniently near Kalyan Kendra Silks and Sarees Pvt Ltd."
  },
  {
    q: "Can I customize the tour itinerary according to my budget?",
    a: "Yes, absolutely! We specialize in custom FIT (Free Independent Traveler) and group itineraries. Our travel consultants in Calicut will tailor hotels, vehicles, dates, and activities to fit your exact budget and preferences."
  },
  {
    q: "Do you provide flight ticketing for GCC and international destinations?",
    a: "Yes, we handle domestic and international flight bookings across all major airlines to UAE, Saudi Arabia, Qatar, Oman, Kuwait, Europe, Southeast Asia, and more with instant ticketing and best fare guarantees."
  },
  {
    q: "What types of rental vehicles do you offer?",
    a: "We provide well-maintained Sedans (Etios, Dzire), Premium SUVs (Innova Crysta, Hycross), 12/17/26-seater Luxury Tempo Travellers, and 35-50 seater air-conditioned Tourist Buses with experienced commercial drivers."
  },
  {
    q: "How do I book or request a quote?",
    a: "You can click 'Enquire Now' or 'Explore Packages' on this website, call us directly at +91 495 272 1066 / +91 9847 52 1066, or chat with us on WhatsApp for an immediate response."
  }
];
