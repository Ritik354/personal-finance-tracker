import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Charts from "../components/Charts";
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
  const [showAddForm, setShowAddForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    amount: "",
    type: "expense",
    category: "",
    note: "",
    date: "",
  });

  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    amount: "",
    type: "",
    category: "",
    note: "",
    date: "",
  });

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

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const newTx = await createTransaction(form, user.token);
      setTransactions([...transactions, newTx]);
      setForm({
        title: "",
        amount: "",
        type: "expense",
        category: "",
        note: "",
        date: "",
      });
      setShowAddForm(false);
    } catch (err) {
      alert("Failed to add transaction");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div>
            <h1 style={styles.welcomeTitle}>Welcome back, {user.name}! 👋</h1>
            <p style={styles.welcomeSubtitle}>Here's your financial overview</p>
          </div>
          <button onClick={logout} style={styles.logoutButton}>
            <span>🚪</span>
            Logout
          </button>
        </div>
      </header>

      {/* Summary Cards */}
      <div style={styles.summaryGrid}>
        <div style={{ ...styles.summaryCard, ...styles.incomeCard }}>
          <div style={styles.cardIcon}>💰</div>
          <div style={styles.cardContent}>
            <h3 style={styles.cardTitle}>Total Income</h3>
            <p style={styles.cardAmount}>₹{incomeTotal.toLocaleString()}</p>
          </div>
        </div>

        <div style={{ ...styles.summaryCard, ...styles.expenseCard }}>
          <div style={styles.cardIcon}>💸</div>
          <div style={styles.cardContent}>
            <h3 style={styles.cardTitle}>Total Expenses</h3>
            <p style={styles.cardAmount}>₹{expenseTotal.toLocaleString()}</p>
          </div>
        </div>

        <div style={{ ...styles.summaryCard, ...styles.balanceCard }}>
          <div style={styles.cardIcon}>{balance >= 0 ? "📈" : "📉"}</div>
          <div style={styles.cardContent}>
            <h3 style={styles.cardTitle}>Net Balance</h3>
            <p
              style={{
                ...styles.cardAmount,
                color: balance >= 0 ? "#10b981" : "#ef4444",
              }}
            >
              ₹{balance.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div style={styles.chartsSection}>
        <Charts transactions={transactions} filter={filter} />
      </div>

      {/* Action Bar */}
      <div style={styles.actionBar}>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          style={styles.addButton}
        >
          <span>{showAddForm ? "❌" : "➕"}</span>
          {showAddForm ? "Cancel" : "Add Transaction"}
        </button>

        <div style={styles.filterContainer}>
          <label style={styles.filterLabel}>Filter:</label>
          <select
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            style={styles.filterSelect}
          >
            <option value="all">All Transactions</option>
            <option value="income">Income Only</option>
            <option value="expense">Expenses Only</option>
          </select>
        </div>
      </div>

      {/* Add Transaction Form */}
      {showAddForm && (
        <div style={styles.formCard}>
          <h3 style={styles.formTitle}>Add New Transaction</h3>
          <form onSubmit={handleSubmitForm} style={styles.form}>
            <div style={styles.formRow}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Title</label>
                <input
                  name="title"
                  placeholder="Transaction title"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Amount</label>
                <input
                  name="amount"
                  type="number"
                  placeholder="0.00"
                  value={form.amount}
                  onChange={(e) => setForm({ ...form, amount: e.target.value })}
                  style={styles.input}
                  required
                />
              </div>
            </div>

            <div style={styles.formRow}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Type</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  style={styles.select}
                >
                  <option value="expense">💸 Expense</option>
                  <option value="income">💰 Income</option>
                </select>
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Category</label>
                <input
                  name="category"
                  placeholder="e.g., Food, Transport"
                  value={form.category}
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                  style={styles.input}
                  required
                />
              </div>
            </div>

            <div style={styles.formRow}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Date</label>
                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  style={styles.input}
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Note (Optional)</label>
                <input
                  name="note"
                  placeholder="Additional notes"
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  style={styles.input}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                ...styles.submitButton,
                opacity: loading ? 0.7 : 1,
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? (
                <>
                  <span>⏳</span>
                  Adding...
                </>
              ) : (
                <>
                  <span>✅</span>
                  Add Transaction
                </>
              )}
            </button>
          </form>
        </div>
      )}

      {/* Transactions List */}
      <div style={styles.transactionsSection}>
        <h3 style={styles.sectionTitle}>
          Recent Transactions ({filteredTxs.length})
        </h3>

        {filteredTxs.length === 0 ? (
          <div style={styles.emptyState}>
            <span style={styles.emptyIcon}>📝</span>
            <p style={styles.emptyText}>No transactions found</p>
            <p style={styles.emptySubtext}>
              Add your first transaction to get started!
            </p>
          </div>
        ) : (
          <div style={styles.transactionsList}>
            {filteredTxs.map((tx) => (
              <div
                key={tx._id}
                style={{
                  ...styles.transactionCard,
                  borderLeft: `4px solid ${
                    tx.type === "income" ? "#10b981" : "#ef4444"
                  }`,
                }}
              >
                {editId === tx._id ? (
                  <div style={styles.editForm}>
                    <div style={styles.editRow}>
                      <input
                        name="title"
                        value={editForm.title}
                        onChange={handleEditChange}
                        style={styles.editInput}
                        placeholder="Title"
                      />
                      <input
                        name="amount"
                        type="number"
                        value={editForm.amount}
                        onChange={handleEditChange}
                        style={styles.editInput}
                        placeholder="Amount"
                      />
                      <select
                        name="type"
                        value={editForm.type}
                        onChange={handleEditChange}
                        style={styles.editSelect}
                      >
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                      </select>
                    </div>
                    <div style={styles.editActions}>
                      <button
                        onClick={() => handleUpdate(tx._id)}
                        style={styles.saveButton}
                      >
                        ✅ Save
                      </button>
                      <button
                        onClick={() => setEditId(null)}
                        style={styles.cancelButton}
                      >
                        ❌ Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div style={styles.transactionMain}>
                      <div style={styles.transactionIcon}>
                        {tx.type === "income" ? "💰" : "💸"}
                      </div>
                      <div style={styles.transactionDetails}>
                        <h4 style={styles.transactionTitle}>{tx.title}</h4>
                        <p style={styles.transactionCategory}>{tx.category}</p>
                        {tx.note && (
                          <p style={styles.transactionNote}>{tx.note}</p>
                        )}
                        <p style={styles.transactionDate}>
                          {new Date(
                            tx.date || tx.createdAt
                          ).toLocaleDateString()}
                        </p>
                      </div>
                      <div style={styles.transactionAmount}>
                        <span
                          style={{
                            ...styles.amountText,
                            color: tx.type === "income" ? "#10b981" : "#ef4444",
                          }}
                        >
                          {tx.type === "income" ? "+" : "-"}₹
                          {Number(tx.amount).toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <div style={styles.transactionActions}>
                      <button
                        onClick={() => handleEditClick(tx)}
                        style={styles.editButton}
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleDelete(tx._id)}
                        style={styles.deleteButton}
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "20px",
  },
  header: {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(20px)",
    borderRadius: "20px",
    padding: "24px",
    marginBottom: "24px",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
  },
  headerContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  welcomeTitle: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#1f2937",
    margin: "0 0 8px 0",
  },
  welcomeSubtitle: {
    fontSize: "16px",
    color: "#6b7280",
    margin: 0,
  },
  logoutButton: {
    background: "linear-gradient(135deg, #ef4444, #dc2626)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    padding: "12px 20px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.3s ease",
  },
  summaryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    marginBottom: "32px",
  },
  summaryCard: {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(20px)",
    borderRadius: "20px",
    padding: "24px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  },
  incomeCard: {
    borderLeft: "4px solid #10b981",
  },
  expenseCard: {
    borderLeft: "4px solid #ef4444",
  },
  balanceCard: {
    borderLeft: "4px solid #6366f1",
  },
  cardIcon: {
    fontSize: "32px",
    width: "60px",
    height: "60px",
    background: "linear-gradient(135deg, #f3f4f6, #e5e7eb)",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#6b7280",
    margin: "0 0 8px 0",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  cardAmount: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#1f2937",
    margin: 0,
  },
  chartsSection: {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(20px)",
    borderRadius: "20px",
    padding: "24px",
    marginBottom: "24px",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
  },
  actionBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
    gap: "16px",
    flexWrap: "wrap",
  },
  addButton: {
    background: "linear-gradient(135deg, #10b981, #059669)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    padding: "14px 24px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.3s ease",
  },
  filterContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  filterLabel: {
    fontSize: "14px",
    fontWeight: "600",
    color: "white",
  },
  filterSelect: {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    background: "rgba(255, 255, 255, 0.9)",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
  },
  formCard: {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(20px)",
    borderRadius: "20px",
    padding: "32px",
    marginBottom: "24px",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
  },
  formTitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "24px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  formRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#374151",
  },
  input: {
    padding: "14px 16px",
    borderRadius: "12px",
    border: "2px solid #e5e7eb",
    fontSize: "16px",
    transition: "all 0.3s ease",
    background: "white",
  },
  select: {
    padding: "14px 16px",
    borderRadius: "12px",
    border: "2px solid #e5e7eb",
    fontSize: "16px",
    background: "white",
    cursor: "pointer",
  },
  submitButton: {
    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    padding: "16px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    marginTop: "8px",
    transition: "all 0.3s ease",
  },
  transactionsSection: {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(20px)",
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "20px",
  },
  emptyState: {
    textAlign: "center",
    padding: "40px 20px",
  },
  emptyIcon: {
    fontSize: "48px",
    marginBottom: "16px",
    display: "block",
  },
  emptyText: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#374151",
    marginBottom: "8px",
  },
  emptySubtext: {
    fontSize: "14px",
    color: "#6b7280",
  },
  transactionsList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  transactionCard: {
    background: "white",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    transition: "all 0.3s ease",
  },
  transactionMain: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "12px",
  },
  transactionIcon: {
    fontSize: "24px",
    width: "48px",
    height: "48px",
    background: "#f9fafb",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#1f2937",
    margin: "0 0 4px 0",
  },
  transactionCategory: {
    fontSize: "14px",
    color: "#6b7280",
    margin: "0 0 4px 0",
  },
  transactionNote: {
    fontSize: "12px",
    color: "#9ca3af",
    margin: "0 0 4px 0",
    fontStyle: "italic",
  },
  transactionDate: {
    fontSize: "12px",
    color: "#9ca3af",
    margin: 0,
  },
  transactionAmount: {
    textAlign: "right",
  },
  amountText: {
    fontSize: "18px",
    fontWeight: "700",
  },
  transactionActions: {
    display: "flex",
    gap: "8px",
    justifyContent: "flex-end",
  },
  editButton: {
    background: "#f59e0b",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "8px 12px",
    fontSize: "12px",
    fontWeight: "600",
    cursor: "pointer",
  },
  deleteButton: {
    background: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "8px 12px",
    fontSize: "12px",
    fontWeight: "600",
    cursor: "pointer",
  },
  editForm: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  editRow: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  editInput: {
    flex: 1,
    minWidth: "120px",
    padding: "8px 12px",
    borderRadius: "8px",
    border: "2px solid #e5e7eb",
    fontSize: "14px",
  },
  editSelect: {
    flex: 1,
    minWidth: "120px",
    padding: "8px 12px",
    borderRadius: "8px",
    border: "2px solid #e5e7eb",
    fontSize: "14px",
    background: "white",
  },
  editActions: {
    display: "flex",
    gap: "8px",
    justifyContent: "flex-end",
  },
  saveButton: {
    background: "#10b981",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "8px 16px",
    fontSize: "12px",
    fontWeight: "600",
    cursor: "pointer",
  },
  cancelButton: {
    background: "#6b7280",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "8px 16px",
    fontSize: "12px",
    fontWeight: "600",
    cursor: "pointer",
  },
};
