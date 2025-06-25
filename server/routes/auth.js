import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        status: false,
        message: 'Missing required fields',
      });
    }

    if (role && !['admin', 'sales'].includes(role)) {
      return res.status(400).json({
        status: false,
        message: 'Invalid role. Must be "admin" or "sales".',
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: false,
        message: 'User already exists',
      });
    }

    const user = new User({
      name,
      email,
      password, // Make sure password is hashed in User model
      role: role || 'sales',
    });

    await user.save();

    const token = jwt.sign(
      { userId: user._id, name: user.name, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(201).json({
      status: true,
      message: 'User registered successfully',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      status: false,
      message: 'Server error during registration',
      error: error.message,
    });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: false,
        message: 'Email and password are required',
      });
    }

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        status: false,
        message: 'Invalid credentials',
      });
    }

    const token = jwt.sign(
      { userId: user._id, name: user.name, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      status: true,
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      status: false,
      message: 'Server error during login',
      error: error.message,
    });
  }
});

// Admin-only: Get all users
router.get('/users', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({
        status: false,
        message: 'Access denied. Admins only.',
      });
    }

    const users = await User.find().select('-password');

    res.json({
      status: true,
      message: 'Users retrieved successfully',
      count: users.length,
      users,
    });
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({
      status: false,
      message: 'Server error retrieving users',
      error: error.message,
    });
  }
});

// Authenticated: Get current user profile
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) {
      return res.status(404).json({
        status: false,
        message: 'User not found',
      });
    }

    res.json({
      status: true,
      message: 'Profile retrieved successfully',
      user,
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({
      status: false,
      message: 'Server error retrieving profile',
      error: error.message,
    });
  }
});

export default router;
