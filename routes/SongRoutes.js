import express from "express";
import Song from "../models/Songs.js";
import { shuffleWithSeed } from "../utils/seed.js";

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
        const songs = await Song.find();
        res.json(songs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get("/random", async (req, res) => {
    try {
        const songs = await Song.find();
        res.json(shuffleArray(songs));
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get("/default", async (req, res) => {
    try {
        const songs = await Song.find();
        res.json(shuffleWithSeed(songs));
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const song = await Song.findById(req.params.id);

        if (!song) {
            return res.status(404).json({ message: "Song not found" });
        }

        res.json(song);
    } catch (err) {
        // Handle invalid ObjectId format
        if (err.kind === "ObjectId") {
            return res.status(404).json({ message: "Song not found" });
        }
        res.status(500).json({ message: err.message });
    }
});

export default router;
