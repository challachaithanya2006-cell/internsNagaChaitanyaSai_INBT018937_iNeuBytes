import Patient from '../models/Patient.js';
import Appointment from '../models/Appointment.js';

export const createPatientProfile = async (req, res) => {
  try {
    const profile = await Patient.create({ user: req.user._id, ...req.body });
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPatientProfile = async (req, res) => {
  const profile = await Patient.findOne({ user: req.user._id });
  res.json(profile || {});
};

export const getPatientAppointments = async (req, res) => {
  const appointments = await Appointment.find({ patient: req.user._id }).populate('doctor', 'name');
  res.json(appointments);
};
