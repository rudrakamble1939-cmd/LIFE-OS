import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { useAuthContext } from "../context/AuthContext";
import "../styles/Dashboard.css";

function Expenses() {
  const { user } = useAuthContext();

  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (user) {
      fetchExpenses();
    }
  }, [user]);

  async function fetchExpenses() {
    const { data, error } = await supabase
      .from("expenses")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (!error) {
      setExpenses(data || []);

      const sum =
        data?.reduce(
          (acc, item) => acc + Number(item.amount),
          0
        ) || 0;

      setTotal(sum);
    }
  }

  async function addExpense(e) {
    e.preventDefault();

    if (!category || !amount) return;

    const { error } = await supabase
      .from("expenses")
      .insert([
        {
          user_id: user.id,
          category,
          amount: Number(amount),
          date: new Date().toLocaleDateString(),
        },
      ]);

    if (!error) {
      setCategory("");
      setAmount("");
      fetchExpenses();
    }
  }

  async function deleteExpense(id) {
    await supabase
      .from("expenses")
      .delete()
      .eq("id", id);

    fetchExpenses();
  }

  return (
    <div className="dashboard-content">

      <h1>Expenses</h1>

      <form
        className="dashboard-form"
        onSubmit={addExpense}
      >

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />

        <button className="card-btn">
          Add Expense
        </button>

      </form>

      <div
        style={{
          marginBottom: "20px",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#22c55e",
        }}
      >
        Total Expenses : ₹{total}
      </div>

      <div className="data-list">

        {expenses.length === 0 ? (
          <p>No Expenses Found</p>
        ) : (
          expenses.map((expense) => (
            <div
              key={expense.id}
              className="data-item"
            >

              <div>

                <h3>{expense.category}</h3>

                <p>
                  ₹{expense.amount}
                </p>

                <p>
                  {expense.date}
                </p>

              </div>

              <button
                className="card-btn"
                onClick={() =>
                  deleteExpense(expense.id)
                }
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

export default Expenses;