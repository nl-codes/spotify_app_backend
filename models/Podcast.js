import mongoose from "mongoose";

const podcastSchema = new mongoose.Schema({
    fullName: String,
    imageUrl: String,
});

const Podcast = mongoose.model("Podcast", podcastSchema);
export default Podcast;
