import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';
import { createPatientProfile, getPatientProfile, getPatientAppointments } from '../controllers/patientController.js';

const router = express.Router();

router.post('/profile', authMiddleware, roleMiddleware(['patient']), createPatientProfile);
router.get('/profile', authMiddleware, roleMiddleware(['patient']), getPatientProfile);
router.get('/appointments', authMiddleware, roleMiddleware(['patient']), getPatientAppointments);

export default router;
