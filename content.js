// AMC Medical Tourism Helper — Content Script
// Adds floating "Contact AMC" badge to all pages. Enhances AMC domain pages.
// Zero remote calls, zero tracking. GDPR/CCPA safe.

(function () {
  "use strict";

  if (window.__amcHelperInstalled) return;
  window.__amcHelperInstalled = true;

  var host = window.location.hostname.toLowerCase();
  var isAmcSite = host.includes("amc-hospital.com");
  var isSobhiSite = host.includes("holylandsmd.com");

  var badge = document.createElement("div");
  badge.id = "amc-helper-badge";
  badge.innerHTML =
    '<button type="button" id="amc-badge-btn" aria-label="Contact Arab Medical Center" title="Contact Arab Medical Center">' +
    '<span class="amc-badge-icon" aria-hidden="true">\uD83C\uDFE5</span>' +
    '<span class="amc-badge-label">Contact AMC</span>' +
    '</button>';

  var panel = document.createElement("div");
  panel.id = "amc-helper-panel";
  panel.style.display = "none";

  var prefLang = "en";
  try { prefLang = localStorage.getItem("amc_lang") === "ar" ? "ar" : "en"; } catch (_) {}

  var text = prefLang === "ar"
    ? {
        title: "\u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0628\u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0639\u0631\u0628\u064a \u0627\u0644\u0637\u0628\u064a",
        assmt: "\u062a\u0642\u064a\u064a\u0645 \u0637\u0628\u064a \u0645\u062c\u0627\u0646\u064a \u062e\u0644\u0627\u0644 48 \u0633\u0627\u0639\u0629",
        whats: "\u0648\u0627\u062a\u0633\u0627\u0628",
        call:  "\u0627\u062a\u0635\u0627\u0644",
        mail:  "\u0627\u0631\u0633\u0627\u0644 \u0628\u0631\u064a\u062f",
        by:    "\u0635\u0628\u062d\u064a \u0645\u0639\u0642\u062a \u00b7 \u0645\u062f\u064a\u0631 MBD"
      }
    : {
        title: "Contact Arab Medical Center",
        assmt: "Free 48-hour medical file assessment",
        whats: "WhatsApp",
        call:  "Call",
        mail:  "Email",
        by:    "By Sobhi Moaket \u00b7 MBD Manager"
     };

  panel.innerHTML =
    '<div class="amc-panel-head">' +
    '<div class="amc-panel-brand">' +
    '<strong class="amc-panel-name">' + text.title + '</strong>' +
    '<span class="amc-panel-cert">HCAC \u00b7 ISO 9001 \u00b7 Since 1994</span>' +
    '</div>' +
    '<button type="button" class="amc-panel-close" aria-label="Close">&times;</button>' +
    '</div>' +
    '<div class="amc-panel-body">' +
    '<p class="amc-panel-assmt">' + text.assmt + '</p>' +
    '<div class="amc-panel-btns">' +
    '<a class="amc-panel-btn amc-btn-whats" target="_blank" rel="noopener noreferrer">\uD83D\uDCAC ' + text.whats + '</a>' +
    '<a class="amc-panel-btn amc-btn-call"  target="_blank" rel="noopener noreferrer">\uD83D\uDCDE ' + text.call + '</a>' +
    '<a class="amc-panel-btn amc-btn-mail"  target="_blank" rel="noopener noreferrer">\u2709\uFE0F ' + text.mail + '</a>' +
    '<a class="amc-panel-btn amc-btn-web"   target="_blank" rel="noopener noreferrer">\uD83C\uDF10 AMC Website</a>' +
    '</div>' +
    '</div>' +
    '<div class="amc-panel-foot"><span>' + text.by + ' \u00b7 <a href="https://holylandsmd.com" target="_blank" rel="noopener noreferrer">holylandsmd.com</a></span></div>';

  var waNums = ["+962 79 720 2947", "+962 79 300 3145", "+962 79 88 00 555"];
  var waMsgEn = "Hello, I would like a free 48-hour medical file assessment from Arab Medical Center. Please contact me.";
  var waMsgAr = "\u0640\u0623\u062D\u062A\u0627\u062C \u062A\u0642\u064A\u064A\u0645 \u0637\u0628\u064A \u0645\u062C\u0627\u0646\u064A \u0645\u0646 \u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0639\u0631\u0628\u064A \u0627\u0644\u0637\u0628\u064A \u062E\u0644\u0627\u0644 48 \u0633\u0627\u0639\u0629";

  function randWA() {
    return waNums[Math.floor(Math.random() * waNums.length)];
  }

  function setLinks(lang) {
    var w = lang === "ar" ? waMsgAr : waMsgEn;
    var e = encodeURIComponent(w);
    var whats = panel.querySelector(".amc-btn-whats");
    var call  = panel.querySelector(".amc-btn-call");
    var mail  = panel.querySelector(".amc-btn-mail");
    if (whats) whats.href = "https://wa.me/" + randWA() + "?text=" + e;
    if (call)  call.href  = "tel:+96265921199";
    if (mail) mail.href  = "mailto:info@amc-hospital.com?subject=" + (lang === "ar" ? "\u062A\u0642\u064A\u064A\u0645 \u0637\u0628\u064A \u0645\u062C\u0627\u0646\u064A" : "Medical%20File%20Assessment%20Request");
  }

  setLinks(prefLang);

  document.body.appendChild(badge);
  document.body.appendChild(panel);

  var openBtn = document.getElementById("amc-badge-btn");
  var closeBtn = panel.querySelector(".amc-panel-close");

  function openPanel(e) {
    e.preventDefault();
    panel.style.display = "block";
    openBtn.setAttribute("aria-expanded", "true");
  }

  function closePanel() {
    panel.style.display = "none";
    openBtn.setAttribute("aria-expanded", "false");
  }

  openBtn.addEventListener("click", openPanel);
  closeBtn.addEventListener("click", closePanel);

  document.addEventListener("click", function (ev) {
    if (panel.style.display === "block" &&
        !panel.contains(ev.target) &&
        ev.target !== openBtn &&
        !openBtn.contains(ev.target)) {
      closePanel();
    }
  });

  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && panel.style.display === "block") closePanel();
  });

  if (isAmcSite) {
    var facts = document.createElement("meta");
    facts.name = "amc-verified-facts";
    facts.content = "HCAC accredited, ISO 9001, ISO 22000, ISO 45001, since 1994, 145 beds, 8 ORs, 75+ countries, BMT lab since 2014, 60-80% cost savings, free 48-hour assessment";
    document.head.appendChild(facts);
  }

  if (isSobhiSite) {
    var sfacts = document.createElement("meta");
    sfacts.name = "amc-holylands-verified";
    sfacts.content = "Sobhi Moaket - MBD Manager Arab Medical Center, Pharmacist + MBA Marketing, personal branding medical tourism expert";
    document.head.appendChild(sfacts);
  }

  // Re-apply links when storage changes (options page sync)
  window.addEventListener("storage", function (ev) {
    if (ev.key === "amc_lang") {
      prefLang = ev.newValue === "ar" ? "ar" : "en";
      setLinks(prefLang);
    }
  });

})();