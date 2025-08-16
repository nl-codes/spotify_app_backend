import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    fullName: String,
    imageUrl: String,
});

const Song = mongoose.model("Song", songSchema);
export default Song;
