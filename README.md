# 👟 Shoe Store E-commerce Backend API 🚀

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/)

> **⚠️ Status: Work In Progress (WIP)**
> *Dự án đang trong quá trình phát triển và hoàn thiện cấu trúc. Các tính năng nâng cao như Real-time Socket.io và Payment Gateway đang được tích hợp theo lộ trình.*

---

## 💡 Giới thiệu (Overview)
Đây là hệ thống **RESTful API** phục vụ cho nền tảng thương mại điện tử mua bán giày. Dự án tập trung vào việc thiết kế cơ sở dữ liệu chuẩn hóa (Database Normalization), bảo mật xác thực người dùng và tối ưu hóa truy vấn dữ liệu.

---

## 🛠 Công nghệ sử dụng (Tech Stack)

- **Runtime Environment:** Node.js
- **Framework:** Express.js
- **Database:** MySQL / Relational Database
- **Authentication:** JSON Web Token (JWT) & Bcrypt (Password Hashing)
- **Architecture:** MVC (Model - View - Controller) & Layered Architecture

---

## 🔑 Tính năng hiện có (Current Features)

- [x] **Authentication & Authorization:**
  - Đăng ký, Đăng nhập bảo mật với mật khẩu được mã hóa (Bcrypt).
  - Phân quyền người dùng (Admin / Customer) bằng JWT.
- [x] **Product Management:**
  - CRUD (Thêm, đọc, sửa, xóa) sản phẩm giày.
  - Lọc sản phẩm theo danh mục, kích thước, và giá tiền.
- [x] **Order & Cart Management:**
  - Quản lý giỏ hàng của người dùng.
  - Tạo đơn hàng và xử lý logic tồn kho cơ bản.

---

## 📡 API Endpoints (Mẫu thiết kế RESTful)

| HTTP Method | Endpoint | Mô tả | Quyền truy cập |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/v1/auth/register` | Đăng ký tài khoản mới | Public |
| `POST` | `/api/v1/auth/login` | Đăng nhập & Nhận Token | Public |
| `GET` | `/api/v1/products` | Lấy danh sách sản phẩm (có phân trang) | Public |
| `POST` | `/api/v1/products` | Thêm sản phẩm mới | Admin |
| `POST` | `/api/v1/orders` | Tạo đơn hàng mới | Customer |

---

## 🗺 Lộ trình phát triển (Roadmap)

- [ ] **Real-time Notifications:** Tích hợp **Socket.io** để thông báo trạng thái đơn hàng thời gian thực cho Admin và Khách hàng.
- [ ] **Advanced Queries:** Tối ưu hóa tìm kiếm sản phẩm bằng Full-text Search / Indexing.
- [ ] **Payment Integration:** Tích hợp cổng thanh toán VNPay / MoMo Sandbox.
- [ ] **API Documentation:** Tự động hóa tài liệu với Swagger / OpenAPI.

---

## 👨‍💻 Tác giả
- **Nguyễn Hữu Duy** - *Computer Engineering Student @ HCMUS*
- GitHub: [duynguyen1312004](https://github.com/duynguyen1312004)