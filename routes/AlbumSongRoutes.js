import express from "express";
import mongoose from "mongoose";
import AlbumSong from "../models/AlbumSong.js";
import Album from "../models/Albums.js";
import Artist from "../models/Artist.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const albumSongs = await AlbumSong.find();
        res.json(albumSongs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const albumId = req.params.id;

        const albumSong = await AlbumSong.findOne({
            albumId: albumId,
        });

        if (!albumSong) {
            return res.status(404).json({ message: "AlbumSong not found" });
        }

        const album = await Album.findById(
            new mongoose.Types.ObjectId(albumId)
        );

        const artist = await Artist.findById(
            new mongoose.Types.ObjectId(albumSong.artistId)
        );

        const result = {
            id: albumSong.albumId,
            artistId: albumSong.artistId,
            yearReleased: albumSong.yearReleased,
            albumURL: album.imageURL,
            albumTitle: album.title,
            albumHex: album.coverRGB,
            artistURL: artist.imageURL,
            artistName: artist.fullName,
            songs: albumSong.songs,
        };

        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
