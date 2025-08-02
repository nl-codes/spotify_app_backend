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

        const artistData = artists.slice(0, 3).map((item) => ({
            ...item._doc,
            type: "artist",
        }));
        const podcastData = podcasts.slice(0, 3).map((item) => ({
            ...item._doc,
            type: "podcast",
        }));
        const albumData = albums.slice(0, 3).map((item) => ({
            ...item._doc,
            type: "album",
        }));

        // Combine and shuffle
        const combined = shuffleArray([
            ...artistData,
            ...podcastData,
            ...albumData,
        ]);

        res.json(combined);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
