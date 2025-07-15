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

// PUT /api/leads/:id
router.put('/:id', async (req, res) => {
  try {
    const updatedLead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedLead);
  } catch (err) {
    res.status(500).json({ message: 'Error updating lead', error: err });
  }
});


// DELETE /api/leads/:id
router.delete('/:id', async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Lead deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting lead', error: err });
  }
});

// GET /api/leads/:id
// GET a single lead
router.get('/:id', async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    res.status(200).json(lead);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching lead', error: err });
  }
});

export default router;
