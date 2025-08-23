import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    title: String,
    imageURL: String,
    artist: String,
    coverRGB: String,
});

const Album = mongoose.model("Album", albumSchema);
export default Album;
