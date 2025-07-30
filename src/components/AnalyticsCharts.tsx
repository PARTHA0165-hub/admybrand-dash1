"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const lineData = [
  { name: "Jan", value: 240 },
  { name: "Feb", value: 320 },
  { name: "Mar", value: 280 },
  { name: "Apr", value: 340 },
  { name: "May", value: 420 },
];

const barData = [
  { name: "Campaign A", clicks: 300 },
  { name: "Campaign B", clicks: 500 },
  { name: "Campaign C", clicks: 200 },
];

const pieData = [
  { name: "Instagram", value: 400 },
  { name: "Facebook", value: 300 },
  { name: "Google", value: 300 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

export default function AnalyticsCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Line Chart */}
      <div className="bg-card rounded-2xl p-4 shadow-md">
        <h2 className="text-lg font-semibold mb-4">📈 Monthly Impressions</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6366f1"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-card rounded-2xl p-4 shadow-md">
        <h2 className="text-lg font-semibold mb-4">📊 Campaign Clicks</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="clicks" fill="#22c55e" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-card rounded-2xl p-4 shadow-md md:col-span-2">
        <h2 className="text-lg font-semibold mb-4">🧩 Platform Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
