// AMC Medical Tourism Helper — Options Page

document.addEventListener("DOMContentLoaded", function () {
  var langSelect = document.getElementById("langSelect");
  var saveBtn = document.getElementById("saveBtn");
  var resetBtn = document.getElementById("resetBtn");
  var statusEl = document.getElementById("status");

  function getLang() {
    try { return localStorage.getItem("amc_lang") || "en"; } catch (_) { return "en"; }
  }

  langSelect.value = getLang();

  saveBtn.addEventListener("click", function () {
    var val = langSelect.value;
    try { localStorage.setItem("amc_lang", val); } catch (_) {}
    statusEl.textContent = "Saved — popup language will update on next open.";
    setTimeout(function () { statusEl.textContent = ""; }, 3000);
  });

  resetBtn.addEventListener("click", function () {
    langSelect.value = "en";
    try { localStorage.setItem("amc_lang", "en"); } catch (_) {}
    statusEl.textContent = "Reset to English.";
    setTimeout(function () { statusEl.textContent = ""; }, 3000);
  });
});