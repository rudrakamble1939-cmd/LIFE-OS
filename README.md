# LifeOS

**LifeOS is a smart all-in-one productivity platform designed to simplify and organize everyday life.**

## Project Overview

LifeOS is an all-in-one productivity and personal management web application designed to help users organize their daily activities from a single platform. Instead of using multiple applications for tasks, notes, habits, expenses, and AI assistance, LifeOS combines these features into one modern and user-friendly system.

The application provides secure authentication, protected routes, complete CRUD functionality, analytics dashboards, AI-powered planning, receipt scanning using AI Vision, and expense management to improve productivity and simplify everyday life.

---

# Features

* Supabase Authentication (Login and Signup)
* Protected Routes
* Task Management (CRUD)
* Notes Management (CRUD)
* Habit Tracking (CRUD)
* Expense Management (CRUD)
* Analytics Dashboard using Recharts
* AI Daily Planner powered by Groq AI
* Receipt Scanner powered by Groq Vision
* Welcome Email using Resend
* User Profile Management
* Responsive User Interface
* Modern Glassmorphism Design

---

# Technology Stack

## Frontend

* React.js
* Vite
* React Router
* CSS3
* Recharts

## Backend

* Node.js
* Express.js

## Database and Authentication

* Supabase

## AI Integration

* Groq AI
* Groq Vision

## Email Service

* Resend

---

# Project Structure

```text
LifeOS
│
├── backend
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── public
│
├── src
│   ├── components
│   ├── context
│   ├── hooks
│   ├── layouts
│   ├── pages
│   ├── services
│   ├── styles
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
```

---

# Installation

## Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

## Open the Project

```bash
cd LifeOS
```

## Install Frontend Dependencies

```bash
npm install
```

## Start the Frontend

```bash
npm run dev
```

## Start the Backend

```bash
cd backend
npm install
npm start
```

---

# Environment Variables

## Frontend (.env)

```env
VITE_SUPABASE_URL=YOUR_SUPABASE_URL
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

## Backend (.env)

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY
RESEND_API_KEY=YOUR_RESEND_API_KEY
PORT=5000
```

---

# Modules

## Dashboard

Displays user statistics and analytics using interactive charts.

## Tasks

Allows users to create, edit, update, and delete daily tasks.

## Notes

Provides a space for creating and managing personal notes.

## Habits

Helps users track daily habits and monitor consistency.

## Expenses

Enables users to record, categorize, and analyze expenses.

## AI Planner

Generates an intelligent daily schedule using Groq AI based on the user's tasks.

## Receipt Scanner

Extracts information from receipt images using Groq Vision.

## Profile

Displays and manages user account information.

---

# Screenshots

Include screenshots of the following pages:

* Landing Page
* <img width="1887" height="977" alt="Screenshot 2026-07-10 162736" src="https://github.com/user-attachments/assets/a02b1e80-c14b-46f0-84d9-68d15937482e" />
* Login
* <img width="1917" height="972" alt="Screenshot 2026-07-10 162748" src="https://github.com/user-attachments/assets/c7bce8c9-834c-4af9-9cc3-4ec6f8185a8d" />
* Signup
* <img width="1918" height="988" alt="image" src="https://github.com/user-attachments/assets/b10dab49-763c-4b07-ab36-962167868133" />
* Dashboard
* <img width="1915" height="972" alt="Screenshot 2026-07-10 162830" src="https://github.com/user-attachments/assets/1fe047c7-0ecf-4148-8aa3-086eee38cc54" />
* Tasks
* <img width="1910" height="972" alt="Screenshot 2026-07-10 162838" src="https://github.com/user-attachments/assets/5e0b9c0e-2138-4612-aa51-a91a0e09d4c2" />
* Notes
* <img width="1915" height="972" alt="Screenshot 2026-07-10 162847" src="https://github.com/user-attachments/assets/48337239-f465-4a13-aaee-03739a58cdae" />
* Habits
* <img width="1919" height="975" alt="Screenshot 2026-07-10 162853" src="https://github.com/user-attachments/assets/455858ff-0de7-4254-8f45-4fbedc89721d" />
* Expenses
* <img width="1919" height="968" alt="Screenshot 2026-07-10 162857" src="https://github.com/user-attachments/assets/1ed14230-9999-4c97-8a45-06ba3501ebb9" />
* Analytics Dashboard
* <img width="1908" height="984" alt="Screenshot 2026-07-10 162902" src="https://github.com/user-attachments/assets/d0980618-a4cf-4187-9556-065ae5e8a3bc" />
* AI Planner
* <img width="1908" height="984" alt="Screenshot 2026-07-10 162902" src="https://github.com/user-attachments/assets/4ce95d94-a7c5-44f9-8f74-b8ab12e308fc" />
* Receipt Scanner
* <img width="1915" height="974" alt="Screenshot 2026-07-10 162906" src="https://github.com/user-attachments/assets/4de1aeef-5cfc-4d93-8596-a2cfb3232ce0" />
* Profile
* <img width="1907" height="985" alt="Screenshot 2026-07-10 162911" src="https://github.com/user-attachments/assets/8872948b-df13-40b3-9b1f-0a3cdf9ae710" />


---

# Deployment

**Live URL**

```
https://life-os-jlxw.vercel.app/tasks
```

---

# GitHub Repository

```
https://github.com/rudrakamble1939-cmd/LIFE-OS.git
```

---

# Author

**Rudra Kamble**

Major Project submitted as an individual project.

---

# Acknowledgement

Special thanks to **Prathamesh Sir** for providing the project guidelines and requirements.
