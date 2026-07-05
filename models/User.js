const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required : [true, "ten nguoi la bat buoc"],
        unique: true,
        trim : true,
    },
    password: {
        type: String,
        required: [true, "mat khau la bat buoc"],
        minlength : 6,
    },
    role :{
        type: String,
        enum : {
           values: ["client","admin","staff"]  
        },
        default : "client"//mac dinh ai dang ky la client
    }
});

module.exports = mongoose.model("User",userSchema);//export cho file khac co the dung