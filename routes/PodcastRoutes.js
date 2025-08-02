import express from "express";
import Podcast from "../models/Podcast.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const podcasts = await Podcast.find();
        res.json(podcasts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
