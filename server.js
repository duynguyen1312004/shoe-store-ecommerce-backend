require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

//hướng vào routes vì routes đã hướng vào controller
const shoeRoutes = require("./routes/shoeRoutes");
const userRoutes = require("./routes/userRoutes");



const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.MONGO_URI;

//ket noi database
mongoose.connect(DB_URI)
.then(() => console.log("DB connected"))
.catch(err => console.log("loi" + err));

//router Mọi đường dẫn trong phoneRoutes sẽ bắt đầu bằng /api/shoes
app.use("/api/shoes",shoeRoutes);
app.use("/api/auth",userRoutes);


app.listen(PORT,() =>{
    console.log(`server running on port ${PORT}`);
});