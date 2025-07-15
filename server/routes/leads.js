import express from 'express';
import Lead from '../models/Lead.js';

const router = express.Router();

// POST /api/leads
router.post('/', async (req, res) => {
  try {
    const newLead = new Lead(req.body);
    await newLead.save();
    res.status(201).json(newLead);
  } catch (err) {
    res.status(500).json({ message: 'Error saving lead', error: err });
  }
});

// GET /api/leads/user/:userId
router.get('/user/:userId', async (req, res) => {
  try {
    const leads = await Lead.find({ createdBy: req.params.userId });
    res.status(200).json(leads);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching leads', error: err });
  }
});

export default router;
