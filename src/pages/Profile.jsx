import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { useAuthContext } from "../context/AuthContext";
import "../styles/Dashboard.css";

function Profile() {
  const { user } = useAuthContext();

  const [profile, setProfile] = useState({
    fullName: "",
    phone: "",
  });

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  async function fetchProfile() {
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (data) {
      setProfile({
        fullName: data.full_name || "",
        phone: data.phone || "",
      });
    }
  }

  async function saveProfile(e) {
    e.preventDefault();

    const { error } = await supabase
      .from("profiles")
      .upsert({
        id: user.id,
        email: user.email,
        full_name: profile.fullName,
        phone: profile.phone,
      });

    if (!error) {
      alert("Profile Updated Successfully");
    }
  }

  return (
    <div className="dashboard-content">

      <h1>My Profile</h1>

      <form
        className="dashboard-form"
        onSubmit={saveProfile}
      >

        <input
          type="text"
          placeholder="Full Name"
          value={profile.fullName}
          onChange={(e) =>
            setProfile({
              ...profile,
              fullName: e.target.value,
            })
          }
        />

        <input
          type="email"
          value={user?.email || ""}
          disabled
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={profile.phone}
          onChange={(e) =>
            setProfile({
              ...profile,
              phone: e.target.value,
            })
          }
        />

        <button className="card-btn">
          Save Profile
        </button>

      </form>

    </div>
  );
}

export default Profile;