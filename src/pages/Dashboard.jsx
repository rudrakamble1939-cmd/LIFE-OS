import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { useAuthContext } from "../context/AuthContext";

import DashboardCard from "../components/DashboardCard";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import "../styles/Dashboard.css";

const COLORS = ["#3B82F6", "#22C55E", "#F59E0B", "#EF4444"];

function Dashboard() {
  const { user } = useAuthContext();

  const [taskCount, setTaskCount] = useState(0);
  const [noteCount, setNoteCount] = useState(0);
  const [habitCount, setHabitCount] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);

  const [taskChart, setTaskChart] = useState([]);
  const [expenseChart, setExpenseChart] = useState([]);

  useEffect(() => {
    if (user) {
      fetchDashboard();
    }
  }, [user]);

  async function fetchDashboard() {
    // Tasks
    const { data: tasks } = await supabase
      .from("tasks")
      .select("*")
      .eq("user_id", user.id);

    setTaskCount(tasks?.length || 0);

    // Notes
    const { data: notes } = await supabase
      .from("notes")
      .select("*")
      .eq("user_id", user.id);

    setNoteCount(notes?.length || 0);

    // Habits
    const { data: habits } = await supabase
      .from("habits")
      .select("*")
      .eq("user_id", user.id);

    setHabitCount(habits?.length || 0);

    // Expenses
    const { data: expenses } = await supabase
      .from("expenses")
      .select("*")
      .eq("user_id", user.id);

    const total =
      expenses?.reduce(
        (sum, item) => sum + Number(item.amount),
        0
      ) || 0;

    setExpenseTotal(total);

    // Chart Data
    setTaskChart([
      {
        name: "Tasks",
        value: tasks?.length || 0,
      },
      {
        name: "Notes",
        value: notes?.length || 0,
      },
      {
        name: "Habits",
        value: habits?.length || 0,
      },
    ]);

    setExpenseChart(
      expenses?.map((item) => ({
        name: item.category,
        value: Number(item.amount),
      })) || []
    );
  }

  return (
    <div className="dashboard-content">

      <h1>Dashboard</h1>

      <div className="dashboard-cards">

        <DashboardCard
          title="Tasks"
          value={taskCount}
          subtitle="Total Tasks"
        />

        <DashboardCard
          title="Notes"
          value={noteCount}
          subtitle="Saved Notes"
        />

        <DashboardCard
          title="Habits"
          value={habitCount}
          subtitle="Active Habits"
        />

        <DashboardCard
          title="Expenses"
          value={`₹${expenseTotal}`}
          subtitle="Total Expenses"
        />

      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          marginTop: "40px",
        }}
      >

        <div className="chart-card">

          <h2>Productivity</h2>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={taskChart}>

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="value" fill="#3B82F6" />

            </BarChart>

          </ResponsiveContainer>

        </div>

        <div className="chart-card">

          <h2>Expense Analytics</h2>

          {expenseChart.length === 0 ? (

            <p
              style={{
                color: "white",
                textAlign: "center",
                marginTop: "100px",
              }}
            >
              No Expenses Yet
            </p>

          ) : (

            <ResponsiveContainer width="100%" height={300}>

              <PieChart>

                <Pie
                  data={expenseChart}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >

                  {expenseChart.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          )}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;