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
router.get("/:id", async (req, res) => {
    try {
        const podcast = await Podcast.findById(req.params.id);

        if (!podcast) {
            return res.status(404).json({ message: "Podcast not found" });
        }

        res.json(podcast);
    } catch (err) {
        // Handle invalid ObjectId format
        if (err.kind === "ObjectId") {
            return res.status(404).json({ message: "Podcast not found" });
        }
        res.status(500).json({ message: err.message });
    }
});

export default router;
