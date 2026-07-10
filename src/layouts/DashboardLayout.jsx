import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";


function DashboardLayout({ children }) {


  return (

    <div className="dashboard-layout">


      <Sidebar />


      <main className="dashboard-content">

        {children}

      </main>


    </div>

  );

}


export default DashboardLayout;