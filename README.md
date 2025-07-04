# TikTok Analytics Site

A modern, responsive web app for viewing TikTok analytics by category, with a green gradient UI and legal pages. Built for learning and future API integration.

## Features
- Green gradient background and modern card layout
- Category selection for analytics (Gaming, Makeup, Podcasts, Music, Sports, All)
- Styled "Buy me a coffee" button
- Terms of Service and Privacy Policy pages
- Responsive design and custom fonts
- Footer navigation links
- Placeholder JavaScript for future API integration

## Project Structure
```
TikTok Analytics Site/
│
├── frontEnd/
│   ├── Index.html         # Main landing page
│   ├── styles.css         # All site styling
│   ├── main.js            # JavaScript for UI interactions (placeholder for API)
│   ├── tos.html           # Terms of Service
│   └── privacy.html       # Privacy Policy
│
├── backEnd/               # (Optional) Backend code for API integration
│
├── .gitignore             # Git ignore rules
└── README.md              # Project info (this file)
```

## How to Use
1. Open `frontEnd/Index.html` in your browser to view the site.
2. All UI is static for now; analytics/API integration will be added later.
3. To test TikTok API integration, set up a backend (see below).

## How to Connect to TikTok API (Overview)
1. Register your app at [TikTok for Developers](https://developers.tiktok.com/).
2. Set a public HTTPS redirect URI (use Render.com or ngrok for local dev).
3. Implement OAuth flow in your backend to obtain an access token.
4. Use the access token to fetch analytics data from TikTok's API.
5. Connect your frontend to your backend using fetch or AJAX.

## Development Notes
- All styling is in `styles.css` for maintainability.
- JavaScript is in `main.js` and ready for future API calls.
- Legal pages are included and styled for compliance.
- For local API testing, use ngrok or deploy your backend to Render.com.

## License
This project is for educational/demo purposes and is not affiliated with TikTok.
