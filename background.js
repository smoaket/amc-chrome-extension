// AMC Medical Tourism Helper — Background Service Worker (MV3)
// Handles badge updates and command shortcuts. No remote calls. Privacy-safe.

const AMC_STORAGE_KEY = "amc_prefs_v1";

chrome.runtime.onInstalled.addListener(async (details) => {
  await chrome.storage.local.set({
    [AMC_STORAGE_KEY]: {
      language: "en",
      installedAt: Date.now(),
      version: chrome.runtime.getManifest().version
    }
  });

  if (details.reason === "install") {
    chrome.action.setBadgeText({ text: "FREE" });
    chrome.action.setBadgeBackgroundColor({ color: "#0a8a4a" });
  }
});

chrome.action.onClicked.addListener(async () => {
  const prefs = await chrome.storage.local.get(AMC_STORAGE_KEY);
  const lang = prefs[AMC_STORAGE_KEY]?.language || "en";
  const url =
    lang === "ar"
      ? "https://holylandsmd.com/السياحة-العلاجية-في-الأردن/"
      : "https://holylandsmd.com/medical-tourism-in-jordan/";
  chrome.tabs.create({ url });
});

chrome.commands.onCommand.addListener(async (command) => {
  if (command === "_execute_action") chrome.action.openPopup?.();
});

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg && msg.type === "amc:getContact") {
    sendResponse({
      phone: "+962 6 5921199",
      ext: "229",
      whatsapp: ["+962 79 720 2947", "+962 79 300 3145", "+962 79 88 00 555"],
      email: "info@amc-hospital.com",
      er: "(06) 5925801",
      site: "https://amc-hospital.com",
      helpHub: "https://holylandsmd.com/medical-tourism-in-jordan/",
      assessment: "Free 48-hour remote medical file assessment — all specialties."
    });
    return false;
  }
  return false;
});
