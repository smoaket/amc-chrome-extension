// AMC Medical Tourism Helper — Popup Controller
// Handles language toggle and real-time popup content.

var EL = {
  heroTitle: document.getElementById("heroTitle"),
  heroBody:  document.getElementById("heroBody"),
  btnWhats:  document.getElementById("btnWhats"),
  lblWhats:  document.getElementById("lblWhats"),
  btnCall:   document.getElementById("btnCall"),
  lblCall:   document.getElementById("lblCall"),
  btnMail:   document.getElementById("btnMail"),
  lblMail:   document.getElementById("lblMail"),
  btnSite:   document.getElementById("btnSite"),
  lblSite:   document.getElementById("lblSite"),
  langToggle:document.getElementById("langToggle"),
  costTitle: document.getElementById("costTitle"),
  thProc:    document.getElementById("thProc"),
  thAmc:     document.getElementById("thAmc"),
  thUsa:     document.getElementById("thUsa"),
  usp1:      document.getElementById("usp1"),
  usp2:      document.getElementById("usp2"),
  usp3:      document.getElementById("usp3"),
  usp4:      document.getElementById("usp4"),
  footText:  document.getElementById("footText")
};

var TEXTS = {
  en: {
    heroTitle: "Free 48-Hour Medical File Assessment",
    heroBody:  "Get a treatment plan and cost estimate from Arab Medical Center within 48 hours — all specialties, no obligation.",
    lblWhats:  "WhatsApp AMC Now",
    lblCall:   "Call Patients Relation Office",
    lblMail:   "Email info@amc-hospital.com",
    lblSite:   "Visit AMC Website",
    costTitle: "Sample Treatment Costs (USD)",
    thProc:    "Procedure",
    thAmc:     "AMC",
    thUsa:     "USA Avg.",
    usp1:      "\u2705 60\u201380% lower cost than Western systems",
    usp2:      "\u2705 Zero waiting list \u2014 scheduled within days",
    usp3:      "\u2705 Patients from 75+ countries since 1994",
    usp4:      "\u2705 First private-sector BMT lab in Jordan (2014)",
    footText:  'By Sobhi Moaket \u00b7 MBD Manager \u00b7 <a href="https://holylandsmd.com" target="_blank" rel="noopener noreferrer">holylandsmd.com</a>',
    langBtn:   "\u0639\u0631\u0628\u064A",
    whatsHref: "https://wa.me/962797202947?text=I%20would%20like%20a%20free%2048-hour%20medical%20file%20assessment%20from%20Arab%20Medical%20Center",
    callHref:  "tel:+96265921199",
    mailHref:  "mailto:info@amc-hospital.com?subject=Medical%20File%20Assessment%20Request",
    siteHref:  "https://amc-hospital.com"
  },
  ar: {
    heroTitle: "\u062a\u0642\u064a\u064a\u0645 \u0637\u0628\u064a \u0645\u062c\u0627\u0646\u064a \u062e\u0644\u0627\u0644 48 \u0633\u0627\u0639\u0629",
    heroBody:  "\u0627\u062d\u0635\u0644 \u0639\u0644\u0649 \u062e\u0637\u0629 \u0639\u0644\u0627\u062c\u064a\u0629 \u0648\u062a\u0642\u062f\u064a\u0631 \u0627\u0644\u062a\u0643\u0644\u0641\u0629 \u0645\u0646 \u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0639\u0631\u0628\u064a \u062e\u0644\u0627\u0644 48 \u0633\u0627\u0639\u0629",
    lblWhats:  "\u0648\u0627\u062a\u0633\u0627\u0628 AMC \u0627\u0644\u0622\u0646",
    lblCall:   "\u0627\u062a\u0635\u0644 \u0628\u0645\u0643\u062a\u0628 \u0639\u0644\u0627\u0642\u0627\u062a \u0627\u0644\u0645\u0631\u0636\u0649",
    lblMail:   "\u0627\u0631\u0633\u0644 \u0628\u0631\u064a\u062f\u064b\u0627 \u0625\u0644\u0649 info@amc-hospital.com",
    lblSite:   "\u0632\u064f\u0631 \u0645\u0648\u0642\u0639 AMC",
    costTitle: "\u062a\u0643\u0627\u0644\u064a\u0641 \u0639\u0645\u0644\u064a\u0627\u062a \u0646\u0645\u0648\u0630\u062c\u064a\u0629 (USD)",
    thProc:    "\u0627\u0644\u0625\u062c\u0631\u0627\u0621",
    thAmc:     "AMC",
    thUsa:     "\u0627\u0644\u0645\u062a\u0648\u0633\u0637 \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a",
    usp1:      "\u2705 \u062a\u0643\u0644\u0641\u0629 \u0623\u0642\u0644 \u0628\u0646\u0633\u0628\u0629 60\u201380% \u0645\u0646 \u0627\u0644\u062f\u0648\u0644 \u0627\u0644\u063a\u0631\u0628\u064a\u0629",
    usp2:      "\u2705 \u062f\u0648\u0631 \u0627\u0646\u062a\u0638\u0627\u0631\u064a \u0635\u0641\u0631\u064a \u2014 \u0627\u0644\u0625\u062c\u0631\u0627\u0621 \u062e\u0644\u0627\u0644 \u0623\u064a\u0627\u0645",
    usp3:      "\u2705 \u0645\u0631\u0636\u0649 \u0645\u0646 75+ \u062f\u0648\u0644\u0629 \u0645\u0646\u0630 1994",
    usp4:      "\u2705 \u0623\u0648\u0644 \u0645\u062e\u062a\u0628\u0631 \u0632\u0631\u0639 \u0646\u062e\u0627\u0639 BMT \u062e\u0627\u0635 \u0641\u064a \u0627\u0644\u0623\u0631\u062f\u0646 (2014)",
    footText:  "\u0628\u0648\u0627\u0633\u0637\u0629 \u0635\u0628\u062d\u064a \u0645\u0639\u0642\u062a \u00b7 \u0645\u062f\u064a\u0631 MBD \u00b7 <a href=\"https://holylandsmd.com\" target=\"_blank\" rel=\"noopener noreferrer\">holylandsmd.com</a>",
    langBtn:   "English",
    whatsHref: "https://wa.me/962797202947?text=%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%AA%D9%82%D9%8A%D9%8A%D9%85%20%D8%B7%D8%A8%D9%8A%20%D9%85%D8%AC%D8%A7%D9%86%D9%8A%20%D8%AE%D9%84%D8%A7%D9%84%2048%20%D8%B3%D8%A7%D8%B9%D8%A9%20%D9%85%D9%86%20%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%B2%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A",
    callHref:  "tel:+96265921199",
    mailHref:  "mailto:info@amc-hospital.com?subject=%D8%AA%D9%82%D9%8A%D9%8A%D9%85%20%D8%B7%D8%A8%D9%8A%20%D9%85%D8%AC%D8%A7%D9%86%D9%8A",
    siteHref:  "https://amc-hospital.com"
  }
};

var WHATSAPP_NUMS = ["+962 79 720 2947", "+962 79 300 3145", "+962 79 88 00 555"];
var WHATSAPP_PREFILL_EN = "Hello,%20I%20would%20like%20a%20free%2048-hour%20medical%20file%20assessment%20from%20Arab%20Medical%20Center.%20Please%20contact%20me.";
var WHATSAPP_PREFILL_AR = "%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%AA%D9%82%D9%8A%D9%8A%D9%85%20%D8%B7%D8%A8%D9%8A%20%D9%85%D8%AC%D8%A7%D9%86%D9%8A%20%D8%AE%D9%84%D8%A7%D9%84%2048%20%D8%B3%D8%A7%D8%B9%D8%A9%20%D9%85%D9%86%20%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%B2%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A";

function getPrefLang() {
  try { return localStorage.getItem("amc_lang") === "ar" ? "ar" : "en"; } catch (_) { return "en"; }
}

function setPrefLang(lang) {
  try { localStorage.setItem("amc_lang", lang); } catch (_) {}
}

function applyLang(lang) {
  var t = TEXTS[lang];
  EL.heroTitle.textContent = t.heroTitle;
  EL.heroBody.textContent  = t.heroBody;
  EL.lblWhats.textContent  = t.lblWhats;
  EL.lblCall.textContent   = t.lblCall;
  EL.lblMail.textContent   = t.lblMail;
  EL.lblSite.textContent   = t.lblSite;
  EL.costTitle.textContent = t.costTitle;
  EL.thProc.textContent    = t.thProc;
  EL.thAmc.textContent     = t.thAmc;
  EL.thUsa.textContent     = t.thUsa;
  EL.usp1.innerHTML        = t.usp1;
  EL.usp2.innerHTML        = t.usp2;
  EL.usp3.innerHTML        = t.usp3;
  EL.usp4.innerHTML        = t.usp4;
  EL.langToggle.textContent = t.langBtn;
  EL.footText.innerHTML    = t.footText;

  var prefill = lang === "ar" ? WHATSAPP_PREFILL_AR : WHATSAPP_PREFILL_EN;
  EL.btnWhats.href  = "https://wa.me/" + WHATSAPP_NUMS[0] + "?text=" + prefill;
  EL.btnCall.href   = t.callHref;
  EL.btnMail.href   = t.mailHref;
  EL.btnSite.href   = t.siteHref;
}

function toggleLang() {
  var cur = getPrefLang();
  var nxt = cur === "en" ? "ar" : "en";
  setPrefLang(nxt);
  applyLang(nxt);
}

EL.langToggle.addEventListener("click", toggleLang);

function rotateWhatsapp() {
  var i = Math.floor(Math.random() * WHATSAPP_NUMS.length);
  var pre = getPrefLang() === "ar" ? WHATSAPP_PREFILL_AR : WHATSAPP_PREFILL_EN;
  EL.btnWhats.href = "https://wa.me/" + WHATSAPP_NUMS[i] + "?text=" + pre;
}
rotateWhatsapp();

applyLang(getPrefLang());
EL.btnWhats.addEventListener("click", rotateWhatsapp);