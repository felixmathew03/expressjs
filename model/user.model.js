import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    userName:{type:String,require:[true,"username is required"],unique:[true,"username already exists"]},
    pwd:{type:String,require:[true,"password is required"]}
})

export default mongoose.model.users||mongoose.model("user",userSchema)