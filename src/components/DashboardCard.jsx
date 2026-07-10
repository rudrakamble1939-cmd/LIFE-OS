import "../styles/Dashboard.css";


function DashboardCard({ title, value, icon, description }) {


  return (

    <div className="dashboard-card">


      <div className="card-icon">

        {icon}

      </div>


      <h3>

        {title}

      </h3>



      <h2>

        {value}

      </h2>



      <p>

        {description}

      </p>


    </div>

  );

}


export default DashboardCard;