import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  getTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} from "../utils/api.transaction";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("all");
  const [form, setForm] = useState({
    title: "",
    amount: "",
    type: "income",
    category: "",
    note: "",
    date: "", // can be optional
  });

  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", amount: "", type: "",category: "",
  note: "",
  date: "", });

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTransactions(user.token);
        setTransactions(data);
      } catch (err) {
        alert("Failed to fetch transactions");
      }
    };
    if (user) fetchData();
  }, [user]);

  if (!user) return null;

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const newTx = await createTransaction(form, user.token);
    setTransactions([...transactions, newTx]);

    // ✅ Reset form after successful submission
    setForm({
      title: "",
      amount: "",
      type: "expense",
      category: "",
      note: "",
      date: "",
    });
  } catch (err) {
    alert("Failed to add transaction");
  }
};


  const handleEditClick = (tx) => {
    setEditId(tx._id);
    setEditForm({ title: tx.title, amount: tx.amount, type: tx.type });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (id) => {
    try {
      const updated = await updateTransaction(id, editForm, user.token);
      setTransactions(transactions.map((tx) => (tx._id === id ? updated : tx)));
      setEditId(null);
    } catch (err) {
      alert("Update failed");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await deleteTransaction(id, user.token);
      setTransactions(transactions.filter((tx) => tx._id !== id));
    } catch (err) {
      alert("Delete failed");
    }
  };

  const filteredTxs = transactions.filter((tx) =>
    filter === "all" ? true : tx.type === filter
  );

  const incomeTotal = transactions
    .filter((tx) => tx.type === "income")
    .reduce((sum, tx) => sum + Number(tx.amount), 0);

  const expenseTotal = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((sum, tx) => sum + Number(tx.amount), 0);

  const balance = incomeTotal - expenseTotal;

  return (
    <div className="wrapper" style={styles.wrapper}>
      <header style={styles.header}>
        <h2>Welcome, {user.name} 👋</h2>
        <button onClick={logout} style={styles.logoutButton}>
          Logout
        </button>
      </header>

      <div style={styles.summary}>
        <h3>Summary</h3>
        <p>
          <strong>Total Income:</strong> ₹{incomeTotal}
        </p>
        <p>
          <strong>Total Expense:</strong> ₹{expenseTotal}
        </p>
        <p>
          <strong>Net Balance:</strong> ₹{balance}
        </p>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
  <input
    name="amount"
    type="number"
    placeholder="Amount"
    value={form.amount}
    onChange={(e) => setForm({ ...form, amount: e.target.value })}
    required
  />
  <input
  name="title"
  placeholder="Title"
  value={form.title}
  onChange={(e) => setForm({ ...form, title: e.target.value })}
  required
/>  
  <select
    name="type"
    value={form.type}
    onChange={(e) => setForm({ ...form, type: e.target.value })}
  >
    <option value="expense">Expense</option>
    <option value="income">Income</option>
  </select>

  <input
    name="category"
    placeholder="Category"
    value={form.category}
    onChange={(e) => setForm({ ...form, category: e.target.value })}
    required
  />

  <input
    name="note"
    placeholder="Note (optional)"
    value={form.note}
    onChange={(e) => setForm({ ...form, note: e.target.value })}
  />

  <input
    name="date"
    type="date"
    value={form.date}
    onChange={(e) => setForm({ ...form, date: e.target.value })}
  />

  <button type="submit">Add</button>
</form>


      <div style={styles.filters}>
        <label>Filter:</label>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <ul style={styles.list}>
        {filteredTxs.map((tx) => (
          <li key={tx._id} style={styles[tx.type]}>
            {editId === tx._id ? (
              <>
                <input
                  name="title"
                  value={editForm.title}
                  onChange={handleEditChange}
                />
                <input
                  name="amount"
                  type="number"
                  value={editForm.amount}
                  onChange={handleEditChange}
                />
                <select
                  name="type"
                  value={editForm.type}
                  onChange={handleEditChange}
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
                <button onClick={() => handleUpdate(tx._id)}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <strong>{tx.title}</strong> — ₹{tx.amount} ({tx.type})
                <div style={{ float: "right" }}>
                  <button onClick={() => handleEditClick(tx)}>Edit</button>
                  <button onClick={() => handleDelete(tx._id)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  wrapper: {
    maxWidth: "600px",
    margin: "40px auto",
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  logoutButton: {
    backgroundColor: "rgb(224, 83, 31)",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  summary: {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  filters: {
    marginBottom: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  income: {
    backgroundColor: "#e6ffe6",
    padding: "10px",
    margin: "6px 0",
    borderRadius: "6px",
  },
  expense: {
    backgroundColor: "#ffe6e6",
    padding: "10px",
    margin: "6px 0",
    borderRadius: "6px",
  },
};
