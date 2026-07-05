# 👟 Shoe Store E-commerce Backend API 🚀

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/)

> **⚠️ Status: Work In Progress (WIP)**
> *Dự án đang trong quá trình phát triển và hoàn thiện cấu trúc. Các tính năng nâng cao như Real-time Socket.io và Payment Gateway đang được tích hợp theo lộ trình.*

---

## 💡 Giới thiệu (Overview)
Đây là hệ thống **RESTful API** phục vụ cho nền tảng thương mại điện tử mua bán giày. Dự án tập trung vào việc thiết kế cấu trúc dữ liệu NoSQL linh hoạt, bảo mật xác thực người dùng và tối ưu hóa hiệu suất truy vấn với MongoDB.

---

## 🛠 Công nghệ sử dụng (Tech Stack)

- **Runtime Environment:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB / Mongoose ODM
- **Authentication:** JSON Web Token (JWT) & Bcrypt (Password Hashing)
- **Architecture:** MVC (Model - View - Controller) & Layered Architecture

---

## 🔑 Tính năng hiện có (Current Features)

- [x] **Authentication & Authorization:**
  - Đăng ký, Đăng nhập bảo mật (Bcrypt Hashing).
  - Quản lý phiên làm việc bằng JWT.
- [x] **Flexible Product Catalog:**
  - Quản lý sản phẩm với Schema linh hoạt (Size, Color, Brand).
  - Tìm kiếm và lọc sản phẩm nâng cao.
- [x] **User Cart & Orders:**
  - Quản lý giỏ hàng dựa trên `userId`.
  - Quy trình tạo đơn hàng và lưu trữ lịch sử mua hàng.

---

## 📡 API Endpoints (Mẫu thiết kế RESTful)

| HTTP Method | Endpoint | Mô tả | Quyền truy cập |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/v1/auth/register` | Đăng ký tài khoản | Public |
| `POST` | `/api/v1/auth/login` | Đăng nhập & Lấy JWT | Public |
| `GET` | `/api/v1/products` | Lấy danh sách giày | Public |
| `GET` | `/api/v1/products/:id` | Xem chi tiết 1 đôi giày | Public |
| `POST` | `/api/v1/orders` | Tạo đơn hàng mới | Customer |

---

## 🗺 Lộ trình phát triển (Roadmap)

- [ ] **Real-time Notifications:** Tích hợp **Socket.io** để thông báo trạng thái đơn hàng.
- [ ] **Search Optimization:** Sử dụng MongoDB Atlas Search để tối ưu tìm kiếm.
- [ ] **Payment Gateway:** Tích hợp VNPay / MoMo Sandbox.
- [ ] **Cloud Storage:** Tích hợp Cloudinary để quản lý hình ảnh sản phẩm.

---

## 👨‍💻 Tác giả
- **Nguyễn Hữu Duy** - *Computer Engineering Student @ HCMUS*
- GitHub: [duynguyen1312004](https://github.com/duynguyen1312004)