import express from "express";
import ytdl from "ytdl-core";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "*"
}));

const API_KEY = process.env.API_KEY || "";

app.get("/download", async (req, res) => {
  try {
    const url = req.query.url;
    const key = req.query.key || req.headers["x-api-key"];
    const quality = req.query.quality || "highest";

    if (API_KEY) {
      if (!key || key !== API_KEY) {
        return res.status(401).send("Unauthorized: invalid API key");
      }
    }

    if (!url || !ytdl.validateURL(url)) {
      return res.status(400).send("Invalid YouTube URL");
    }

    const info = await ytdl.getInfo(url);

    let formatOptions = { quality: "highest", filter: "audioandvideo" };

    const title = (info.videoDetails.title || "youtube_video")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "_");

    res.setHeader("Content-Disposition", `attachment; filename="${title}.mp4"`);
    res.setHeader("Content-Type", "video/mp4");

    ytdl(url, formatOptions).pipe(res);

  } catch (err) {
    console.error("DOWNLOAD ERROR:", err);
    res.status(500).send("Download failed");
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
