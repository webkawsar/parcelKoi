import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: STring,
        required: true,
        unique: true
    }
}, {
    versionKey: false,
    timestamps: true
})


const User = mongoose.model('User', userSchema);
module.exports = User;