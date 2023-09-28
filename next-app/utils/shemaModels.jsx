import mongoose from "mongoose";

const Schema = mongoose.Schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    login_id: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    roll: {
        type: Number,
        required: true,
        unique: false,
    },
    delete_flg: {
        type: Number,
        required: true,
        unique: false
    },
    user_logo: {
        type: String,
        required: true,
        unique: false,
    }
})

export const UserModel = mongoose.models.User || mongoose.model("User", UserSchema)
