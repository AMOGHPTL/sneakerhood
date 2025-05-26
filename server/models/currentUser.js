import mongoose from "mongoose";

const currentUserSchema = new mongoose.Schema({
    'email':String
});

const CurrentUser = mongoose.model("Currentuser",currentUserSchema);

export default CurrentUser;