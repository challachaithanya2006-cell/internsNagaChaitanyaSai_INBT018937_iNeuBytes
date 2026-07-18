# 🏥 Healthcare Management System

A full-stack Healthcare Management System built using the MERN Stack. This application provides a modern platform for managing patients, doctors, appointments, and administrative operations through secure role-based dashboards.

---

## 📌 Features

### Authentication
- Secure Login & Registration
- JWT Authentication
- Password Encryption using bcrypt
- Role-Based Access Control
  - Patient
  - Doctor
  - Admin

### Patient
- View Dashboard
- Book Appointments
- View Appointment History
- Manage Profile
- View Medical Records

### Doctor
- Doctor Dashboard
- View Patients
- Manage Appointments
- Update Patient Notes
- Profile Management

### Admin
- Admin Dashboard
- Manage Doctors
- Manage Patients
- Manage Appointments
- Analytics Dashboard

### General
- Responsive UI
- Protected Routes
- RESTful APIs
- Error Handling
- Loading States
- Toast Notifications
- Modern Dashboard Design

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS v4
- React Router DOM
- Axios
- React Icons
- React Toastify
- Framer Motion
- Chart.js

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- cors

---

# 📂 Project Structure

```
Healthcare-Management-System/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/your-username/Healthcare-Management-System.git
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## Backend Setup

```bash
cd server
npm install
npm run dev
```

Backend will run on:

```
http://localhost:5000
```

---

# ⚙ Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# 🔐 Authentication

- JWT Token Authentication
- Password Hashing using bcrypt
- Protected Routes
- Role-Based Authorization

---

# 📡 API Endpoints

## Authentication

```
POST /api/auth/register
POST /api/auth/login
```

## Patients

```
GET /api/patients
POST /api/patients
PUT /api/patients/:id
DELETE /api/patients/:id
```

## Doctors

```
GET /api/doctors
POST /api/doctors
PUT /api/doctors/:id
DELETE /api/doctors/:id
```

## Appointments

```
GET /api/appointments
POST /api/appointments
PUT /api/appointments/:id
DELETE /api/appointments/:id
```

---

# 📊 Future Enhancements

- Email Notifications
- SMS Appointment Reminders
- Online Payment Integration
- Video Consultation
- Electronic Health Records
- Prescription Management
- Medical Report Upload
- AI Appointment Suggestions

---

# 📱 Responsive Design

✔ Desktop

✔ Tablet

✔ Mobile

---

# 📷 Screenshots

Add screenshots here after running the project.

Example:

```
screenshots/
│
├── home.png
├── login.png
├── register.png
├── patient-dashboard.png
├── doctor-dashboard.png
└── admin-dashboard.png
```

---

# 👨‍💻 Author

**CHALLA NAGA CHAITANYA SAI**

B.Tech Computer Science & Engineering

JNTUK University College of Engineering Narasaraopet

---

# 📄 License

This project is developed for educational and internship purposes.

---

## ⭐ If you find this project useful, consider giving it a star on GitHub!