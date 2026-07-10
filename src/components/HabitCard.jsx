import "../styles/Components.css";


function HabitCard({ habit }) {


  return (

    <div className="feature-card">


      <h3>
        {habit.name}
      </h3>


      <p>
        Streak: 🔥 {habit.streak} Days
      </p>


      <p>
        Completion: {habit.progress}%
      </p>



      <div
        style={{
          width: "100%",
          height: "8px",
          background: "#e5e7eb",
          borderRadius: "10px",
          marginTop: "15px"
        }}
      >


        <div
          style={{
            width: `${habit.progress}%`,
            height: "100%",
            borderRadius: "10px",
            background: "#2563eb"
          }}
        />


      </div>


    </div>

  );

}


export default HabitCard;