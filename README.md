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
* Login
* Signup
* Dashboard
* Tasks
* Notes
* Habits
* Expenses
* Analytics Dashboard
* AI Planner
* Receipt Scanner
* Profile

---

# Deployment

**Live URL**

```
Add your deployed application URL here
```

---

# GitHub Repository

```
Add your GitHub repository link here
```

---

# Author

**Rudra Kamble**

Major Project submitted as an individual project.

---

# Acknowledgement

Special thanks to **Prathamesh Sir** for providing the project guidelines and requirements.
