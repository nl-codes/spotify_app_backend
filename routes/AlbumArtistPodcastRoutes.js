import express from "express";
import Album from "../models/Albums.js";
import Artist from "../models/Artist.js";
import Podcast from "../models/Podcast.js";

const router = express.Router();

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

router.get("/", async (req, res) => {
    try {
        const artists = await Artist.find();
        const podcasts = await Podcast.find();
        const albums = await Album.find();

        const artistData = shuffleArray(artists).slice(0, 3);
        const podcastData = shuffleArray(podcasts).slice(0, 3);
        const albumData = shuffleArray(albums).slice(0, 3);

        res.json({
            artists: artistData,
            podcasts: podcastData,
            albums: albumData,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
