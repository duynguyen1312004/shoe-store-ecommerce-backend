const jwt = require("jsonwebtoken");
const protect = (req,res,next) =>{
    //lấy token từ header của yêu cầu
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({
            message : "bạn chưa đăng nhập, chưa có quyền truy cập",
        });
    }
    try{
        //giải mã token : token có dạng bearer <token>
        const decoded = jwt.verify(token.split(" ")[1],process.env.JWT_SECRET);
        //lưu thông tin user đã giải mã vào req để các hàm sau có thể dùng
        req.user = decoded;
        // cho phép đi tiếp vào controller
        next();
    }catch(error){
        res.status(401).json({
            message: "token lỗi hoặc hết hạn",
        });
    }
};

// kiểm tra xem role có đúng yêu cầu không
const restrictTo = (...roles) =>{
    return (req,res,next) =>{
        if(!roles.includes(req.user.role)){
            return res.status(403).json({
                message : "bạn không có quyền thực hiện hành động"
            });
        }
        next();
    };
};

module.exports = {protect,restrictTo};