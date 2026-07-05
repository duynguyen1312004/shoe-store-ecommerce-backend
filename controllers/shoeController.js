const Shoe = require("../models/Shoe");// import model vao

//ham lay toan bo giay
exports.getAllShoe = async (req,res) =>{
    try{
        const shoes = await Shoe.find();
        
        res.json(shoes);
    }catch(error)
    {
        res.status(500).json({
            message: error.message,
        });
    }
};

exports.createShoe = async (req,res)=>{
    try{
        const newShoe = new Shoe({
            ...req.body,
            createdBy: req.user.id//biet duoc ai da cap nhat thong tin
        });
        await newShoe.save();
        res.status(201).json({
            message: " thanh cong",
            data : newShoe
        });
    }catch(error)
    {
        res.status(404).json({
            message: error.message
        });
    }
};

exports.updatedShoe = async (req,res) =>{
    try{
        const updatedShoe = await Shoe.findByIdAndUpdate(
            req.params.id,
            {
                name : req.body.name,
                brand: req.body.brand,
                price: req.body.price,
                description: req.body.description,
            },
            {
                new: true , // tra ve du lieu sau khi cap nhat xong
            },
        );
        if(!updatedShoe){
            return res.status(404).json({
                message: "khong tim thay du lieu de cap nhat",
            });
        }
        res.json({
            message: " cap nhat thanh cong",
            data: updatedShoe,
        });
    }catch(error){
        res.status(400).json({
            message: "loi khi cap nhat" + error.message,
        });
    }
};

exports.deleteShoe = async (req,res) =>{
    try{
        const deletedShoe = await Shoe.findByIdAndDelete(req.params.id);
        if(!deletedShoe){
            return res.status(404).json({
                message: "khong tim thay san pham de xoa",
            });
        }
        res.json({
            message: "da xoa thanh cong",
            data: deletedShoe,
        });
    }catch(error){
        res.status(400).json({
            message: " loi khi xoa" + error.message,
        });
    }
};

exports.findShoe = async (req,res) =>{
    try{
        const findedShoe = await Shoe.findById(req.params.id);
        if(!findedShoe){
            return res.status(404).json({
                message: "khong tim thay giay de xoa",
            });
        }
        res.json({
            data: findedShoe,
        });
    }catch(error){
        res.status(400).json({
            message: "loi khi tim giay" + error.message,
        });
    }
};