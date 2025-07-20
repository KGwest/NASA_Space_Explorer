# 🚀 Project 7: NASA API - Space Explorer App

The **NASA Space Explorer** is a dynamic web application that connects users with NASA’s **Astronomy Picture of the Day (APOD)** API. Each day, NASA shares a stunning image or video from across the cosmos—this app lets users explore those treasures by selecting a custom date range.

### Features
- **Date Range Picker** – Choose a start and end date to view space media from any span between June 16, 1995 and today.
- **Image & Video Gallery** – Automatically fetch and display APOD entries with titles and dates. Images appear as cards; videos embed via YouTube.
- **Modal Viewer** – Click on any gallery item to open a modal with:
  - Full-size image or embedded video
  - APOD title, date, and detailed explanation
-  **Random Space Fact Generator** – Displays a fun, “Did you know?” astronomy fact each time the app loads.
- **Interactive Design** – Responsive layout, hover zoom effect on images, and accessible close button for the modal.

### Technologies Used
- HTML, CSS, JavaScript (Vanilla)
- [NASA APOD API](https://api.nasa.gov/)
- Responsive styling with media queries
- DOM manipulation and dynamic rendering

### Project Structure
```
NASA-Space-Explorer/
├── index.html
├── style.css
├── js/
│   ├── script.js
│   └── dateRange.js
├── img/
│   └── nasa-worm-logo.png
└── README.md
```


###  Getting Started
1. Clone the repository or open the Codespace.
2. Replace `DEMO_KEY` with your personal NASA API key for full functionality:
   [Get your API key here](https://api.nasa.gov).
3. Open `index.html` in a browser or preview it in your development environment.

### ⚠️ Notes
- The APOD API returns either images or videos. This app detects `media_type` and adjusts the display accordingly.
- Rate limits apply to `DEMO_KEY`. Use your personal key for extended access.

### Extra Credit Implemented
✅ Handled both images and videos  
✅ Added a random space fact section  
✅ Implemented a modal with full content  
✅ Applied hover effects for interactivity  

---

Enjoy your journey through the stars ✨
