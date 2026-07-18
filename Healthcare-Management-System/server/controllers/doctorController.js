import Doctor from '../models/Doctor.js';
import Appointment from '../models/Appointment.js';

export const createDoctorProfile = async (req, res) => {
  try {
    const profile = await Doctor.create({ user: req.user._id, ...req.body });
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDoctorProfile = async (req, res) => {
  const profile = await Doctor.findOne({ user: req.user._id });
  res.json(profile || {});
};

export const getDoctorAppointments = async (req, res) => {
  const appointments = await Appointment.find({ doctor: req.user._id }).populate('patient', 'name');
  res.json(appointments);
};
