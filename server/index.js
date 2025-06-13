const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("./models/user.moduls.js"); // ✅ use consistent naming
const bcrypt = require('bcryptjs');
require("dotenv").config();

// Config
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//Check user
app.get("/user", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Register api
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userCreated = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: "User is created", user: userCreated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//Signup api
app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Incoming data:", req.body);

    if (!email || !password) {
      return res.status(400).send("Email and password are required");
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(404).send("Email not found!");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send("Wrong password");
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Signup error:", error.message);
    res.status(500).send("Something went wrong");
  }
});

// Connect MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(" MongoDB Error:", err));

// Routes Home Api
app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
