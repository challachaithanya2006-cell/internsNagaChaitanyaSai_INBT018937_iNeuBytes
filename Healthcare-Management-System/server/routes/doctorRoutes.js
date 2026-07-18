import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';
import { createDoctorProfile, getDoctorProfile, getDoctorAppointments } from '../controllers/doctorController.js';

const router = express.Router();

router.post('/profile', authMiddleware, roleMiddleware(['doctor']), createDoctorProfile);
router.get('/profile', authMiddleware, roleMiddleware(['doctor']), getDoctorProfile);
router.get('/appointments', authMiddleware, roleMiddleware(['doctor']), getDoctorAppointments);

export default router;
