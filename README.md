<<<<<<< HEAD
# YouTube Downloader API (Railway Ready)

## 🚀 Features
- Download YouTube videos (audio+video)
- Supports any quality (auto-selects best)
- Works perfectly on **Railway**
- CORS enabled
- Optional API key protection

---

## 📦 Installation
```
npm install
npm start
```

---

## ▶ Usage
Download a video:
```
http://localhost:8080/download?url=YOUTUBE_LINK
```

If API_KEY enabled:
```
http://localhost:8080/download?url=YOUTUBE_LINK&key=YOUR_KEY
```

---

## 🚀 Deploy to Railway
1. Create new project → Deploy from GitHub or upload ZIP  
2. Add optional environment variable:
```
API_KEY=mysupersecret
```
3. Done. Railway will generate a public URL:
```
https://your-app.up.railway.app/download?url=...
```
=======
# youtube-downloader-api
A lightweight and fast YouTube Downloader API built with Express and ytdl-core. Fully compatible with Railway deployment, supports CORS, and optional API key protection. Provides direct MP4 video downloads and can be easily integrated with any frontend or web project.
>>>>>>> 6e226eade9ef19521c1a2b339ec2240a4221c1dc
