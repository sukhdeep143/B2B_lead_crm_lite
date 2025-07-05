import express from 'express';
import { createLead, getAdminLeads } from '../controllers/leadController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createLead);
router.get('/admin', auth, getAdminLeads);

export default router;
