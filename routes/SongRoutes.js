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
