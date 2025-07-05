// leadController.js
import Lead from '../models/Lead.js';
import User from '../models/User.js';

/**
 * Create Lead - Sales user adds a lead
 */
export const createLead = async (req, res) => {
  try {
    const salesUserId = req.user._id; // from your auth middleware
    const salesUser = await User.findById(salesUserId);

    if (!salesUser || salesUser.role !== 'sales') {
      return res.status(403).json({ message: 'Only sales users can create leads.' });
    }

    const adminId = salesUser.createdBy; // Admin who created this sales user

    const lead = new Lead({
      ...req.body,
      createdBy: salesUserId,
      assignedAdmin: adminId
    });

    await lead.save();
    res.status(201).json({ message: 'Lead created successfully', lead });

  } catch (error) {
    res.status(500).json({ message: 'Failed to create lead', error });
  }
};

/**
 * Get All Leads for Admin
 */
export const getAdminLeads = async (req, res) => {
  try {
    const adminId = req.user._id;

    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const leads = await Lead.find({ assignedAdmin: adminId })
                            .populate('createdBy', 'name email');

    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch leads', error });
  }
};
