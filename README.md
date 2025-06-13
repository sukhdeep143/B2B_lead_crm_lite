
---

### 📘 `README.md` for Full Project (client + server in one folder)

markdown
# B2B Lead CRM Lite – Full Stack Project

This is a full-stack CRM (Customer Relationship Management) application built with the **MERN stack**:

- 🖥️ **Frontend**: Vite + React.js
- 🔧 **Backend**: Node.js + Express.js
- 🗃️ **Database**: MongoDB
- 🎯 **Goal**: Help B2B teams manage leads, tasks, and user access in a lightweight and simple dashboard.

---

## 📁 Project Structure



b2b-lead-crm-lite/
├── client/       # Frontend using Vite + React
├── server/       # Backend using Node.js + Express
├── .gitignore
└── README.md     # (This file)



---

## 📦 Tech Stack

| Layer     | Technology                         |
|-----------|------------------------------------|
| Frontend  | Vite, React.js, Tailwind CSS (opt) |
| Backend   | Node.js, Express.js                |
| Database  | MongoDB + Mongoose                 |
| Auth      | JWT, bcryptjs                      |
| Dev Tools | nodemon, dotenv, yarn/npm          |

---

## 🛠️ Setup Instructions

### ✅ Prerequisites

- Node.js & npm/yarn installed
- MongoDB running locally or via cloud (MongoDB Atlas)

---

### 📦 Install Dependencies

#### 1. Frontend

```bash
cd client
# Using Yarn
yarn install
# or using npm
npm install
````

#### 2. Backend

```bash
cd ../server
# Using Yarn
yarn install
yarn add express mongoose dotenv cors bcryptjs jsonwebtoken
yarn add -D nodemon

# or using npm
npm install express mongoose dotenv cors bcryptjs jsonwebtoken
npm install --save-dev nodemon
```

---

## 🔐 Environment Variables

Create a `.env` file in the `server/` folder:

```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/b2b_crm
JWT_SECRET=supersecurekey
```

If using a `.env` in `client/`, you can add:

```env
VITE_API_URL=http://localhost:5000
```

---

## 🚀 Start the App

### 🖥️ Frontend

```bash
cd client
yarn dev     # or npm run dev
```

Runs at: [http://localhost:3000](http://localhost:3000)

### 🔧 Backend

```bash
cd server
yarn dev     # or npm run dev
```

Runs at: [http://localhost:5000](http://localhost:5000)

---

## 📜 Scripts Overview

| Folder | Yarn Command | npm Command     | Description                |
| ------ | ------------ | --------------- | -------------------------- |
| client | `yarn dev`   | `npm run dev`   | Start frontend dev server  |
| client | `yarn build` | `npm run build` | Build production frontend  |
| server | `yarn dev`   | `npm run dev`   | Start backend with nodemon |
| server | `yarn start` | `npm start`     | Start backend normally     |

---

## 🧪 API Endpoints (Sample)

| Method | Route                | Description    |
| ------ | -------------------- | -------------- |
| POST   | `/api/auth/register` | Register user  |
| POST   | `/api/auth/login`    | Login user     |
| GET    | `/api/leads`         | Get all leads  |
| POST   | `/api/leads`         | Add a new lead |
| PUT    | `/api/leads/:id`     | Update a lead  |
| DELETE | `/api/leads/:id`     | Delete a lead  |

---

## ✅ Features (Planned)

* [x] User Registration/Login
* [x] JWT Authentication
* [x] Lead Management (CRUD)
* [ ] Task Assignment
* [ ] Admin/Sales Roles
* [ ] Filtering & Sorting
* [ ] Dashboard with Lead Stats

---

## 👨‍💻 Team

This project is part of the **InternPro Team Collaboration**.

---

## 📌 Notes

* You can run both client and server together using tools like **concurrently** or in separate terminals.
* Enable CORS in the backend to allow frontend communication.
* All passwords are hashed using `bcryptjs`.
* Protect routes using JWT verification middleware.

---

## 📬 Contributions

We welcome suggestions, feedback, and contributions!

