import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { useAuthContext } from "../context/AuthContext";
import "../styles/Dashboard.css";

function Habits() {
  const { user } = useAuthContext();

  const [habits, setHabits] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    if (user) {
      fetchHabits();
    }
  }, [user]);

  async function fetchHabits() {
    const { data, error } = await supabase
      .from("habits")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (!error) {
      setHabits(data || []);
    }
  }

  async function addHabit(e) {
    e.preventDefault();

    if (!name) return;

    const { error } = await supabase
      .from("habits")
      .insert([
        {
          user_id: user.id,
          name,
          streak: 0,
          progress: 0,
        },
      ]);

    if (!error) {
      setName("");
      fetchHabits();
    }
  }

  async function completeHabit(id, streak, progress) {
    await supabase
      .from("habits")
      .update({
        streak: streak + 1,
        progress: progress + 10,
      })
      .eq("id", id);

    fetchHabits();
  }

  async function deleteHabit(id) {
    await supabase
      .from("habits")
      .delete()
      .eq("id", id);

    fetchHabits();
  }

  return (
    <div className="dashboard-content">

      <h1>Habits</h1>

      <form
        className="dashboard-form"
        onSubmit={addHabit}
      >

        <input
          type="text"
          placeholder="Habit Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="card-btn">
          Add Habit
        </button>

      </form>

      <div className="data-list">

        {habits.length === 0 ? (
          <p>No Habits Yet</p>
        ) : (
          habits.map((habit) => (
            <div
              key={habit.id}
              className="data-item"
            >

              <div>

                <h3>{habit.name}</h3>

                <p>
                  🔥 Streak : {habit.streak} Days
                </p>

                <p>
                  Progress : {habit.progress}%
                </p>

              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >

                <button
                  className="card-btn"
                  onClick={() =>
                    completeHabit(
                      habit.id,
                      habit.streak,
                      habit.progress
                    )
                  }
                >
                  Complete
                </button>

                <button
                  className="card-btn"
                  onClick={() =>
                    deleteHabit(habit.id)
                  }
                >
                  Delete
                </button>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default Habits;