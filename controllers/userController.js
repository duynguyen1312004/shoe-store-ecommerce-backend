const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");// thẻ thông hành cho server nhớ phiên đăng nhập

exports.register = async (req,res) =>{
    try{
        const {username, password} = req.body;

        const userExits = await User.findOne({username});
        if(userExits){
            return res.status(404).json({
                message: "Tên đăng nhập đã tồn tại",
            });
        }
        // mã hóa mật khẩu
        const salt = await bcrypt.genSalt(10);// tạo muối để trộn vào mật khẩu
        const hashedPassword = await bcrypt.hash(password,salt);

        //tạo user mới với mật khẩu đã được mã hóa
        const newUser = new User({
            username,
            password : hashedPassword,
        });
        await newUser.save();

        res.status(201).json({
            message: "đăng ký thành công",
            user: {
                id : newUser._id,
                username : newUser.username,
            }
        });
    }catch(error){
        res.status(500).json({
            message: error.message,
        });
    }
};

exports.login = async (req,res) =>{
    try{
        const {username, password} = req.body;
        //tìm coi người này có đúng hay không
        const user = await User.findOne({username});
        if(!user){
            return res.status(400).json({
                message: "ten dang nhap khong dung",
            });
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({
                message: " sai mat khau",
            });
        }
        //tạo thẻ jwt
        const token = jwt.sign(
            {//thông tin của thẻ được đính kèm
                id : user._id,
                role : user.role,
            },
                process.env.JWT_SECRET,// thẻ
            {
                expiresIn : "1d", //thời hạn là 1 ngày
            }
        );
        // đúng hết các bước trên thì báo thành công
        res.json({
            message: "bạn đăng nhập thành công",
            token : token,
            user :{
                id : user._id,
                username : user.username,
                role : user.role,
            }
        });
    }catch(error){
        res.status(400).json({
            message : error.message,
        });
    }
};