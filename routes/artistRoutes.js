import express from "express";
import Artist from "../models/Artist.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const artists = await Artist.find();
        res.json(artists);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const artist = await Artist.findById(req.params.id);

        if (!artist) {
            return res.status(404).json({ message: "Artist not found" });
        }

        res.json(artist);
    } catch (err) {
        // Handle invalid ObjectId format
        if (err.kind === "ObjectId") {
            return res.status(404).json({ message: "Artist not found" });
        }
        res.status(500).json({ message: err.message });
    }
});

export default router;
