const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require : true
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    password:{
        trye: String,
        require: true,
    },
    role: {
        type: String,
        enum: ["admin","partner","user"],
        default: "user",
        require: true,
    }
})

module.exports = mongoose.model("user", userSchema)