import mongoose from "mongoose";

const artistSchema = new mongoose.Schema({
    fullName: String,
    imageURL: String,
});

const Artist = mongoose.model("Artist", artistSchema);
export default Artist;
