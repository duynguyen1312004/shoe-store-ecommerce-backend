const mongoose = require("mongoose");

const shoeSchema = new mongoose.Schema({
    name:{
        type: String,
        require: [true, "Tên giày không được để trống"],
        minlength : 3,
        trim : true,
    },
    brand :{
        type: String,
        require: true,
        minlength : 3,
        trim :true,
    },
    price : {
        type: Number,
        required : [true, "Giá giày không được để trống"],
        min : 0,
    },
    description :{
        type: String,
        required: true,
        enum :{
            values: ["còn hàng", "hết hàng", "hàng sắp về"],
            message : `{values} không hợp lệ`
        }
    },
    createdBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true,
    }
});

module.exports = mongoose.model("Shoe",shoeSchema);