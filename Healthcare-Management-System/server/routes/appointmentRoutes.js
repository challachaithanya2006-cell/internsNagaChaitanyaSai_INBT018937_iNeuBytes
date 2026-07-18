import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { createAppointment, getAppointments, updateAppointment, deleteAppointment } from '../controllers/appointmentController.js';

const router = express.Router();

router.get('/', authMiddleware, getAppointments);
router.post('/', authMiddleware, createAppointment);
router.put('/:id', authMiddleware, updateAppointment);
router.delete('/:id', authMiddleware, deleteAppointment);

export default router;
