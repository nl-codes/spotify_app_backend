import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    trackNumber: { type: Number, required: true },
    duration: { type: String, required: true },
});

const albumSongSchema = new mongoose.Schema({
    albumId: {
        type: String,
    },
    artistId: {
        type: String,
    },
    yearReleased: { type: Number },

    songs: [songSchema],
});

const AlbumSong = mongoose.model("albumsong", albumSongSchema);

export default AlbumSong;
