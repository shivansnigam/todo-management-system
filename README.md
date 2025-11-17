# Todo Management System (MERN Stack)

A clean and professional MERN-based Todo Management System built with a focus on:
- Task management (Add, Update, Complete, Delete)
- Filters (Search, Status, Priority)
- Stats dashboard (Total, Completed, Pending)
- Responsive UI
- Toast notifications
- Clean backend MVC structure

This project is designed for learning as well as real-world use.

---

## 🚀 Tech Stack

### **Frontend**
- React (Vite)
- Bootstrap 5
- React Toastify

### **Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- MVC architecture
- dotenv

---

## 📁 Folder Structure

project-root/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middlewares/
│ ├── config/
│ ├── server.js
│ ├── app.js
│ ├── .env
│ └── package.json
│
└── frontend/
├── src/
│ ├── api/
│ ├── components/
│ ├── App.jsx
│ ├── main.jsx
│ └── styles.css
├── public/
├── index.html
├── .env
└── package.json


---

## 🛠 Installation & Setup

### 🔹 **1. Clone the repository**
```bash
git clone <your-repo-url>
cd project-root

Backend Setup

cd backend
npm install
Create .env file

Inside backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
Run Backend (Nodemon)

npm run dev


Frontend Setup (React + Vite)

Go to frontend folder:

cd ../frontend
npm install

🔹 Start frontend
npm run dev

