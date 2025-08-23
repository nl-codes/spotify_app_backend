import express from "express";
import Playlist from "../models/Playlist.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const playlists = await Playlist.find();
        res.json(playlists);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const playlist = await Playlist.findById(req.params.id);

        if (!playlist) {
            return res.status(404).json({ message: "Playlist not found" });
        }

        res.json(playlist);
    } catch (err) {
        // Handle invalid ObjectId format
        if (err.kind === "ObjectId") {
            return res.status(404).json({ message: "Playlist not found" });
        }
        res.status(500).json({ message: err.message });
    }
});

export default router;
