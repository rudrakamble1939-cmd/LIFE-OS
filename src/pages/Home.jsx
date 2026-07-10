import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-left">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Organize Your Life With
            <span> LifeOS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            LifeOS is your AI-powered productivity platform
            for managing Tasks, Notes, Habits, Expenses,
            Daily Planning and much more — all in one place.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/signup" className="primary-btn">
              Get Started
            </Link>

            <Link to="/login" className="secondary-btn">
              Login
            </Link>
          </motion.div>

        </div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/dashboard.png"
            alt="LifeOS Dashboard"
          />
        </motion.div>

      </section>

      {/* Features */}

      <section className="features" id="features">

        <h2>Everything In One Dashboard</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>📋 Tasks</h3>
            <p>
              Create, edit and complete daily tasks with AI
              suggestions.
            </p>
          </div>

          <div className="feature-card">
            <h3>📝 Notes</h3>
            <p>
              Store notes and scan handwritten pages using
              Groq Vision.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔥 Habits</h3>
            <p>
              Build better habits with streak tracking and
              reminders.
            </p>
          </div>

          <div className="feature-card">
            <h3>💰 Expenses</h3>
            <p>
              Track expenses manually or scan receipts using AI.
            </p>
          </div>

          <div className="feature-card">
            <h3>🤖 AI Planner</h3>
            <p>
              Let Groq AI create the best schedule for your day.
            </p>
          </div>

          <div className="feature-card">
            <h3>📊 Analytics</h3>
            <p>
              Beautiful charts showing productivity and spending.
            </p>
          </div>

        </div>

      </section>

      {/* AI Section */}

      <section className="ai-section">

        <h2>Powered By Artificial Intelligence</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>✨ Groq AI</h3>
            <p>
              Plan your day, summarize notes, and boost
              productivity.
            </p>
          </div>

          <div className="feature-card">
            <h3>👁 Groq Vision</h3>
            <p>
              Read receipts, handwritten notes and automatically
              save them.
            </p>
          </div>

          <div className="feature-card">
            <h3>📧 Smart Emails</h3>
            <p>
              Daily reminders delivered through Resend Email API.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta">

        <h2>
          Ready To Organize Your Life?
        </h2>

        <p>
          Join LifeOS today and make every day productive.
        </p>

        <Link
          to="/signup"
          className="primary-btn"
        >
          Create Free Account
        </Link>

      </section>

      {/* Footer */}

      <footer className="footer">

        <h3>LifeOS</h3>

        <p>
          AI Powered Productivity Platform
        </p>

        <p>
          © 2026 LifeOS. All Rights Reserved.
        </p>

      </footer>

    </>
  );
}

export default Home;