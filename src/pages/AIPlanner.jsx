import { useState } from "react";
import "../styles/Dashboard.css";

function AIPlanner() {
  const [tasks, setTasks] = useState("");
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState("");

  const generatePlan = async () => {
    if (!tasks.trim()) {
      alert("Please enter your tasks.");
      return;
    }

    setLoading(true);
    setPlan("");

    try {
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              {
                role: "system",
                content:
                  "You are a smart productivity assistant. Create a clear daily schedule with timings, priorities, short tips and motivation.",
              },
              {
                role: "user",
                content: `Plan my day using these tasks:\n\n${tasks}`,
              },
            ],
            temperature: 0.7,
            max_tokens: 500,
          }),
        }
      );

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      setPlan(data.choices[0].message.content);
    } catch (error) {
      console.error(error);
      alert("Failed to generate AI plan.");
    }

    setLoading(false);
  };

  return (
    <div className="dashboard-content">

      <h1>🤖 AI Planner</h1>

      <div className="dashboard-form">

        <textarea
          rows="8"
          placeholder={`Enter one task per line

Example:
Complete React Project
Attend Java Class
Gym at 6 PM
Buy Groceries`}
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
        />

        <button
          className="card-btn"
          onClick={generatePlan}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate AI Plan"}
        </button>

      </div>

      {plan && (
        <div className="ai-result">
          <h2>📅 Your AI Schedule</h2>

          <pre
            style={{
              whiteSpace: "pre-wrap",
              color: "white",
              fontSize: "16px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            {plan}
          </pre>
        </div>
      )}

    </div>
  );
}

export default AIPlanner;