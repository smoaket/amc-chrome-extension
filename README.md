# AMC Medical Tourism Helper — Chrome Extension

## What This Is
A Manifest V3 Chrome extension that puts a "Contact AMC" shortcut everywhere users browse. One-click WhatsApp to request a free 48-hour medical file assessment from Arab Medical Center, Amman, Jordan. This also earns a high-domain-authority backlink from `chromewebstore.google.com` (DR ~99) once published.

**Author:** Sobhi Moaket — MBD Manager, AMC  
**Website:** holylandsmd.com

## Files (11 files total)
```
amc-extension/
├── manifest.json          <-- extension definition
├── background.js           <-- service worker
├── popup.html              <-- toolbar popup (click icon)
├── popup.js                <-- popup logic + AR/EN toggle
├── popup.css               <-- popup styles
├── content.js              <-- floating badge + contact panel
├── content.css             <-- badge/panel styles
├── options.html            <-- language preferences page
├── options.js              <-- options logic
└── icons/
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

(Also: `store-listing.md` for dashboard copypasta, and `amc-extension.zip` for store upload.)

---

## Step 1 — Load the extension locally (test first!)

1. Open Chrome and go to `chrome://extensions/`
2. Toggle `Developer mode` ON (top-right switch)
3. Click `Load unpacked`
4. Select **this whole folder** (`amc-extension/`)
5. The extension should appear — test the popup (click its icon or `Alt+Shift+A`)

> You can refresh local changes anytime by clicking the circular arrows icon on the extension card after editing files.

---

## Step 2 — Upload to Chrome Web Store (Dashboard)

1. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
2. If you do not have a developer account yet: click **Sign up** — accept the CWS Developer Agreement, pay the one-time $5 registration fee
3. Click **New Item**
4. Upload the ZIP file: `amc-extension.zip`
5. Fill in the store listing fields using `store-listing.md`
6. Upload screenshots (see `store-listing.md` for sizes)
7. Wait for review (typically 1–3 business days)
8. Once approved, the extension is live at: `https://chromewebstore.google.com/detail/<YOUR-EXT-ID>`
9. Link to it from your holylandsmd.com pages

---

## Step 3 — Update Store Listing (Meta Embed)

Once live, every page that embeds iframe pointing to the store page will receive a backlink. The simplest way:

1. On your HTML pages (holylandsmd.com), add a <link> or a small "AMC Helper Extension" badge linking to the store URL.
2. This is optional but improves install volume and affirms the own-domain backlink signal.

---

## Updating the extension

1. Edit files
2. Bump `version` in `manifest.json` to 1.0.1, 1.0.2, etc
3. Test with `chrome://extensions/` (refresh)
4. Zip the folder: `amc-extension/` → `amc-extension.zip`
5. Upload the new ZIP via Dashboard

---

## Privacy notes
- Zero data collection, zero analytics, fully client-side
- Permission `storage` only used for language preference cache
- Host permissions only used to surface verified schema data on AMC/holylands pages

---

## Need help? Contact Sobhi Moaket
- WhatsApp: +962 79 720 2947
- Email: info@holylandsmd.com
- YouTube: https://www.youtube.com/@arabmedicalcenter-amchospi4408