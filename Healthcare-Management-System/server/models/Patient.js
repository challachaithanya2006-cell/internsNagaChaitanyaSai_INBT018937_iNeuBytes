import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  age: Number,
  gender: String,
  bloodGroup: String,
  medicalHistory: [String]
}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);
export default Patient;
