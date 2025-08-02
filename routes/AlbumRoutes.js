import express from "express";
import Album from "../models/Albums.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const albums = await Album.find();
        res.json(albums);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
