import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    fullName: String,
    imageUrl: String,
});

const Album = mongoose.model("Album", albumSchema);
export default Album;
