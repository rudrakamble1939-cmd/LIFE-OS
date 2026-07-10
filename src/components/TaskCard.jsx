import "../styles/Components.css";


function TaskCard({ task }) {


  return (

    <div className="feature-card task-card">


      <div className="task-header">


        <h3>
          {task.title}
        </h3>


        <span className={`task-status ${task.status}`}>

          {task.status}

        </span>


      </div>



      <p>

        {task.description}

      </p>



      <div className="task-details">


        <span>

          Priority: {task.priority}

        </span>


        <span>

          {task.date}

        </span>


      </div>


    </div>

  );

}


export default TaskCard;