
---

### 📁 `server/README.md`

````markdown
# B2B Lead CRM Lite – Backend

This is the **backend** for the **B2B Lead CRM Lite** application, built using **Node.js**, **Express**, and **MongoDB**. It provides a RESTful API for user authentication, lead management, and task handling. The backend is connected to a frontend built using Vite + React.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- bcryptjs
- dotenv
- CORS
- Nodemon (for development)

---

## 📦 Installed Packages using yarn

```bash
yarn add express mongoose dotenv cors bcryptjs jsonwebtoken
yarn add -D nodemon
````

## 📦 Installed Packages using npm

```bash
npm install
npm install express mongoose dotenv cors bcryptjs jsonwebtoken
npm install --save-dev nodemon


```

---

## 📂 Project Structure

```
server/
├── config/             # DB connection setup
│   └── db.js
├── controllers/        # Route handler logic
│   ├── authController.js
│   └── leadController.js
├── models/             # Mongoose schemas
│   ├── User.js
│   └── Lead.js
├── routes/             # Express route definitions
│   ├── authRoutes.js
│   └── leadRoutes.js
├── middlewares/        # Middleware like auth token verification
│   └── verifyToken.js
├── .env                # Environment variables
├── index.js            # Entry point
├── package.json
└── README.md
```

---

## 🛠️ Setup Instructions

### 1. Navigate to backend folder

```bash
cd server
```

### 2. Install dependencies Using yarn

```bash
yarn install
```

### Install dependencies Using npm

```bash
npm install
```

### 3. Create `.env` file

Inside `server/`, add the following environment variables in `.env`:

```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/b2b_crm
JWT_SECRET=supersecurekey
```

### 4. Start the development server using yarn

```bash
yarn dev
```

### Start the development server using npm

```bash
npm run dev
```


The backend will run on:
📍 `http://localhost:5000`

---

## 🧪 Example API Routes

| Method | Route                | Description              |
| ------ | -------------------- | ------------------------ |
| POST   | `/api/auth/register` | Register new user        |
| POST   | `/api/auth/login`    | Login user, return token |
| GET    | `/api/leads`         | Get all leads            |
| POST   | `/api/leads`         | Create a new lead        |
| PUT    | `/api/leads/:id`     | Update lead              |
| DELETE | `/api/leads/:id`     | Delete lead              |

---

## 🔐 Authentication Flow

1. Register/Login user to get JWT token.
2. Pass token in `Authorization` header for protected routes:

```http
Authorization: Bearer <your_token_here>
```

---

## 📦 Scripts

Inside `package.json`:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

## Using npm

* `yarn dev`: Starts backend with nodemon (auto-restart on changes)
* `yarn start`: Starts backend normally

## Using npm

* `npm run dev`: Starts backend with nodemon (auto-restart on changes)
* `npm start`: Starts backend normally

---

## ✅ Features Planned

* [x] User registration and login with hashed passwords
* [x] JWT token-based authentication
* [ ] Lead CRUD operations
* [ ] Task management module
* [ ] Admin & Sales roles (role-based access)

---

## 🤝 API Usage from Frontend

Use `fetch` or `axios` from frontend:

```js
fetch("http://localhost:5000/api/leads", {
  headers: {
    "Authorization": "Bearer YOUR_JWT_TOKEN"
  }
});
```

---

## 🧑‍💻 Contributors

This project is a part of the **InternPro Team Collaboration**.

```