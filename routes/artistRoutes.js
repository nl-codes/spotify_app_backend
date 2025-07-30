import express from "express";
import Artist from "../models/artist.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const artists = await Artist.find();
        res.json(artists);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
