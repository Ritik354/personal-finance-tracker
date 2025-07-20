import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

// Modern color palette
const COLORS = [
  "#6366f1",
  "#8b5cf6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#06b6d4",
  "#84cc16",
  "#f97316",
  "#ec4899",
  "#14b8a6",
  "#f43f5e",
  "#8b5cf6",
];

export default function Charts({ transactions, filter }) {
  // Filter based on selected type
  const filteredTxs =
    filter === "all"
      ? transactions
      : transactions.filter((tx) => tx.type === filter);

  // Group by category for better visualization
  const categoryData = filteredTxs.reduce((acc, tx) => {
    const category = tx.category || "Other";
    if (!acc[category]) {
      acc[category] = { name: category, value: 0, count: 0 };
    }
    acc[category].value += Number(tx.amount);
    acc[category].count += 1;
    return acc;
  }, {});

  const pieData = Object.values(categoryData);

  // Monthly data for bar chart
  const monthlyData = filteredTxs.reduce((acc, tx) => {
    const date = new Date(tx.date || tx.createdAt);
    const monthKey = date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });

    if (!acc[monthKey]) {
      acc[monthKey] = { month: monthKey, income: 0, expense: 0 };
    }

    if (tx.type === "income") {
      acc[monthKey].income += Number(tx.amount);
    } else {
      acc[monthKey].expense += Number(tx.amount);
    }

    return acc;
  }, {});

  const barData = Object.values(monthlyData).slice(-6); // Last 6 months

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={styles.tooltip}>
          <p style={styles.tooltipLabel}>{label}</p>
          {payload.map((entry, index) => (
            <p
              key={index}
              style={{ ...styles.tooltipValue, color: entry.color }}
            >
              {entry.name}: ₹{entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.title}>
          📊{" "}
          {filter === "all"
            ? "Financial Overview"
            : `${filter.charAt(0).toUpperCase() + filter.slice(1)} Analysis`}
        </h3>
      </div>

      {filteredTxs.length === 0 ? (
        <div style={styles.emptyState}>
          <span style={styles.emptyIcon}>📈</span>
          <p style={styles.emptyText}>No data to visualize</p>
          <p style={styles.emptySubtext}>
            Add some transactions to see beautiful charts!
          </p>
        </div>
      ) : (
        <div style={styles.chartsGrid}>
          {/* Category Breakdown - Pie Chart */}
          <div style={styles.chartCard}>
            <h4 style={styles.chartTitle}>Category Breakdown</h4>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={40}
                  paddingAngle={2}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {pieData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Monthly Trends - Bar Chart */}
          {barData.length > 0 && (
            <div style={styles.chartCard}>
              <h4 style={styles.chartTitle}>Monthly Trends</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={barData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 12, fill: "#6b7280" }}
                    axisLine={{ stroke: "#e5e7eb" }}
                  />
                  <YAxis
                    tick={{ fontSize: 12, fill: "#6b7280" }}
                    axisLine={{ stroke: "#e5e7eb" }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="income" fill="#10b981" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="expense" fill="#ef4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      )}

      {/* Quick Stats */}
      {pieData.length > 0 && (
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <span style={styles.statIcon}>📝</span>
            <div>
              <p style={styles.statValue}>{filteredTxs.length}</p>
              <p style={styles.statLabel}>Total Transactions</p>
            </div>
          </div>
          <div style={styles.statCard}>
            <span style={styles.statIcon}>🏷️</span>
            <div>
              <p style={styles.statValue}>{pieData.length}</p>
              <p style={styles.statLabel}>Categories</p>
            </div>
          </div>
          <div style={styles.statCard}>
            <span style={styles.statIcon}>💰</span>
            <div>
              <p style={styles.statValue}>
                ₹
                {Math.round(
                  filteredTxs.reduce((sum, tx) => sum + Number(tx.amount), 0) /
                    filteredTxs.length
                ).toLocaleString()}
              </p>
              <p style={styles.statLabel}>Average Amount</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
  },
  header: {
    marginBottom: "24px",
    textAlign: "center",
  },
  title: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#1f2937",
    margin: 0,
  },
  emptyState: {
    textAlign: "center",
    padding: "40px 20px",
    background: "#f9fafb",
    borderRadius: "16px",
    border: "2px dashed #d1d5db",
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
  chartsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: "24px",
    marginBottom: "24px",
  },
  chartCard: {
    background: "white",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    border: "1px solid #f3f4f6",
  },
  chartTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#374151",
    marginBottom: "16px",
    textAlign: "center",
  },
  tooltip: {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "12px 16px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  },
  tooltipLabel: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "4px",
  },
  tooltipValue: {
    fontSize: "13px",
    fontWeight: "500",
    margin: "2px 0",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "16px",
    marginTop: "24px",
  },
  statCard: {
    background: "linear-gradient(135deg, #f8fafc, #f1f5f9)",
    borderRadius: "12px",
    padding: "16px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    border: "1px solid #e2e8f0",
  },
  statIcon: {
    fontSize: "24px",
  },
  statValue: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#1f2937",
    margin: "0 0 4px 0",
  },
  statLabel: {
    fontSize: "12px",
    color: "#6b7280",
    margin: 0,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
};
