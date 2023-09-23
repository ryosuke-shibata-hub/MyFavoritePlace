import mongose from "mongose";

const Schema = mongose.Schema
const UserSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    login_id: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    roll: {
        type: Number,
        require: true,
        unique: fail,
    },
    delete_flg: {
        type: Number,
        require: true,
        unique: false
    },
    logo: {
        type: Boolean,
        require: false,
        unique: true,
    }
})

export const UserModel = mongose.models.User || mongose.models("User", UserSchema)
