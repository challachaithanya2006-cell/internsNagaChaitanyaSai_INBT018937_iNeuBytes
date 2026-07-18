import User from '../models/User.js';
import Appointment from '../models/Appointment.js';

export const getAllUsers = async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
};

export const getDashboardStats = async (req, res) => {
  const totalUsers = await User.countDocuments();
  const totalAppointments = await Appointment.countDocuments();
  res.json({ totalUsers, totalAppointments });
};
