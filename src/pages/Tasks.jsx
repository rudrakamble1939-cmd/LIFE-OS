import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { useAuthContext } from "../context/AuthContext";
import "../styles/Dashboard.css";

function Tasks() {
  const { user } = useAuthContext();

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");

  useEffect(() => {
    if (user) {
      fetchTasks();
    }
  }, [user]);

  async function fetchTasks() {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (!error) {
      setTasks(data);
    }
  }

  async function addTask(e) {
    e.preventDefault();

    if (!title) return;

    const { error } = await supabase.from("tasks").insert([
      {
        user_id: user.id,
        title,
        description,
        priority,
        status: "Pending",
        date: new Date().toLocaleDateString(),
      },
    ]);

    if (!error) {
      setTitle("");
      setDescription("");
      setPriority("Medium");
      fetchTasks();
    }
  }

  async function deleteTask(id) {
    await supabase
      .from("tasks")
      .delete()
      .eq("id", id);

    fetchTasks();
  }

  return (
    <div className="dashboard-content">

      <h1>Tasks</h1>

      <form className="dashboard-form" onSubmit={addTask}>

        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button className="card-btn">
          Add Task
        </button>

      </form>

      <div className="data-list">

        {tasks.length === 0 ? (
          <p>No Tasks Yet</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="data-item">

              <div>
                <h3>{task.title}</h3>

                <p>{task.description}</p>

                <p>
                  Priority: {task.priority}
                </p>

                <p>
                  Status: {task.status}
                </p>
              </div>

              <button
                className="card-btn"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default Tasks;