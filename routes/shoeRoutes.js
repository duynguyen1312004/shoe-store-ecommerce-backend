const express = require("express");
const router = express.Router();
const shoeController = require("../controllers/shoeController");

const {protect, restrictTo } = require("../middleWare/authMiddleWare");

//lấy về
router.get("/",shoeController.getAllShoe);
//lấy về
router.get("/:id",shoeController.findShoe);
//đưa lên
router.put("/:id",protect,restrictTo("admin"),shoeController.updatedShoe);
//đăng lên
router.post("/",protect,restrictTo("admin","staff"),shoeController.createShoe);
router.delete("/:id",protect,restrictTo("admin"),shoeController.deleteShoe);

module.exports = router;