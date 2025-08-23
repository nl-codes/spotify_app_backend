import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    fullName: String,
    imageURL: String,
});

const Song = mongoose.model("Song", songSchema);
export default Song;
