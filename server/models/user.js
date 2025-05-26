import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        'email': String,
       'password': String,
       'liked': Array,
       'cart': Array
    }
)

const User = mongoose.model("User",userSchema);

export default User;