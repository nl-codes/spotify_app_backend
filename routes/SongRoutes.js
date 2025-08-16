import express from "express";
import Song from "../models/Songs.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const songs = await Song.find();
        res.json(songs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
