# 🌱 BDKrishi Mini CRM

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-22-339933?logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-Backend-000000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Authentication-black?logo=jsonwebtokens)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38BDF8?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue)

A modern **Mini CRM (Customer Relationship Management)** web application built with the **MERN Stack**. This project helps businesses efficiently manage customers, sales leads, and CRM activities through a clean, responsive, and secure dashboard.

---

# 📂 Repository

## 💻 Client Repository

https://github.com/RupomPB/bdkrishi-mini-crm-client

## ⚙️ Server Repository

https://github.com/RupomPB/bdkrishi-mini-crm-server

---

# 📸 Screenshots

## 🏠 Login

![Login](https://i.ibb.co.com/0VtVwh89/image.png)

---

## 📊 Dashboard

![Dashboard](https://i.ibb.co.com/QFYqXDYq/image.png)

---

## 👥 Customers

![Customers](https://i.ibb.co.com/xKrCVSDX/image.png)

---

## 🎯 Leads

![Leads](https://i.ibb.co.com/LdCMBmNj/image.png)

---

# ✨ Features

## 🔐 Authentication

- ✅ User Registration
- ✅ User Login
- ✅ JWT Authentication
- ✅ Protected Routes
- ✅ Logout
- ✅ Password Show / Hide

---

## 📊 Dashboard

- ✅ CRM Statistics
- ✅ Customer Count
- ✅ Lead Count
- ✅ Won Leads
- ✅ Lost Leads
- ✅ Analytics Chart
- ✅ Recent Customers
- ✅ Recent Leads

---

## 👥 Customer Management

- ✅ Add Customer
- ✅ Edit Customer
- ✅ Delete Customer
- ✅ Customer List
- ✅ Customer Status

---

## 🎯 Lead Management

- ✅ Add Lead
- ✅ Edit Lead
- ✅ Delete Lead
- ✅ Lead Status
- ✅ Lead Priority
- ✅ Customer Assignment

---

## 🎨 User Interface

- ✅ Premium Dashboard
- ✅ Responsive Layout
- ✅ Modern Login Page
- ✅ Modern Register Page
- ✅ Toast Notifications
- ✅ Beautiful Cards
- ✅ Clean UI
- ✅ Loading State

---

# 🛠 Tech Stack

| Frontend | Backend | Database |
|-----------|----------|-----------|
| React.js | Node.js | MongoDB |
| React Router | Express.js | Mongoose |
| Tailwind CSS | JWT | |
| DaisyUI | bcryptjs | |
| React Query | dotenv | |
| Axios | cors | |
| React Hook Form | | |
| React Hot Toast | | |
| Lucide React | | |
| Recharts | | |

---

# 📁 Project Structure

```bash
BDKrishi-Mini-CRM
│
├── client
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── layouts
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Client

```bash
git clone https://github.com/RupomPB/bdkrishi-mini-crm-client.git

cd bdkrishi-mini-crm-client

npm install

npm run dev
```

---

## Clone Server

```bash
git clone https://github.com/RupomPB/bdkrishi-mini-crm-server.git

cd bdkrishi-mini-crm-server

npm install

npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the server folder.

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY
```

---

# 📦 API Endpoints

## Authentication

```http
POST /api/auth/register

POST /api/auth/login
```

---

## Customers

```http
GET    /api/customers

POST   /api/customers

PUT    /api/customers/:id

DELETE /api/customers/:id
```

---

## Leads

```http
GET    /api/leads

POST   /api/leads

PUT    /api/leads/:id

DELETE /api/leads/:id
```

---

# 🚀 Upcoming Features

- 🔍 Customer Search
- 🎯 Customer Filter
- 📄 Pagination
- 🔍 Lead Search
- 🎯 Lead Filter
- 📊 Advanced Dashboard Analytics
- 🌙 Dark Mode
- 🔔 Notification Panel
- 📁 Export CSV
- 👥 Role-Based Dashboard
- 📱 Improved Mobile Experience

---

# 👨‍💻 Author

## Rupom Prosad Badhan

**Frontend / MERN Stack Developer**

### GitHub

https://github.com/RupomPB

### LinkedIn

https://www.linkedin.com/in/rupom-pb/

### Portfolio

https://portfolio-gamma-seven-dsp20g2nki.vercel.app

---

# ⭐ Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub.

It helps support the project and encourages future improvements.

---

## 📄 License

This project is licensed under the **MIT License**.

---

### Built with ❤️ by Rupom Prosad Badhan