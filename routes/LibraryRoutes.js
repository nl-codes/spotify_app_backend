import express from "express";
import Song from "../models/Songs.js";
import Album from "../models/Albums.js";
import Artist from "../models/Artist.js";
import Podcast from "../models/Podcast.js";
import { shuffleWithSeed } from "../utils/seed.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const songs = await Song.find({
            title: {
                $in: ["Lovers Rock", "Heavenly", "Memories", "Francesca"],
            },
        }).lean();

        const artists = await Artist.find({
            fullName: { $in: ["Billie Eilish", "AC/DC", "Queen"] },
        }).lean();

        const albums = await Album.find({
            fullName: {
                $in: [
                    "Cigarattes After Sex",
                    "Hit Me Hard and Soft",
                    "Highway to Hell",
                ],
            },
        }).lean();

        const podcasts = await Podcast.find({
            fullName: {
                $in: ["The Daily", "Crime Junkie", "Lore"],
            },
        }).lean();

        const songsWithType = songs.map((s) => ({ ...s, type: "song" }));
        const artistsWithType = artists.map((a) => ({ ...a, type: "artist" }));
        const albumsWithType = albums.map((al) => ({ ...al, type: "album" }));
        const podcastsWithType = podcasts.map((po) => ({
            ...po,
            type: "podcast",
        }));

        let combined = [
            ...songsWithType,
            ...artistsWithType,
            ...albumsWithType,
            ...podcastsWithType,
        ];

        combined = shuffleWithSeed(combined, 47778);

        res.json(combined);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
