import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import artistRoutes from "./routes/ArtistRoutes.js";
import podcastRoutes from "./routes/PodcastRoutes.js";
import albumRoutes from "./routes/AlbumRoutes.js";
import songRoutes from "./routes/SongRoutes.js";
import mixedRoutes from "./routes/AlbumArtistPodcastRoutes.js";

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json()); // JSON parser
app.use("/api/artists", artistRoutes);
app.use("/api/podcasts", podcastRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/songs", songRoutes);
app.use("/api", mixedRoutes);

// Connect to DB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(5000, "0.0.0.0", () => {
            console.log(`✅Server running on port ${process.env.PORT}`);
        });
    })
    .catch((err) => console.error("DB Connection Error:", err));
