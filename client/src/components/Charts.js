import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Generate dynamic colors
const generateColors = (count) =>
  Array.from({ length: count }, (_, i) =>
    `hsl(${(i * 360) / count}, 70%, 60%)`
  );

export default function Charts({ transactions, filter }) {
  // Filter based on selected type
  const filteredTxs =
    filter === "all"
      ? transactions
      : transactions.filter((tx) => tx.type === filter);

  // Map each transaction to pie data
  const pieData = filteredTxs.map((tx) => ({
    name: tx.title || tx.category || "Untitled",
    value: Number(tx.amount),
  }));

  const colors = generateColors(pieData.length);

  return (
    <div style={{ marginTop: "40px", height: 350 }}>
      <h3>{filter === "all" ? "All Transactions" : `All ${filter}s`} (Pie Chart)</h3>
      {pieData.length === 0 ? (
        <p>No transactions to display</p>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={110}
              label
            >
              {pieData.map((_, index) => (
                <Cell key={index} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
