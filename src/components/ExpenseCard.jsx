import "../styles/Components.css";


function ExpenseCard({ expense }) {


  return (

    <div className="feature-card">


      <h3>
        {expense.category}
      </h3>


      <p>
        ₹ {expense.amount}
      </p>


      <small>
        {expense.date}
      </small>


    </div>

  );

}


export default ExpenseCard;