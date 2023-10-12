import mongoose from "mongoose";

const Schema = mongoose.Schema
const UserSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
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
    image: {
        type: String,
        required: true,
        unique: false,
    }
})

export const UserModel = mongoose.models.User || mongoose.model("User", UserSchema)
