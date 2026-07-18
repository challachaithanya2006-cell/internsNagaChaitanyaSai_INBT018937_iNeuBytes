import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';
import { getAllUsers, getDashboardStats } from '../controllers/adminController.js';

const router = express.Router();

router.get('/users', authMiddleware, roleMiddleware(['admin']), getAllUsers);
router.get('/stats', authMiddleware, roleMiddleware(['admin']), getDashboardStats);

export default router;
