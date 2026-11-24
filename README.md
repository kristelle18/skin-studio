# Skin Studio — tablet app

A private skincare and treatment tracker that runs in the browser and installs to the
home screen. Built for a Samsung Galaxy Tab S8, and works on any modern Android or desktop Chrome.

**Live site:** https://kristelle18.github.io/skin-studio/

All data stays on the device it was entered on. Nothing is uploaded anywhere.

## Installing

Open the live site in Chrome, then **menu → Add to home screen → Install**.

## Updating

Replace `index.html` and `sw.js` in this repo (the other files rarely change), wait about a
minute for GitHub Pages to rebuild, then in the app open **Today → Data & devices →
↻ Check for updates**. The version shown there should match the newest entry below.

## What it does

- **Shelf** — products with stock counts, opened and expiry dates, and ingredient notes.
- **Treatments** — session history, due dates, and automatic holds on products that must
  be paused before or after a treatment.
- **Skin** — guided 360° face scan with live on-screen guidance, on-device analysis,
  progress tracking, and a PDF report.
- **Health** — injection sites and doses, weight in kg or lb, and BMI.
- **Today** — the day's routine, what is on hold, and what is due.

## Versions

| Version | Changes |
| --- | --- |
| 1.5 | Scan scoring calibrated against real photos. Pore, texture, tone, oil and under-eye scales corrected. Scores are withheld rather than guessed when a photo is too soft to resolve pores. Blemish counting removed on-device as unreliable. |
| 1.4 | Stricter scan grading. Product and ingredient checker. Weekly care plan. Product and treatment recommendations. |
| 1.3 | Version label and in-app update button. |
| 1.2 | Back-camera option for sharper scans. Easier 90° side profiles — the best side frame is kept automatically. |
| 1.1 | Live guided camera scan with voice prompts and auto-capture. |
| 1.0 | First tablet release. |

## Notes on the scan

The on-device analysis is a rough measure based on image statistics, not a medical
assessment. It reports pores, smoothness, even tone, redness, oil, fine lines and
under-eye shadowing. Individual blemishes and dark marks are not counted on-device.

Nothing in the app is medical advice. Treatment suggestions are options to raise with a
licensed provider, not a prescription.
