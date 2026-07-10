import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { useAuthContext } from "../context/AuthContext";
import "../styles/Dashboard.css";

function Notes() {
  const { user } = useAuthContext();

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (user) {
      fetchNotes();
    }
  }, [user]);

  async function fetchNotes() {
    const { data, error } = await supabase
      .from("notes")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (!error) {
      setNotes(data || []);
    }
  }

  async function addNote(e) {
    e.preventDefault();

    if (!title || !content) return;

    const { error } = await supabase.from("notes").insert([
      {
        user_id: user.id,
        title,
        content,
      },
    ]);

    if (!error) {
      setTitle("");
      setContent("");
      fetchNotes();
    }
  }

  async function deleteNote(id) {
    await supabase
      .from("notes")
      .delete()
      .eq("id", id);

    fetchNotes();
  }

  return (
    <div className="dashboard-content">

      <h1>Notes</h1>

      <form className="dashboard-form" onSubmit={addNote}>

        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write your note..."
          rows="5"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="card-btn">
          Save Note
        </button>

      </form>

      <div className="data-list">

        {notes.length === 0 ? (
          <p>No Notes Found</p>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              className="data-item"
            >
              <div>

                <h3>{note.title}</h3>

                <p>{note.content}</p>

              </div>

              <button
                className="card-btn"
                onClick={() => deleteNote(note.id)}
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

export default Notes;