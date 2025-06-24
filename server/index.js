import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import leadsRouter from './routes/leads.js';
import authRoutes from './routes/auth.js'; // Convert this file too



dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/leads', leadsRouter);
app.use('/api/auth', authRoutes); // ✅ Make sure this file also uses export/import

// Debug middleware
app.use((req, res, next) => {
  console.log('Request Body:', req.body);
  console.log('Request Headers:', req.headers);
  next();
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Error:", err));

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
