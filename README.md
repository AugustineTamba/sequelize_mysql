# 🛍️ Full-Stack Sequelize Platform

## Overview
This is a full-stack sequelize platform built with **JavaScript**, utilizing **Node.js, Express, Sequelize, and MySQL** for the backend, and **React.js** for the frontend. The platform supports authentication, CRUD functionalities, product management, user reviews, and account management.

## 🚀 Features
### 🔒 Authentication
- User Registration & Login (JWT Authentication)
- Password Reset & Change Password
- Role-Based Access Control (Admin/User)

### 🛒 Product Management
- Add, Update, and Delete Products (Admin)
- View All Products (Public & Authenticated Users)
- Search & Filter Products

### ⭐ User Reviews
- Add, Edit, and Delete Reviews
- View Reviews for a Product

### 📦 Orders & Cart
- Add & Remove Items from Cart
- Place an Order
- Order History

### 🛠️ Additional Features
- Image Upload (Cloudinary/Multer)
- Secure API with Rate Limiting
- Admin Dashboard for Managing Users & Products

---

## 🏗️ Tech Stack
### **Backend**
- Node.js
- Express.js
- Sequelize ORM
- MySQL Database
- JWT Authentication

### **Frontend**
- React.js (with React Router)
- Redux (for State Management)
- Axios (for API Requests)
- Tailwind CSS / Material UI

### **DevOps & Deployment**
- Docker (Optional)
- CI/CD with GitHub Actions
- Deployed on Vercel / Heroku / AWS

---

## 📌 Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/AugustineTamba/sequelize_mysql.git
cd ecommerce-platform
```

### **2️⃣ Backend Setup**
```sh
cd backend
npm install
```

#### Configure Environment Variables
Create a `.env` file in the `backend` directory with the following:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=ecommerce_db
JWT_SECRET=your_jwt_secret
```

#### Run the Server
```sh
npm start
```

### **3️⃣ Frontend Setup**
```sh
cd ../frontend
npm install
npm start
```

---

## 📡 API Endpoints
### **Authentication Routes**
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user & get token |
| POST | `/api/auth/reset-password` | Reset password |
| PATCH | `/api/auth/change-password` | Change password |

### **Product Routes**
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get product details |
| POST | `/api/products` | Add new product (Admin) |
| PUT | `/api/products/:id` | Update product (Admin) |
| DELETE | `/api/products/:id` | Delete product (Admin) |

### **Review Routes**
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/products/:id/reviews` | Add review |
| PUT | `/api/products/:id/reviews/:reviewId` | Update review |
| DELETE | `/api/products/:id/reviews/:reviewId` | Delete review |

---

## 🧪 Running Tests
```sh
npm test
```

---

## 🚀 Deployment
### **Docker**
```sh
docker-compose up --build
```

### **CI/CD Pipeline (GitHub Actions)**
- Automatic deployment on push to `main`

---

## 🤝 Contributing
Pull requests are welcome! Follow these steps:
1. Fork the repo
2. Create a feature branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m 'Added new feature'`)
4. Push to branch (`git push origin feature-branch`)
5. Create a Pull Request

---

## 🛡️ Security & Best Practices
- Enforce JWT Authentication
- Use Environment Variables for Secrets
- Implement Rate Limiting & CORS

---

## 📄 License
MIT License - See `LICENSE` file for details.

---

## 📞 Contact
- Author: Augustine Saah Tamba
- Email: satamba15@gmail.com
- GitHub: [Your GitHub Profile](https://github.com/AugustineTamba)
- Portfolio: [Augustine Portfolio](https://augustine.techllective.com)

---

Happy Coding! 🚀🎉

