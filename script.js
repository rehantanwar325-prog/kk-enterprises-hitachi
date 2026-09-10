/**
 * ============================================================================
 * K K ENTERPRISES ROADLINES & LOGISTICS - ULTRA PREMIUM SCRIPT
 * Sikar, Rajasthan • Goods Transport & Truck Booking
 * ============================================================================
 */

// Central Business Configuration
const BUSINESS_CONFIG = {
  name: "K K Enterprises",
  phoneDisplay: "+91 98290 12345",
  phoneNumber: "+919829012345",
  whatsappNumber: "919829012345",
  email: "info@kkenterpriseslogistics.com",
  address: "Hitachi Ganpati Tower, Bajaj Road / Station Road, Sikar, Rajasthan - 332001",
  gstin: "08AABCK1234F1ZP"
};

// Bilingual Translation Dictionary (English / Hindi)
const I18N_DICT = {
  en: {
    top_live_status: "DISPATCH TERMINAL ACTIVE",
    top_office_location: "Sikar Hub: Hitachi Ganpati Tower, Bajaj Road",
    top_helpline: "24x7 Helpline:",
    header_tagline: "ROADLINES & GOODS FREIGHT • SIKAR HUB",
    header_call_sub: "BOOK TRUCK / CALL NOW",
    header_quote_btn: "Get Freight Quote",
    nav_home: "Home",
    nav_calc: "Rate Calculator",
    nav_track: "⚡ Track Bilty",
    nav_services: "Services",
    nav_routes: "Routes Covered",
    nav_fleet: "Our Fleet",
    nav_routes_fleet: "Routes & Fleet",
    nav_why: "Why Choose Us",
    nav_about: "About Us",
    nav_contact: "Contact & Map",
    hero_pill: "TIER-1 GOODS TRANSPORT & ROADLINES • SIKAR HUB",
    hero_title: "Safe, Fast & Timely <br><span class=\"highlight-text\">Goods Transport</span> Across Bajaj Road & Sikar City",
    hero_description: "<strong>K K Enterprises Roadlines</strong> delivers dependable freight forwarding, Full Truck Load (FTL), Part Load (PTL), and secure godown warehousing. Centered at Hitachi Ganpati Tower, Sikar, directly linking Bajaj Road, Station Road, Taparia Bagechi, Piprali Road, Nawalgarh Road, and Sikar City.",
    hero_btn_calc: "Calculate Rate & Distance",
    hero_btn_call: "Call Transport Desk",
    hero_btn_track: "Track Bilty Status",
    hero_trust_1: "100% Goods Transit Safety",
    hero_trust_2: "Daily Express Dispatches",
    hero_trust_3: "Bilty & GST Invoice Ready",
    hero_card_title: "Bajaj Road Sikar Express Departures",
    hero_card_status: "High Frequency",
    hero_direct_booking: "Direct Fleet Operator — Zero Middleman Brokerage",
    stat_1_title: "Years of Operations",
    stat_1_desc: "Serving Shekhawati commerce",
    stat_2_title: "Tonnes Handled",
    stat_2_desc: "Zero loss safety record",
    stat_3_title: "Connected Cities",
    stat_3_desc: "100% Bajaj Road & Sikar City Coverage",
    stat_4_title: "On-Time Transit Rate",
    stat_4_desc: "Direct point-to-point lines",
    calc_pill: "INTERACTIVE FREIGHT CALCULATOR",
    calc_title: "Select Route & Estimate Freight Transit",
    calc_subtitle: "Calculate road distance, estimated highway transit hours, and book the ideal commercial truck instantly with guaranteed direct operator rates.",
    calc_lbl_origin: "Origin Point (Departure Hub)",
    calc_lbl_dest: "Destination City / Trade Hub",
    calc_lbl_truck: "Select Vehicle / Load Category",
    calc_lbl_dist: "Highway Distance",
    calc_lbl_time: "Estimated Transit",
    calc_lbl_matched: "Selected Fleet Vehicle:",
    calc_btn_lock: "Lock Guaranteed Rate on WhatsApp",
    calc_guarantee: "⚡ Instant quotation response directly from Sikar transport manager",
    track_pill: "BILTY / LR DISPATCH TRACKER",
    track_title: "Track Consignment Transit Milestones",
    track_subtitle: "Enter your 6-digit Consignment Note (LR/Bilty) number to monitor the progress of your dispatch.",
    track_btn: "Check Status",
    step_1_title: "Booking & Bilty Generated",
    step_2_title: "Loaded & Weighed",
    step_3_title: "In-Transit on Highway Corridor",
    step_4_title: "Destination Hub Arrival & Delivery",
    quote_pill: "INSTANT FREIGHT ESTIMATOR",
    quote_title: "Get Truck Booking Quote & WhatsApp Confirmation",
    quote_subtitle: "Fill your pickup and delivery points below. We generate an instant booking requisition that sends directly to our transport desk on WhatsApp or phone.",
    form_pickup: "Pickup City / Location",
    form_drop: "Delivery City / Destination",
    form_service: "Booking Service Type",
    form_goods: "Goods / Material Description",
    form_weight: "Estimated Weight / Volume",
    form_phone: "Your Mobile Number",
    form_name: "Your Name or Business / Firm Name",
    form_notes: "Special Instructions / Preferred Date",
    form_submit_wa: "Send Requisition via WhatsApp",
    form_submit_call: "Call Transport Dispatcher Immediately",
    services_pill: "COMPREHENSIVE LOGISTICS SOLUTIONS",
    services_title: "Freight & Roadlines Services We Provide",
    services_subtitle: "From full 32-ton truckloads to single parcel consignments, K K Enterprises handles goods transport with complete reliability and speed.",
    routes_pill: "EXPANSIVE NETWORK",
    routes_title: "Areas & Daily Routes Covered from Sikar",
    routes_subtitle: "Strategically based at Ganpati Tower, Sikar, connecting Shekhawati directly to prime national highways, mega highways, and key commercial freight hubs.",
    routes_custom_title: "Need transport for a specific city or town not listed above?",
    routes_custom_sub: "We arrange dedicated trucks to any destination across India from Sikar.",
    routes_custom_btn: "Ask Route Availability: +91 98290 12345",
    fleet_pill: "MODERN COMMERCIAL VEHICLES",
    fleet_title: "Our Truck Fleet & Loading Capacity",
    fleet_subtitle: "From compact city pickup trucks to heavy multi-axle 32-foot closed containers, we match the exact truck for your cargo weight and volume.",
    about_pill: "ABOUT K K ENTERPRISES",
    about_title: "Built on Commercial Integrity & Roadway Excellence",
    about_lead: "Established at <strong>Hitachi Ganpati Tower, Bajaj Road, Sikar</strong>, K K Enterprises has grown to become Shekhawati's most dependable goods transport and roadlines partner.",
    about_body: "We understand that for shopkeepers, grain traders, industrial units, and builders, a delay in transport means a direct loss of business. That is why we operate with a strict no-nonsense philosophy: verified trucks, transparent freight calculation, guaranteed bilty receipts, and hands-on driver supervision.",
    why_pill: "OUR COMMITMENTS",
    why_title: "Why Businesses Trust K K Enterprises",
    why_subtitle: "No empty claims. Here are the concrete service guarantees that make traders and corporations choose us for repeat transport bookings.",
    reviews_pill: "TRADER REVIEWS",
    reviews_title: "What Sikar Merchants Say",
    reviews_subtitle: "Read feedback from business owners and distributors who rely on our daily freight dispatch.",
    faq_pill: "FREQUENT QUESTIONS",
    faq_title: "Everything You Need to Know Before Booking",
    contact_pill: "GET IN TOUCH",
    contact_title: "Visit Our Sikar Transport Office",
    contact_intro: "Have questions regarding freight rates, route availability, or godown storage? Reach out to our transport desk or visit us directly."
  },
  hi: {
    top_live_status: "डिस्पैच टर्मिनल सक्रिय है",
    top_office_location: "सीकर ऑफिस: हिताची गणपति टॉवर, बजाज रोड",
    top_helpline: "24x7 हेल्पलाइन:",
    header_tagline: "रोडलाइन्स एवं माल परिवहन • सीकर हब",
    header_call_sub: "ट्रक बुकिंग / अभी कॉल करें",
    header_quote_btn: "भाड़ा रेट जानें",
    nav_home: "होम",
    nav_calc: "भाड़ा कैलकुलेटर",
    nav_track: "⚡ बिल्टी ट्रैक करें",
    nav_services: "हमारी सेवाएँ",
    nav_routes: "प्रमुख रूट्स",
    nav_fleet: "हमारे ट्रक / फ्लीट",
    nav_routes_fleet: "रूट्स व गाड़ियाँ",
    nav_why: "हमें क्यों चुनें",
    nav_about: "हमारे बारे में",
    nav_contact: "संपर्क एवं पता",
    hero_pill: "शीर्ष माल परिवहन एवं रोडलाइन्स • सीकर हब",
    hero_title: "सुरक्षित, तेज एवं समय पर <br><span class=\"highlight-text\">माल परिवहन</span> राजस्थान व पूरे भारत में",
    hero_description: "<strong>के के एंटरप्राइजेज रोडलाइन्स</strong> सीकर से फुल ट्रक लोड (FTL), पार्ट लोड पार्सल (PTL), और सुरक्षित गोदाम वेयरहाउसिंग की विश्वसनीय सेवा प्रदान करता है। गणपति टॉवर सीकर से जयपुर, दिल्ली NCR, बीकानेर, गुजरात एवं पूरे भारत में सीधी गाड़ियाँ।",
    hero_btn_calc: "भाड़ा व दूरी कैलकुलेटर",
    hero_btn_call: "सीधा फोन करें",
    hero_btn_track: "बिल्टी स्टेटस देखें",
    hero_trust_1: "100% माल सुरक्षा व बीमा सहायता",
    hero_trust_2: "रोजाना एक्सप्रेस रवानगी",
    hero_trust_3: "पक्की बिल्टी व GST बिल उपलब्ध",
    hero_card_title: "रोजाना सीधी रवानगी रूट्स",
    hero_card_status: "नियमित सेवा",
    hero_direct_booking: "सीधी ट्रांसपोर्टर बुकिंग — कोई दलाल/बिचौलिया कमीशन नहीं",
    stat_1_title: "वर्षों का अटूट विश्वास",
    stat_1_desc: "शेखावाटी व्यापार की सेवा में",
    stat_2_title: "टन माल सुरक्षित पहुँचाया",
    stat_2_desc: "शून्य नुकसान का रिकॉर्ड",
    stat_3_title: "जुड़े हुए शहर व मार्ग",
    stat_3_desc: "राजस्थान व पूरे भारत का नेटवर्क",
    stat_4_title: "समय पर डिलीवरी दर",
    stat_4_desc: "सीधी हाईवे एक्सप्रेस लाइन",
    calc_pill: "इंटरैक्टिव भाड़ा कैलकुलेटर",
    calc_title: "रूट चुनें और हाईवे दूरी व समय देखें",
    calc_subtitle: "सीकर से अपने गंतव्य की दूरी, समय और गाड़ी का प्रकार चुनें और तुरंत सही रेट प्राप्त करें।",
    calc_lbl_origin: "रवानगी स्थान (सीकर हब)",
    calc_lbl_dest: "गंतव्य शहर / ट्रांसपोर्ट नगर",
    calc_lbl_truck: "गाड़ी या भार का प्रकार चुनें",
    calc_lbl_dist: "हाईवे सड़क दूरी",
    calc_lbl_time: "अनुमानित डिलीवरी समय",
    calc_lbl_matched: "चुनी गई गाड़ी:",
    calc_btn_lock: "व्हाट्सएप पर पक्की रेट प्राप्त करें",
    calc_guarantee: "⚡ सीकर ट्रांसपोर्ट मैनेजर से 5 मिनट में सटीक कोटेशन",
    track_pill: "बिल्टी / LR ट्रैकर सिम्युलेटर",
    track_title: "अपनी गाड़ी व माल की लोकेशन देखें",
    track_subtitle: "अपनी बिल्टी संख्या (LR No.) दर्ज करके माल के रास्ते की स्थिति देखें।",
    track_btn: "स्टेटस देखें",
    step_1_title: "बुकिंग व बिल्टी तैयार",
    step_2_title: "माल लोड व वजन सत्यापित",
    step_3_title: "हाईवे पर गाड़ी रवाना (इन-ट्रांजिट)",
    step_4_title: "गंतव्य हब पर आगमन व डिलीवरी",
    quote_pill: "तुरंत भाड़ा कोटेशन",
    quote_title: "गाड़ी बुकिंग कोटेशन व व्हाट्सएप पुष्टि",
    quote_subtitle: "नीचे अपना विवरण भरें। तुरंत हमारे ट्रांसपोर्ट मैनेजर को व्हाट्सएप पर मैसेज जाएगा।",
    form_pickup: "माल उठाने का स्थान (पिकअप)",
    form_drop: "माल पहुँचाने का शहर (ड्रॉप)",
    form_service: "बुकिंग का प्रकार",
    form_goods: "माल/सामान का विवरण",
    form_weight: "वजन या मात्रा",
    form_phone: "आपका मोबाइल नंबर",
    form_name: "आपका नाम या फर्म/दुकान का नाम",
    form_notes: "अतिरिक्त निर्देश / तारीख",
    form_submit_wa: "व्हाट्सएप पर कोटेशन भेजें",
    form_submit_call: "तुरंत ट्रांसपोर्टर को कॉल करें",
    services_pill: "व्यापक ट्रांसपोर्ट सेवाएँ",
    services_title: "हमारी प्रमुख माल परिवहन सेवाएँ",
    services_subtitle: "32-टन भारी कंटेनर से लेकर छोटे पार्सल तक, के के एंटरप्राइजेज पूरी जिम्मेदारी से माल पहुँचाता है।",
    routes_pill: "विशाल नेटवर्क",
    routes_title: "सीकर से रोजाना चलने वाली गाड़ियाँ",
    routes_subtitle: "गणपति टॉवर सीकर से नेशनल हाईवे 52 व मुख्य राजमार्गों द्वारा सीधा जुड़ाव।",
    routes_custom_title: "क्या आपको किसी अन्य शहर के लिए गाड़ी चाहिए?",
    routes_custom_sub: "हम सीकर से पूरे भारत के किसी भी शहर के लिए सीधी गाड़ी उपलब्ध कराते हैं।",
    routes_custom_btn: "रूट उपलब्धता पूछें: +91 98290 12345",
    fleet_pill: "आधुनिक कमर्शियल गाड़ियाँ",
    fleet_title: "हमारी ट्रक फ्लीट व भार क्षमता",
    fleet_subtitle: "टाटा 407, आयशर 14-19 फीट, 32 फीट बंद कंटेनर और 10/12 चक्का टॉरस ट्रक।",
    about_pill: "के के एंटरप्राइजेज के बारे में",
    about_title: "ईमानदारी और विश्वसनीयता की ठोस नींव",
    about_lead: "<strong>हिताची गणपति टॉवर, बजाज रोड, सीकर</strong> में स्थापित, के के एंटरप्राइजेज शेखावाटी का भरोसेमंद ट्रांसपोर्टर है।",
    about_body: "हम जानते हैं कि व्यापारियों और उद्योगपतियों के लिए गाड़ी की देरी का मतलब व्यापार का नुकसान है। इसलिए हम समयबद्ध रवानगी, पक्की बिल्टी और उचित भाड़े पर काम करते हैं।",
    why_pill: "हमारी विशेषताएँ",
    why_title: "व्यापारी के के एंटरप्राइजेज पर क्यों भरोसा करते हैं",
    why_subtitle: "कोई झूठे वादे नहीं। सीधे ट्रांसपोर्टर से सेवा, सुरक्षित माल और समय पर डिलीवरी।",
    reviews_pill: "व्यापारियों की राय",
    reviews_title: "सीकर के व्यापारियों का अनुभव",
    reviews_subtitle: "जानिए सीकर के व्यापारी और सप्लायर्स हमारे बारे में क्या कहते हैं।",
    faq_pill: "सामान्य प्रश्न",
    faq_title: "बुकिंग से पहले आपके जरूरी सवाल",
    contact_pill: "संपर्क करें",
    contact_title: "हमारे सीकर ट्रांसपोर्ट ऑफिस पधारें",
    contact_intro: "भाड़ा रेट, गाड़ी बुकिंग या गोदाम की जानकारी के लिए तुरंत फोन करें या ऑफिस आएं।"
  }
};

// Route Database for Interactive Distance & Rate Calculator
const ROUTE_DATA = {
  bajaj_road: {
    title: "BAJAJ ROAD CENTRAL MARKET",
    highway: "Ganpati Tower, Taparia Bagechi & Main Market",
    dist: "0.5 - 1 KM",
    distSub: "Immediate showroom neighborhood",
    time: "15 - 30 Mins",
    timeSub: "Express local delivery & fitting"
  },
  station_road: {
    title: "STATION ROAD & TAPARIA BAGECHI",
    highway: "Station Road Link via Bajaj Road",
    dist: "1 - 2 KM",
    distSub: "Direct commercial connection",
    time: "20 - 30 Mins",
    timeSub: "Immediate dispatch from Ganpati Tower"
  },
  kalyan_circle: {
    title: "KALYAN CIRCLE & COURT ROAD",
    highway: "Main City Artery via Bajaj Road",
    dist: "2 - 3 KM",
    distSub: "Central Sikar administrative hub",
    time: "30 - 45 Mins",
    timeSub: "Fast showroom vehicle"
  },
  subhash_chowk: {
    title: "SUBHASH CHOWK & FATEHPURI GATE",
    highway: "Old City Bazaar Corridor",
    dist: "2 - 3 KM",
    distSub: "Dense commercial & residential bazaar",
    time: "30 Mins",
    timeSub: "Dedicated compact loader"
  },
  piprali_road: {
    title: "PIPRALI ROAD COACHING HUB",
    highway: "Via Kalyan Circle to Piprali Road",
    dist: "4 - 5 KM",
    distSub: "Coaching institutes, hostels & colonies",
    time: "45 Mins - 1 Hour",
    timeSub: "Priority AC delivery & installation"
  },
  nawalgarh_road: {
    title: "NAWALGARH ROAD & DEVIPURA",
    highway: "Via Station Road to Nawalgarh Road",
    dist: "3 - 5 KM",
    distSub: "Major residential & college corridor",
    time: "35 - 50 Mins",
    timeSub: "Doorstep delivery van"
  },
  riico_palwas: {
    title: "RIICO INDUSTRIAL AREA & PALWAS RD",
    highway: "Industrial Express Corridor",
    dist: "5 - 7 KM",
    distSub: "Factories, workshops & commercial complexes",
    time: "45 Mins - 1 Hour",
    timeSub: "Heavy cooling equipment delivery"
  },
  fatehpur_road: {
    title: "FATEHPUR ROAD BYPASS (SIKAR CITY)",
    highway: "North City Corridor via Bajaj Road",
    dist: "3 - 5 KM",
    distSub: "Showrooms, hospitals & residential colonies",
    time: "35 - 45 Mins",
    timeSub: "Express same-day dispatch"
  }
};

let currentLanguage = "en";
let currentSelectedVehicle = "Tata Ace / Loader (Express Doorstep)";

document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitcher();
  initMobileMenu();
  initHeaderScrollEffect();
  initFreightCalculator();
  initBiltyTracker();
  initFreightQuoteForm();
  initRouteTabs();
  initAddressCopy();
  initCurrentYear();
  initActiveNavLinkOnScroll();
  initHero3DBackground();
  initCard3DTilt();
});

/**
 * 1. Bilingual Language Switcher (EN / हिन्दी)
 */
function initLanguageSwitcher() {
  const switchBtn = document.getElementById("langSwitchBtn");
  const switchText = document.getElementById("langSwitchText");
  const mobileSwitchBtn = document.getElementById("mobileLangSwitchBtn");
  const mobileLangText = document.getElementById("mobileLangText");

  function setLanguage(lang) {
    currentLanguage = lang;
    document.body.setAttribute("data-lang", lang);

    const dict = I18N_DICT[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    if (switchText) {
      switchText.textContent = lang === "en" ? "हिन्दी में देखें" : "View in English";
    }
    if (mobileLangText) {
      mobileLangText.textContent = lang === "en" ? "हिन्दी (Hindi)" : "English";
    }
  }

  if (switchBtn) {
    switchBtn.addEventListener("click", () => {
      setLanguage(currentLanguage === "en" ? "hi" : "en");
    });
  }

  if (mobileSwitchBtn) {
    mobileSwitchBtn.addEventListener("click", () => {
      setLanguage(currentLanguage === "en" ? "hi" : "en");
    });
  }
}

/**
 * 2. Interactive Freight Distance & Rate Estimator
 */
function initFreightCalculator() {
  const destSelect = document.getElementById("calcDestination");
  const truckChips = document.querySelectorAll(".truck-chip");
  const lockRateBtn = document.getElementById("btnLockRateWhatsApp");

  const displayTitle = document.getElementById("displayRouteTitle");
  const displayHighway = document.getElementById("displayHighwayTag");
  const displayDist = document.getElementById("calcDistanceVal");
  const displayDistSub = document.getElementById("calcDistSub");
  const displayTime = document.getElementById("calcTimeVal");
  const displayTimeSub = document.getElementById("calcTimeSub");
  const displayVehicle = document.getElementById("calcSelectedVehicle");

  function updateMetrics() {
    const routeKey = destSelect ? destSelect.value : "bajaj_road";
    const data = ROUTE_DATA[routeKey] || ROUTE_DATA.bajaj_road;

    if (displayTitle) displayTitle.textContent = data.title;
    if (displayHighway) displayHighway.textContent = data.highway;
    if (displayDist) displayDist.textContent = data.dist;
    if (displayDistSub) displayDistSub.textContent = data.distSub;
    if (displayTime) displayTime.textContent = data.time;
    if (displayTimeSub) displayTimeSub.textContent = data.timeSub;
    if (displayVehicle) displayVehicle.textContent = currentSelectedVehicle;
  }

  if (destSelect) {
    destSelect.addEventListener("change", updateMetrics);
  }

  truckChips.forEach(chip => {
    chip.addEventListener("click", () => {
      truckChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentSelectedVehicle = chip.getAttribute("data-vehicle") || "Tata Ace / Loader (Express Doorstep)";
      updateMetrics();
    });
  });

  if (lockRateBtn) {
    lockRateBtn.addEventListener("click", () => {
      const routeText = destSelect ? destSelect.options[destSelect.selectedIndex].text : "Bajaj Road Central Market";
      const dist = displayDist ? displayDist.textContent : "115 KM";
      const time = displayTime ? displayTime.textContent : "3-4 Hours";

      const msg = [
        `🚚 *FREIGHT RATE ENQUIRY (CALCULATOR)*`,
        `*K K Enterprises Roadlines, Sikar*`,
        `━━━━━━━━━━━━━━━━━━━━━━`,
        `📍 *Pickup:* Sikar Hub (Ganpati Tower)`,
        `🎯 *Destination:* ${routeText}`,
        `🛣️ *Distance:* ${dist}`,
        `⏱️ *Est. Transit:* ${time}`,
        `🚛 *Vehicle Type:* ${currentSelectedVehicle}`,
        `━━━━━━━━━━━━━━━━━━━━━━`,
        `_Please provide best guaranteed freight rate & vehicle availability._`
      ].join("\n");

      const url = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }

  updateMetrics();
}

/**
 * 3. Interactive Bilty / Consignment Tracker Simulator
 */
function initBiltyTracker() {
  const biltyInput = document.getElementById("biltyInput");
  const trackBtn = document.getElementById("btnTrackBilty");
  const demoBtn = document.getElementById("btnTryDemoLR");
  const resultPanel = document.getElementById("trackingResultPanel");

  const resBiltyNo = document.getElementById("resBiltyNo");
  const resRoute = document.getElementById("resRoute");
  const resVehicle = document.getElementById("resVehicle");
  const resStatus = document.getElementById("resStatus");

  function trackLR(number) {
    const cleanNo = number.trim().toUpperCase() || "KK-BAJAJ-101";
    if (biltyInput) biltyInput.value = cleanNo;

    if (resBiltyNo) resBiltyNo.textContent = cleanNo;

    // Realistic delivery simulation from Bajaj Road Showroom
    if (cleanNo.includes("PIPRALI") || cleanNo.endsWith("20")) {
      if (resRoute) resRoute.textContent = "Hitachi Ganpati Tower, Bajaj Road ➔ Piprali Road Coaching Hub";
      if (resVehicle) resVehicle.textContent = "RJ-23-GB-4192 (Express AC Delivery Van)";
      if (resStatus) {
        resStatus.textContent = "IN-TRANSIT (ON SCHEDULE - 15 MIN AWAY)";
        resStatus.style.color = "#34d399";
      }
    } else if (cleanNo.includes("STATION") || cleanNo.endsWith("11")) {
      if (resRoute) resRoute.textContent = "Hitachi Ganpati Tower, Bajaj Road ➔ Station Road & Taparia Bagechi";
      if (resVehicle) resVehicle.textContent = "RJ-23-GA-1029 (Showroom Dispatch Loader)";
      if (resStatus) {
        resStatus.textContent = "OUT FOR DOORSTEP DELIVERY";
        resStatus.style.color = "#38bdf8";
      }
    } else if (cleanNo.includes("NAWAL") || cleanNo.endsWith("55")) {
      if (resRoute) resRoute.textContent = "Hitachi Ganpati Tower, Bajaj Road ➔ Nawalgarh Road Sikar";
      if (resVehicle) resVehicle.textContent = "RJ-23-GB-8840 (Showroom Delivery Van)";
      if (resStatus) {
        resStatus.textContent = "DISPATCH CONFIRMED (LOADED)";
        resStatus.style.color = "#ffffff";
      }
    } else {
      if (resRoute) resRoute.textContent = "Hitachi Ganpati Tower, Bajaj Road ➔ Bajaj Road Market (Local Doorstep)";
      if (resVehicle) resVehicle.textContent = "RJ-23-GC-5801 (Bajaj Road Express Loader)";
      if (resStatus) {
        resStatus.textContent = "OUT FOR SAME-DAY DELIVERY & INSTALLATION";
        resStatus.style.color = "#34d399";
      }
    }

    if (resultPanel) {
      resultPanel.style.display = "block";
      resultPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  if (trackBtn) {
    trackBtn.addEventListener("click", () => {
      const val = biltyInput ? biltyInput.value : "";
      trackLR(val);
    });
  }

  if (demoBtn) {
    demoBtn.addEventListener("click", () => {
      trackLR("KK-84920");
    });
  }

  // Wire Hero Inline Quick Bilty Tracker
  const heroBiltyInput = document.getElementById("heroBiltyInput");
  const heroQuickTrackBtn = document.getElementById("heroQuickTrackBtn");
  if (heroQuickTrackBtn) {
    heroQuickTrackBtn.addEventListener("click", () => {
      const val = heroBiltyInput && heroBiltyInput.value.trim() ? heroBiltyInput.value.trim() : "KK-84920";
      const targetSec = document.getElementById("tracking");
      if (targetSec) {
        targetSec.scrollIntoView({ behavior: "smooth" });
      }
      setTimeout(() => {
        trackLR(val);
      }, 450);
    });
  }

  if (heroBiltyInput) {
    heroBiltyInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (heroQuickTrackBtn) heroQuickTrackBtn.click();
      }
    });
  }
}


/**
 * 5. Mobile Drawer Menu Functionality
 */
function initMobileMenu() {
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (!mobileToggle || !mobileDrawer) return;

  mobileToggle.addEventListener("click", () => {
    const isOpen = mobileDrawer.classList.toggle("open");
    mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileDrawer.classList.remove("open");
      mobileToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/**
 * 6. Sticky Header elevation on scroll
 */
function initHeaderScrollEffect() {
  const header = document.getElementById("siteHeader");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.style.boxShadow = "0 6px 24px rgba(3, 8, 17, 0.12)";
    } else {
      header.style.boxShadow = "var(--shadow-sm)";
    }
  }, { passive: true });
}

/**
 * 7. Freight Quote Form submission to WhatsApp
 */
function initFreightQuoteForm() {
  const form = document.getElementById("freightQuoteForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const pickupCity = document.getElementById("pickupCity")?.value.trim() || "Sikar";
    const dropCity = document.getElementById("dropCity")?.value.trim() || "";
    const loadType = document.getElementById("loadType")?.value || "Full Truck Load (FTL)";
    const goodsType = document.getElementById("goodsType")?.value.trim() || "General Goods";
    const weight = document.getElementById("weightQuantity")?.value.trim() || "As per requirement";
    const customerPhone = document.getElementById("customerPhone")?.value.trim() || "";
    const customerName = document.getElementById("customerName")?.value.trim() || "";
    const notes = document.getElementById("additionalNotes")?.value.trim() || "None";

    if (!dropCity || !customerPhone || !customerName) {
      alert("Please fill in Destination City, Your Name, and Mobile Number.");
      return;
    }

    const messageLines = [
      `🚚 *NEW FREIGHT BOOKING REQUISITION*`,
      `*K K Enterprises Roadlines, Sikar*`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Customer / Firm:* ${customerName}`,
      `📱 *Contact No:* ${customerPhone}`,
      `📍 *Pickup Location:* ${pickupCity}`,
      `🎯 *Delivery Destination:* ${dropCity}`,
      `🚛 *Booking Type:* ${loadType}`,
      `📦 *Goods Description:* ${goodsType}`,
      `⚖️ *Estimated Weight:* ${weight}`,
      `📝 *Special Notes:* ${notes}`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `_Inquiry sent from K K Enterprises portal_`
    ];

    const fullMessage = messageLines.join("\n");
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodedMessage}`;

    const submitBtn = document.getElementById("btnWhatsAppSubmit");
    const originalBtnHTML = submitBtn ? submitBtn.innerHTML : "";

    if (submitBtn) {
      submitBtn.innerHTML = `<span>✓ Opening WhatsApp...</span>`;
      submitBtn.style.opacity = "0.85";
    }

    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      if (submitBtn) {
        submitBtn.innerHTML = originalBtnHTML;
        submitBtn.style.opacity = "1";
      }
    }, 400);
  });
}

/**
 * 8. Route Matrix Tab Filter Switching
 */
function initRouteTabs() {
  const tabButtons = document.querySelectorAll(".route-tab-btn");
  const tabPanes = document.querySelectorAll(".route-pane");

  if (!tabButtons.length || !tabPanes.length) return;

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      tabButtons.forEach(btn => {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      });

      tabPanes.forEach(pane => {
        pane.classList.remove("active");
      });

      button.classList.add("active");
      button.setAttribute("aria-selected", "true");

      const targetId = button.getAttribute("data-target");
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add("active");
      }
    });
  });
}

/**
 * 9. Copy Address to Clipboard
 */
function initAddressCopy() {
  const copyBtn = document.getElementById("copyAddressBtn");
  if (!copyBtn) return;

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(BUSINESS_CONFIG.address).then(() => {
      const originalText = copyBtn.innerText;
      copyBtn.innerText = "✓ Address Copied!";
      copyBtn.style.borderColor = "#10b981";
      copyBtn.style.color = "#10b981";

      setTimeout(() => {
        copyBtn.innerText = originalText;
        copyBtn.style.borderColor = "";
        copyBtn.style.color = "";
      }, 2500);
    }).catch(err => {
      console.warn("Could not copy text: ", err);
    });
  });
}

/**
 * 10. Dynamic Copyright Year
 */
function initCurrentYear() {
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/**
 * 11. Highlight Active Nav Link on Scroll
 */
function initActiveNavLinkOnScroll() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-menu .nav-link");

  if (!sections.length || !navLinks.length) return;

  window.addEventListener("scroll", () => {
    let currentSectionId = "";
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentSectionId = section.getAttribute("id");
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active");
        }
      });
    }
  }, { passive: true });
}

/**
 * 12. Interactive Three.js 3D Logistics Highway & Waypoints Background
 */
function initHero3DBackground() {
  const canvas = document.getElementById("hero3dCanvas");
  const heroSection = document.getElementById("home");
  if (!canvas || !heroSection) return;

  // Check if THREE is loaded
  if (typeof THREE === "undefined") {
    setTimeout(initHero3DBackground, 150);
    return;
  }

  try {
    let width = heroSection.clientWidth;
    let height = heroSection.clientHeight;

    // Scene & Camera setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 12, 38);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Helper: Generate soft circular starlight texture (eliminates blocky square pixels)
    function createGlowStarTexture() {
      const c = document.createElement("canvas");
      c.width = 64;
      c.height = 64;
      const ctx = c.getContext("2d");
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(0.2, "rgba(255, 220, 160, 0.85)");
      grad.addColorStop(0.5, "rgba(255, 122, 0, 0.35)");
      grad.addColorStop(0.8, "rgba(0, 240, 255, 0.12)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(c);
    }

    const starTexture = createGlowStarTexture();

    // 1. Smooth Celestial Highway Wave Field (Soft circular particles)
    const countX = 44;
    const countZ = 44;
    const numParticles = countX * countZ;
    const positions = new Float32Array(numParticles * 3);
    const colors = new Float32Array(numParticles * 3);

    const colorWhite = new THREE.Color(0xffffff);
    const colorSilver = new THREE.Color(0xd4d4d8);
    const colorMuted = new THREE.Color(0x71717a);

    let idx = 0;
    for (let ix = 0; ix < countX; ix++) {
      for (let iz = 0; iz < countZ; iz++) {
        const x = (ix - countX / 2) * 2.8;
        const z = (iz - countZ / 2) * 2.8 - 15;
        const y = -4;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;

        const distCenter = Math.abs(x);
        let pColor;
        if (distCenter < 10) {
          pColor = colorWhite.clone().lerp(colorSilver, Math.random() * 0.3);
        } else {
          pColor = colorSilver.clone().lerp(colorMuted, 0.4);
        }

        colors[idx * 3] = pColor.r;
        colors[idx * 3 + 1] = pColor.g;
        colors[idx * 3 + 2] = pColor.b;

        idx++;
      }
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const pMaterial = new THREE.PointsMaterial({
      size: 0.95,
      map: starTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(pGeo, pMaterial);
    scene.add(particleSystem);

    // 2. High-Speed 3D Highway Spline Curves (Curved Neon Corridors)
    const corridors = [
      // Corridor 1: Bajaj Road Showroom Corridor (Amber)
      {
        curve: new THREE.CatmullRomCurve3([
          new THREE.Vector3(-28, 8, -60),
          new THREE.Vector3(-14, 4, -30),
          new THREE.Vector3(0, 2, -10),
          new THREE.Vector3(14, 0, 10),
          new THREE.Vector3(28, 2, 30)
        ]),
        color: 0xff7a00,
        pulses: [0.1, 0.4, 0.75],
        speed: 0.003
      },
      // Corridor 2: Sikar City Piprali Corridor (Cyan)
      {
        curve: new THREE.CatmullRomCurve3([
          new THREE.Vector3(32, 10, -70),
          new THREE.Vector3(16, 6, -38),
          new THREE.Vector3(0, 2, -10),
          new THREE.Vector3(-16, 1, 15),
          new THREE.Vector3(-30, 3, 35)
        ]),
        color: 0x00f0ff,
        pulses: [0.2, 0.55, 0.9],
        speed: 0.0035
      },
      // Corridor 3: Station Road / Sikar City Corridor (White)
      {
        curve: new THREE.CatmullRomCurve3([
          new THREE.Vector3(-35, 9, -50),
          new THREE.Vector3(-18, 5, -25),
          new THREE.Vector3(0, 2, -10),
          new THREE.Vector3(12, 1, 12),
          new THREE.Vector3(24, 0, 32)
        ]),
        color: 0x38bdf8,
        pulses: [0.35, 0.7],
        speed: 0.0028
      }
    ];

    const pulseMeshes = [];

    corridors.forEach(corridor => {
      // Draw smooth continuous glowing highway spline
      const points = corridor.curve.getPoints(90);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineBasicMaterial({
        color: corridor.color,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending
      });
      const highwayLine = new THREE.Line(lineGeo, lineMat);
      scene.add(highwayLine);

      // Create glowing photon pulse clusters travelling on curve
      corridor.pulses.forEach(startT => {
        const pulseGeo = new THREE.SphereGeometry(0.55, 12, 12);
        const pulseMat = new THREE.MeshBasicMaterial({
          color: corridor.color,
          transparent: true,
          opacity: 0.9,
          blending: THREE.AdditiveBlending
        });
        const pulseMesh = new THREE.Mesh(pulseGeo, pulseMat);
        scene.add(pulseMesh);

        pulseMeshes.push({
          mesh: pulseMesh,
          curve: corridor.curve,
          t: startT,
          speed: corridor.speed
        });
      });
    });

    // 3. 3D Floating Strategic Hubs (Bajaj Road, Station Road, Piprali)
    const hubsGroup = new THREE.Group();
    const hubData = [
      { name: "Sikar Hub", pos: new THREE.Vector3(0, 2, -10), color: 0xff7a00, radius: 1.3 },
      { name: "Bajaj Road Hub", pos: new THREE.Vector3(18, 5, -34), color: 0x00f0ff, radius: 1.0 },
      { name: "Piprali Hub", pos: new THREE.Vector3(-20, 7, -46), color: 0xffb703, radius: 1.0 }
    ];

    const hubRings = [];
    hubData.forEach((hub) => {
      // Hub core
      const coreGeo = new THREE.SphereGeometry(hub.radius, 16, 16);
      const coreMat = new THREE.MeshBasicMaterial({
        color: hub.color,
        wireframe: true,
        transparent: true,
        opacity: 0.85
      });
      const core = new THREE.Mesh(coreGeo, coreMat);
      core.position.copy(hub.pos);
      hubsGroup.add(core);

      // Pulse ring
      const ringGeo = new THREE.RingGeometry(hub.radius * 1.5, hub.radius * 1.8, 30);
      const ringMat = new THREE.MeshBasicMaterial({
        color: hub.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.copy(hub.pos);
      hubsGroup.add(ring);
      hubRings.push(ring);
    });

    scene.add(hubsGroup);

    // 4. Mouse Interactive Parallax Tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    heroSection.addEventListener("mousemove", (e) => {
      const rect = heroSection.getBoundingClientRect();
      targetMouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      targetMouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    }, { passive: true });

    heroSection.addEventListener("mouseleave", () => {
      targetMouseX = 0;
      targetMouseY = 0;
    });

    // 5. Animation Loop
    let clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Animate undulating roadway wave with soft sine curves
      const pos = particleSystem.geometry.attributes.position.array;
      let pIdx = 0;
      for (let ix = 0; ix < countX; ix++) {
        for (let iz = 0; iz < countZ; iz++) {
          const x = (ix - countX / 2) * 2.8;
          const z = (iz - countZ / 2) * 2.8 - 15;

          const wave = Math.sin(x * 0.09 + elapsedTime * 1.4) * 1.4 +
                       Math.cos(z * 0.07 + elapsedTime * 1.1) * 1.2;

          pos[pIdx * 3 + 1] = wave - 4.5;
          pIdx++;
        }
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;

      // Animate freight light pulses gliding along 3D splines
      pulseMeshes.forEach(item => {
        item.t += item.speed;
        if (item.t > 1) item.t = 0;
        const pt = item.curve.getPointAt(item.t);
        item.mesh.position.copy(pt);
      });

      // Rotate hub rings
      hubRings.forEach((ring, rIdx) => {
        ring.rotation.z += 0.018 * (rIdx % 2 === 0 ? 1 : -1);
        ring.scale.setScalar(1 + Math.sin(elapsedTime * 2.5 + rIdx) * 0.12);
      });

      // Smooth mouse parallax interpolation
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      camera.position.x = currentMouseX * 10;
      camera.position.y = 12 + currentMouseY * 5;
      camera.lookAt(0, 1, -20);

      renderer.render(scene, camera);
    }

    animate();

    // Resize Handler
    window.addEventListener("resize", () => {
      width = heroSection.clientWidth;
      height = heroSection.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });

  } catch (err) {
    console.warn("3D WebGL Background initialization skipped: ", err);
  }
}

/**
 * 13. Interactive 3D Card Hover Tilt for Telemetry Card
 */
function initCard3DTilt() {
  const card = document.querySelector(".hero-telemetry-card");
  if (!card) return;

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  });
}



/* ==========================================================================
   HITACHI & DAIKIN PRODUCT SHOWCASE FILTERING
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const prodFilterBtns = document.querySelectorAll('.prod-filter-btn');
  const prodCards = document.querySelectorAll('.product-card');

  if (prodFilterBtns.length && prodCards.length) {
    prodFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        prodFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.getAttribute('data-target');

        prodCards.forEach(card => {
          if (target === 'all') {
            card.classList.remove('hidden');
          } else {
            const filterData = card.getAttribute('data-filter') || '';
            if (filterData.includes(target)) {
              card.classList.remove('hidden');
            } else {
              card.classList.add('hidden');
            }
          }
        });
      });
    });
  }
});
