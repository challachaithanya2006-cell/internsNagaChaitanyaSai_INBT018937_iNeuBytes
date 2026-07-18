import Appointment from '../models/Appointment.js';

export const createAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create({ patient: req.user._id, ...req.body });
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAppointments = async (req, res) => {
  const appointments = await Appointment.find().populate('patient doctor', 'name email');
  res.json(appointments);
};

export const updateAppointment = async (req, res) => {
  const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(appointment);
};

export const deleteAppointment = async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ message: 'Appointment deleted' });
};
