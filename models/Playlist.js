import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema({
    title: String,
    likes: String,
    imageURL: String,
});

const Playlist = mongoose.model("Playlist", playlistSchema);
export default Playlist;
