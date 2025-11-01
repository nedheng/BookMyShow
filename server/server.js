const express = require("express");
const connectDB = require("./config/db");
const app = express();
require('dotenv').config();

connectDB();

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on ${process.env.PORT}`)
})