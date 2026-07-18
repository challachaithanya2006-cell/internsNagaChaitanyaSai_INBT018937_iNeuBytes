import api from './api';

export const fetchAppointments = () => api.get('/appointments');
export const createAppointment = (payload) => api.post('/appointments', payload);
export const updateAppointment = (id, payload) => api.put(`/appointments/${id}`, payload);
export const deleteAppointment = (id) => api.delete(`/appointments/${id}`);
