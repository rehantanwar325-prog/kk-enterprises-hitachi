/**
 * ============================================================================
 * K K ENTERPRISES - AUTHORIZED HITACHI AC SHOWROOM
 * Hitachi Ganpati Tower, Bajaj Road, Sikar, Rajasthan
 * Authorized Air Conditioning Sales, Certified Installation & Service
 * ============================================================================
 */

// Central Business Configuration
const BUSINESS_CONFIG = {
  name: "K K Enterprises",
  tagline: "Authorized Hitachi AC Showroom",
  phoneDisplay: "+91 98290 12345",
  phoneNumber: "+919829012345",
  whatsappNumber: "919829012345",
  email: "contact@kkenterprises-sikar.com",
  address: "Hitachi Ganpati Tower, Bajaj Road / Station Road, Sikar, Rajasthan - 332001",
  gstin: "08AABCK1234F1ZP"
};

// Bilingual Translation Dictionary (English / Hindi)
const I18N_DICT = {
  en: {
    top_live_status: "SHOWROOM OPEN • BAJAJ ROAD",
    top_office_location: "Hitachi Ganpati Tower, Bajaj Road, Sikar",
    top_helpline: "Showroom Desk:",
    header_tagline: "AUTHORIZED HITACHI AC SHOWROOM • BAJAJ ROAD, SIKAR",
    header_call_sub: "SHOWROOM CALL",
    header_quote_btn: "Get AC Quote",
    nav_home: "Home",
    nav_products: "Hitachi ACs",
    nav_calc: "Tonnage Guide",
    nav_services: "Services",
    nav_why: "Why Us",
    nav_about: "About",
    nav_contact: "Contact",
    hero_pill: "OFFICIAL HITACHI SHOWROOM • BAJAJ ROAD, SIKAR",
    hero_title: "Hitachi Air Conditioners & <br><span class=\"highlight-text\">Express Delivery on Bajaj Road</span> & Sikar City",
    hero_description: "<strong>K K Enterprises</strong> is Sikar's premier authorized showroom for <strong>Hitachi Air Conditioners</strong>. Located at Hitachi Ganpati Tower, Bajaj Road, we offer 1.0, 1.5, and 2.0 Ton Inverter Split ACs, Window ACs, commercial cassette units, official company warranties, and certified doorstep installation across Sikar.",
    hero_btn_calc: "Explore AC Models & Prices",
    hero_btn_call: "Call Showroom Desk",
    hero_trust_1: "100% Brand Warranty",
    hero_trust_2: "Same-Day Doorstep Fitting",
    hero_trust_3: "Best Dealer Price in Sikar",
    hero_card_title: "Bajaj Road Showroom Active",
    hero_card_status: "Ready Stock",
    hero_direct_booking: "Direct Authorized Dealer — Zero Middleman Brokerage",
    stat_1_title: "12+ Years of Trust",
    stat_1_desc: "Serving Shekhawati homes",
    stat_2_title: "10,000+ ACs Installed",
    stat_2_desc: "Satisfied customers",
    stat_3_title: "Bajaj Road Central Store",
    stat_3_desc: "Hitachi Ganpati Tower Sikar",
    stat_4_title: "100% Genuine Products",
    stat_4_desc: "Brand invoice & warranty",
    calc_pill: "SMART AC TONNAGE SELECTOR",
    calc_title: "Find the Perfect AC for Your Room & Calculate Savings",
    calc_subtitle: "Select your room dimensions and cooling requirements below. Our showroom tool calculates the exact recommended tonnage (1.0, 1.5, or 2.0 Ton) and energy savings with direct availability at our Ganpati Tower, Bajaj Road showroom.",
    calc_lbl_origin: "Showroom Store (Bajaj Road Sikar)",
    calc_lbl_dest: "Select Room Size / Area",
    calc_lbl_truck: "Select AC Category / Model",
    calc_lbl_dist: "Cooling Capacity",
    calc_lbl_time: "Bajaj Road Delivery",
    calc_lbl_matched: "Selected Model & Brand:",
    calc_btn_lock: "Get Best Price for This AC on WhatsApp",
    calc_guarantee: "⚡ Instant quotation response directly from Bajaj Road showroom team",
    quote_pill: "SHOWROOM BEST PRICE INQUIRY",
    quote_title: "Get AC Price Quote & WhatsApp Confirmation",
    quote_subtitle: "Fill your requirements below. We generate an instant quotation and dealer discount that connects directly to our showroom sales desk on WhatsApp or phone.",
    form_drop: "Delivery Locality / Address in Sikar",
    form_service: "Required AC Type",
    form_goods: "Brand Preference",
    form_weight: "Number of Units",
    form_phone: "Your Mobile Number",
    form_name: "Your Name",
    form_notes: "Installation Requirements / Special Instructions",
    form_submit_wa: "Get Best Showroom Quote on WhatsApp",
    form_submit_call: "Call Showroom Desk Directly",
    services_pill: "AUTHORIZED SHOWROOM SERVICES",
    services_title: "AC Sales, Installation & Servicing in Sikar",
    services_subtitle: "From premium 5-star inverter split ACs for your home to multi-split and cassette units for commercial spaces, K K Enterprises provides complete cooling solutions.",
    routes_pill: "BAJAJ ROAD & SIKAR COVERAGE",
    routes_title: "Express AC Delivery Across Sikar Localities",
    routes_subtitle: "Conveniently based at Hitachi Ganpati Tower on Bajaj Road, dispatching technician vans and delivery vehicles across Sikar City within minutes.",
    routes_custom_title: "Need AC delivery or corporate installation at another locality in Sikar?",
    routes_custom_sub: "We supply and install Hitachi air conditioners across all residential and commercial zones in Sikar.",
    routes_custom_btn: "Ask Showroom Availability: +91 98290 12345",
    about_pill: "ABOUT OUR SHOWROOM",
    about_title: "Sikar's Trusted Destination for Hitachi ACs",
    about_lead: "Located centrally at <strong>Hitachi Ganpati Tower, Bajaj Road, Sikar</strong>, K K Enterprises is the leading authorized retail showroom for premium air conditioning systems in Shekhawati.",
    about_body: "We operate with a direct manufacturer-dealer commitment: 100% genuine factory-packed air conditioners, direct brand warranties, transparent dealer pricing with no hidden charges, and expert doorstep delivery and certified technician installation across Bajaj Road and Sikar City.",
    why_pill: "OUR PROMISES",
    why_title: "Why Sikar Chooses K K Enterprises Showroom",
    why_subtitle: "Experience guaranteed peace of mind with authorized company sales, transparent pricing, and dependable local service.",
    reviews_pill: "CUSTOMER REVIEWS",
    reviews_title: "What Sikar Residents & Businesses Say",
    reviews_subtitle: "Read real feedback from homeowners, doctors, and merchants who purchased their ACs from our showroom.",
    faq_pill: "FREQUENT QUESTIONS",
    faq_title: "Everything You Need to Know Before Buying",
    contact_pill: "VISIT OUR STORE",
    contact_title: "Visit Our Bajaj Road AC Showroom",
    contact_intro: "Have questions regarding AC prices, tonnage recommendation, installation, or EMI schemes? Visit our showroom or give us a call."
  },
  hi: {
    top_live_status: "शोरूम खुला है • बजाज रोड सीकर",
    top_office_location: "हिताची गणपति टॉवर, बजाज रोड, सीकर",
    top_helpline: "शोरूम डेस्क:",
    header_tagline: "अधिकृत हिताची एसी शोरूम • बजाज रोड, सीकर",
    header_call_sub: "शोरूम कॉल",
    header_quote_btn: "एसी रेट कोट",
    nav_home: "होम",
    nav_products: "हिताची एसी",
    nav_calc: "टन क्षमता गाइड",
    nav_services: "सेवाएँ",
    nav_why: "हमें क्यों चुनें",
    nav_about: "शोरूम",
    nav_contact: "संपर्क",
    hero_pill: "अधिकृत हिताची एसी शोरूम • बजाज रोड, सीकर",
    hero_title: "हिताची एयर कंडीशनर <br><span class=\"highlight-text\">बजाज रोड व सीकर में</span> एक्सप्रेस डिलीवरी व फिटिंग",
    hero_description: "<strong>के के एंटरप्राइजेज</strong> हिताची एसी का सीकर का अधिकृत शोरूम है। हिताची गणपति टॉवर, बजाज रोड पर स्थित, हमारे यहाँ 1.0, 1.5 व 2.0 टन इन्वर्टर स्प्लिट, विंडो एवं कैसेट एसी, कंपनी वारंटी और उसी दिन फिटिंग की सुविधा उपलब्ध है।",
    hero_btn_calc: "एसी मॉडल्स व रेट देखें",
    hero_btn_call: "शोरूम पर कॉल करें",
    hero_trust_1: "100% ओरिजिनल कंपनी वारंटी",
    hero_trust_2: "उसी दिन होम डिलीवरी व फिटिंग",
    hero_trust_3: "सीकर में सबसे कम डीलर रेट",
    hero_card_title: "बजाज रोड शोरूम सक्रिय",
    hero_card_status: "रेडी स्टॉक",
    hero_direct_booking: "सीधा अधिकृत डीलर — कोई बिचौलिया नहीं, बेस्ट रेट",
    stat_1_title: "12+ वर्षों का विश्वास",
    stat_1_desc: "शेखावाटी में सेवा",
    stat_2_title: "10,000+ एसी इंस्टॉल्ड",
    stat_2_desc: "संतुष्ट ग्राहक",
    stat_3_title: "बजाज रोड सेंट्रल स्टोर",
    stat_3_desc: "हिताची गणपति टॉवर सीकर",
    stat_4_title: "100% असली प्रोडक्ट्स",
    stat_4_desc: "पक्का बिल व वारंटी",
    calc_pill: "कमरे के अनुसार सही एसी चुनें",
    calc_title: "अपने कमरे के लिए सही एसी व बिजली बचत जानें",
    calc_subtitle: "नीचे अपने कमरे का साइज चुनें। हमारा टूल आपके लिए सही टन (1.0, 1.5 या 2.0 टन) और बिजली बचत की गणना करेगा, जो गणपति टॉवर, बजाज रोड स्टोर पर उपलब्ध है।",
    calc_lbl_origin: "शोरूम स्टोर (बजाज रोड सीकर)",
    calc_lbl_dest: "कमरे का साइज / एरिया चुनें",
    calc_lbl_truck: "एसी मॉडल चुनें",
    calc_lbl_dist: "कूलिंग क्षमता",
    calc_lbl_time: "बजाज रोड डिलीवरी",
    calc_lbl_matched: "चुना हुआ एसी मॉडल:",
    calc_btn_lock: "व्हाट्सएप पर इस एसी की बेस्ट रेट जानें",
    calc_guarantee: "⚡ बजाज रोड शोरूम टीम से 5 मिनट में तुरंत रेट प्राप्त करें",
    quote_pill: "शोरूम बेस्ट रेट पूछताछ",
    quote_title: "एसी रेट कोटेशन व व्हाट्सएप पर जानकारी",
    quote_subtitle: "नीचे अपनी आवश्यकता भरें। तुरंत हमारे शोरूम सेल्स डेस्क को व्हाट्सएप पर संदेश जाएगा और आपको सबसे कम रेट मिलेगी।",
    form_drop: "सीकर में डिलीवरी का पता / इलाका",
    form_service: "एसी का प्रकार",
    form_goods: "मॉडल / सीरीज वरीयता",
    form_weight: "कितने एसी चाहिए (संख्या)",
    form_phone: "आपका मोबाइल नंबर",
    form_name: "आपका नाम",
    form_notes: "फिटिंग संबंधी निर्देश / सवाल",
    form_submit_wa: "व्हाट्सएप पर बेस्ट शोरूम रेट प्राप्त करें",
    form_submit_call: "शोरूम डेस्क पर सीधा कॉल करें",
    services_pill: "अधिकृत शोरूम सेवाएँ",
    services_title: "सीकर में एसी बिक्री, इंस्टॉलेशन व सर्विसिंग",
    services_subtitle: "घर के लिए 5-स्टार इन्वर्टर एसी से लेकर दुकानों व कोचिंग के लिए कैसेट एसी तक, के के एंटरप्राइजेज संपूर्ण कूलिंग समाधान प्रदान करता है।",
    routes_pill: "बजाज रोड व सीकर कवरेज",
    routes_title: "सीकर के प्रमुख इलाकों में एक्सप्रेस एसी डिलीवरी",
    routes_subtitle: "बजाज रोड पर गणपति टॉवर से सीकर शहर के सभी इलाकों में कुछ ही मिनटों में एसी डिलीवरी व कुशल कारीगर।",
    routes_custom_title: "क्या सीकर में किसी अन्य कॉलोनी या संस्थान में एसी लगवाना है?",
    routes_custom_sub: "हम सीकर के सभी इलाकों में हिताची एसी की आपूर्ति और प्रमाणित फिटिंग प्रदान करते हैं।",
    routes_custom_btn: "शोरूम में पूछताछ करें: +91 98290 12345",
    about_pill: "शोरूम के बारे में",
    about_title: "हिताची एसी का सीकर में सबसे भरोसेमंद शोरूम",
    about_lead: "<strong>हिताची गणपति टॉवर, बजाज रोड, सीकर</strong> में स्थित, के के एंटरप्राइजेज शेखावाटी का अग्रणी अधिकृत एसी शोरूम है।",
    about_body: "हम सीधे कंपनी डीलरशिप के साथ काम करते हैं: 100% ओरिजिनल फैक्ट्री पैक एसी, पक्की कंपनी वारंटी, सबसे कम डीलर रेट और बजाज रोड व सीकर शहर में उसी दिन कुशल तकनीशियन द्वारा फिटिंग।",
    why_pill: "हमारे वादे",
    why_title: "सीकर के लोग के के एंटरप्राइजेज क्यों चुनते हैं",
    why_subtitle: "अधिकृत शोरूम से खरीदारी, पक्की कंपनी वारंटी और सीकर में भरोसेमंद लोकल सर्विस का अनुभव करें।",
    reviews_pill: "ग्राहकों की राय",
    reviews_title: "सीकर के निवासी व व्यापारी क्या कहते हैं",
    reviews_subtitle: "जानिए उन ग्राहकों का अनुभव जिन्होंने हमारे बजाज रोड शोरूम से एसी खरीदा है।",
    faq_pill: "सामान्य प्रश्न",
    faq_title: "एसी खरीदने से पहले आपके जरूरी सवाल",
    contact_pill: "शोरूम पधारें",
    contact_title: "हमारे बजाज रोड एसी शोरूम पधारें",
    contact_intro: "एसी के रेट, सही टन, फिटिंग या 0% ईएमआई के बारे में कोई भी जानकारी के लिए सीधे शोरूम आएं या फोन करें।"
  }
};

// AC Room Tonnage & Sizing Database for Interactive Calculator
const AC_ROOM_DATA = {
  bajaj_road: {
    title: "RECOMMENDED: 1.5 TON INVERTER AC",
    highway: "Ideal for 120 - 180 Sq. Ft. Master Bedrooms & Living Rooms",
    dist: "1.5 Ton",
    distSub: "5200 Watts cooling capacity • 5-Star power saver",
    time: "15 - 30 Mins",
    timeSub: "Express doorstep delivery on Bajaj Road & Sikar"
  },
  station_road: {
    title: "RECOMMENDED: 1.0 TON INVERTER AC",
    highway: "Ideal for Up to 120 Sq. Ft. Small Bedrooms & Study Rooms",
    dist: "1.0 Ton",
    distSub: "3500 Watts cooling capacity • Compact power saver",
    time: "15 - 30 Mins",
    timeSub: "Immediate delivery on Bajaj Road & Station Rd"
  },
  kalyan_circle: {
    title: "RECOMMENDED: 2.0 TON INVERTER AC",
    highway: "Ideal for 180 - 260 Sq. Ft. Large Living Halls & Drawing Rooms",
    dist: "2.0 Ton",
    distSub: "6200 Watts heavy cooling • Rapid temperature drop",
    time: "30 - 45 Mins",
    timeSub: "Express delivery across Sikar City"
  },
  subhash_chowk: {
    title: "RECOMMENDED: 2.5 TON+ / CASSETTE AC",
    highway: "Ideal for 260+ Sq. Ft. Commercial Halls, Shops & Showrooms",
    dist: "2.5 Ton+ / Cassette",
    distSub: "360-Degree even airflow for wide commercial spaces",
    time: "30 - 45 Mins",
    timeSub: "Specialist technician installation support"
  },
  piprali_road: {
    title: "RECOMMENDED: MULTI-SPLIT / INVERTER SETUP",
    highway: "Ideal for Coaching Centers, Hostels & Multiple Classrooms",
    dist: "Multi-Split Inverter",
    distSub: "Centralized energy efficiency & independent room cooling",
    time: "45 Mins - 1 Hour",
    timeSub: "Commercial project installation & site visit"
  },
  nawalgarh_road: {
    title: "RECOMMENDED: 1.5 - 2.0 TON HEAVY DUTY INVERTER",
    highway: "Ideal for Top Floor, High Sunlight & Direct Heat Rooms",
    dist: "1.5 - 2.0 Ton (52°C Tested)",
    distSub: "Tropical heavy-duty compressor for extreme Sikar summers",
    time: "30 - 45 Mins",
    timeSub: "Doorstep delivery & copper pipe installation"
  }
};

let currentLanguage = "en";
let currentSelectedAC = "Hitachi 1.5 Ton 5-Star Inverter Split AC";

document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitcher();
  initMobileMenu();
  initHeaderScrollEffect();
  initACCalculator();
  initACQuoteForm();
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
 * 2. Smart AC Tonnage & Room Cooling Calculator
 */
function initACCalculator() {
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
    const data = AC_ROOM_DATA[routeKey] || AC_ROOM_DATA.bajaj_road;

    if (displayTitle) displayTitle.textContent = data.title;
    if (displayHighway) displayHighway.textContent = data.highway;
    if (displayDist) displayDist.textContent = data.dist;
    if (displayDistSub) displayDistSub.textContent = data.distSub;
    if (displayTime) displayTime.textContent = data.time;
    if (displayTimeSub) displayTimeSub.textContent = data.timeSub;
    if (displayVehicle) displayVehicle.textContent = currentSelectedAC;
  }

  if (destSelect) {
    destSelect.addEventListener("change", updateMetrics);
  }

  truckChips.forEach(chip => {
    chip.addEventListener("click", () => {
      truckChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentSelectedAC = chip.getAttribute("data-vehicle") || "Hitachi 1.5 Ton 5-Star Inverter Split AC";
      updateMetrics();
    });
  });

  if (lockRateBtn) {
    lockRateBtn.addEventListener("click", () => {
      const roomOptionText = destSelect ? destSelect.options[destSelect.selectedIndex].text : "Master Bedroom (120-180 Sq. Ft.)";
      const tonVal = displayDist ? displayDist.textContent : "1.5 Ton";
      const deliveryTime = displayTime ? displayTime.textContent : "15 - 30 Mins";

      const msg = [
        `❄️ *AC PRICE & SHOWROOM INQUIRY*`,
        `*K K Enterprises - Authorized Hitachi AC Showroom*`,
        `*Hitachi Ganpati Tower, Bajaj Road, Sikar*`,
        `━━━━━━━━━━━━━━━━━━━━━━`,
        `🏠 *Room / Area:* ${roomOptionText}`,
        `❄️ *Recommended Capacity:* ${tonVal}`,
        `✨ *Selected AC Model:* ${currentSelectedAC}`,
        `⏱️ *Bajaj Road Delivery:* ${deliveryTime}`,
        `━━━━━━━━━━━━━━━━━━━━━━`,
        `_Hello, please share your best showroom price, brand warranty, and installation details for this AC._`
      ].join("\n");

      const url = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }

  updateMetrics();
}

/**
 * 3. Mobile Drawer Menu Functionality
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
 * 4. Sticky Header elevation on scroll
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
 * 5. AC Showroom Quote Form submission to WhatsApp
 */
function initACQuoteForm() {
  const form = document.getElementById("freightQuoteForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const dropCity = document.getElementById("dropCity")?.value.trim() || "Bajaj Road, Sikar";
    const loadType = document.getElementById("loadType")?.value || "Hitachi 1.5 Ton 5-Star Split AC";
    const goodsType = document.getElementById("goodsType")?.value.trim() || "Hitachi Inverter Split / Window AC";
    const weight = document.getElementById("weightQuantity")?.value.trim() || "1 Unit";
    const customerPhone = document.getElementById("customerPhone")?.value.trim() || "";
    const customerName = document.getElementById("customerName")?.value.trim() || "";
    const notes = document.getElementById("additionalNotes")?.value.trim() || "None";

    if (!dropCity || !customerPhone || !customerName) {
      alert("Please fill in your Delivery Locality, Name, and Mobile Number.");
      return;
    }

    const messageLines = [
      `❄️ *NEW AC PRICE & INSTALLATION INQUIRY*`,
      `*K K Enterprises - Authorized Hitachi AC Showroom*`,
      `*Hitachi Ganpati Tower, Bajaj Road, Sikar*`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Customer Name:* ${customerName}`,
      `📱 *Contact No:* ${customerPhone}`,
      `📍 *Delivery Locality:* ${dropCity}`,
      `❄️ *Hitachi AC Model:* ${loadType}`,
      `🏷️ *Series / Preference:* ${goodsType}`,
      `📦 *Number of Units:* ${weight}`,
      `📝 *Notes / Fitting:* ${notes}`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `_Inquiry sent from K K Enterprises Showroom website_`
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
   HITACHI PRODUCT SHOWCASE FILTERING
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
