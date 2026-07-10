import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";
import "../styles/Auth.css";

function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");


  const handleLogin = async (e)=>{

    e.preventDefault();

    setError("");
    setLoading(true);


    const { error } = await supabase.auth.signInWithPassword({

      email,
      password,

    });


    setLoading(false);


    if(error){

      setError(error.message);
      return;

    }


    navigate("/dashboard");

  };


  return (

    <div className="auth-page">


      <div className="auth-card">


        <h1>
          Welcome Back 👋
        </h1>


        <p>
          Login to continue using LifeOS
        </p>



        <form onSubmit={handleLogin}>


          <input

            className="auth-input"

            type="email"

            placeholder="Email Address"

            value={email}

            onChange={(e)=>setEmail(e.target.value)}

            required

          />



          <input

            className="auth-input"

            type="password"

            placeholder="Password"

            value={password}

            onChange={(e)=>setPassword(e.target.value)}

            required

          />



          {
            error &&

            <div className="auth-error">

              {error}

            </div>

          }




          <button

            className="auth-btn"

            type="submit"

            disabled={loading}

          >

            {
              loading
              ?
              "Logging In..."
              :
              "Login"
            }


          </button>



        </form>




        <div className="auth-link">


          Don't have an account?{" "}


          <Link to="/signup">

            Sign Up

          </Link>



        </div>



      </div>



    </div>

  );

}


export default Login;