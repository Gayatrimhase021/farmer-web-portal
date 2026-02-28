# 🌾 Krishi Darpan – Farmer Web Portal

## Project Structure

```
farmer-portal/
├── index.html              ← Home page
├── css/
│   ├── style.css           ← Shared styles (navbar, footer, modals, etc.)
│   ├── home.css            ← Home page styles
│   ├── crops.css           ← Crops page styles
│   ├── weather.css         ← Weather page styles
│   ├── market.css          ← Market prices styles
│   └── schemes.css         ← Schemes page styles
├── js/
│   ├── layout.js           ← Auto-injects shared navbar + footer + modals
│   ├── common.js           ← Toast, modal open/close functions
│   ├── crops.js            ← Crop data & filter/search logic
│   ├── weather.js          ← Weather data & city search
│   ├── market.js           ← Mandi price tables & filters
│   └── schemes.js          ← Schemes data & apply logic
├── pages/
│   ├── crops.html          ← Crop Guide page
│   ├── weather.html        ← Weather Updates page
│   ├── market.html         ← Live Mandi Prices page
│   └── schemes.html        ← Government Schemes page
└── images/                 ← (place your images here)
```

## How to Run

Simply open `index.html` in any web browser — no server needed!

Or host it free on:
- **GitHub Pages** — push to GitHub, enable Pages in Settings
- **Netlify** — drag & drop the folder at netlify.com
- **Vercel** — upload at vercel.com

## Pages Included

| Page | File | Features |
|------|------|----------|
| Home | index.html | Hero, feature cards, crop calendar, news alerts |
| Crops | pages/crops.html | 16 crops, filter by season, search |
| Weather | pages/weather.html | City search, 7-day forecast, agro advisory |
| Market Prices | pages/market.html | 24+ commodities, 3 tabs, state filter |
| Govt. Schemes | pages/schemes.html | 9 schemes, filter, apply form |
