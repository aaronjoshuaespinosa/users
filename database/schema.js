import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fName: String
})

const user = mongoose.model('User') || mongoose.model('User', userSchema)