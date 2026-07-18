# Healthcare Management System

A full-stack healthcare management application built with React, Vite, Tailwind CSS v4, Node.js, Express, MongoDB, and JWT authentication.

## Features
- Landing page with modern UI and animations
- Patient, doctor, and admin role-based dashboards
- Appointment booking and management
- Authentication with JWT and bcrypt
- Protected routes and API services
- Charts and analytics interface
- Responsive layout for desktop and mobile

## Installation

### Client
```bash
cd client
npm install
npm run dev
```

### Server
```bash
cd server
npm install
cp .env.example .env
npm run dev
```

## Environment Variables
Create a `.env` file inside the server folder with:
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/healthcare-management
JWT_SECRET=supersecretkey
```

## Folder Structure
```text
Healthcare-Management-System/
├── client/
│   ├── public/
│   └── src/
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
```

## API Endpoints
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/profile
- GET /api/appointments
- POST /api/appointments
- PUT /api/appointments/:id
- DELETE /api/appointments/:id

## Screenshots
Add screenshots in the screenshots directory after running the app.

## Deployment Guide
Deploy the client to Vercel and the server to Render or Railway with the same environment variables.
