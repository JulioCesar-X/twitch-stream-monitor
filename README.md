# 🎮 Twitch Stream Monitor

The **Twitch Stream Monitor** is a modern and responsive web application that allows users to track **live Twitch streamers**, check stream status, and view details such as the game being played, number of viewers, and stream title. It also includes a **dynamic search bar** and a button to access all Twitch streams.

## 🚀 Technologies Used
- **Vue 3** (via Vite)
- **Vue Router** (for navigation)
- **Pinia** (state management)
- **Bootstrap 5** (modern styling)
- **Axios** (API consumption)
- **AOS & GSAP** (animations)
- **Twitch API** (FreeCodeCamp proxy)

---

## 📌 Features
✅ **List of active and offline streamers**  
✅ **Display details such as game, title, and viewers**  
✅ **Search bar to quickly filter streamers**  
✅ **'Watch on Twitch' button for each streamer**  
✅ **Button to view all Twitch streams**  
✅ **Smooth animations for better user experience**  

---

## 🔧 Installation and Setup

### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/JulioCesar-X/twitch-stream-monitor.git
cd twitch-stream-monitor
```

### 2️⃣ **Install Dependencies**
```bash
npm install
```

### 3️⃣ **Run the Development Server**
```bash
npm run dev
```

> The project will be available at **http://localhost:5173/**.

---

## 🌍 Project Structure
```
twitch-stream-monitor/
│── public/
│   ├── index.html
│── src/
│   ├── assets/  # Global images and styles
│   ├── components/
│   │   ├── StreamCard.vue  # Individual stream card
│   │   ├── StreamList.vue  # List of streams
│   │   ├── Header.vue  # Application header
│   │   ├── Footer.vue  # Footer component
│   ├── views/
│   │   ├── Home.vue  # Main page
│   ├── router/
│   │   ├── index.js  # Routing configuration
│   ├── store/
│   │   ├── index.js  # State management with Pinia
│   ├── App.vue  # Root component
│   ├── main.js  # Main entry point
│── package.json
│── README.md
│── .gitignore
│── vite.config.js
```

---

## 🔗 API Used
Due to Twitch's new API restrictions, we use a **proxy** provided by FreeCodeCamp:
```
https://twitch-proxy.freecodecamp.rocks/
```
This allows retrieving streamer information without requiring an API key.

---

## 📄 License
This project is licensed under the **MIT License** - feel free to contribute! 🚀  

---
