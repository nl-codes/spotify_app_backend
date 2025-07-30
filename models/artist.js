import mongoose from "mongoose";

const artistSchema = new mongoose.Schema({
    fullName: String,
    imageUrl: String,
});

const Artist = mongoose.model("Artist", artistSchema);
export default Artist;
