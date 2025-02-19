import { useState } from "react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, Tooltip, Legend } from "recharts";

const data = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 30 },
  { name: "Mar", value: 50 },
  { name: "Apr", value: 20 },
];

const Overview = () => {
    const [chartType, setChartType] = useState("bar");

    return (
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-gradient-to-r from-purple-500 to-indigo-500 shadow-2xl col-span-1 md:col-span-2 text-white">
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold">🏡 Real Estate Dashboard</h2>
            <p className="text-lg">An elegant summary of key real estate metrics</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-2xl border border-gray-200">
          <div className="card-body">
            <h3 className="card-title text-xl font-semibold">📊 Property Sales Overview</h3>
            {chartType === "bar" && (
              <BarChart width={400} height={300} data={data} className="mx-auto">
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#6366F1" />
              </BarChart>
            )} 
            {chartType === "line" && (
              <LineChart width={400} height={300} data={data} className="mx-auto">
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#6366F1" strokeWidth={3} />
              </LineChart>
            )} 
            {chartType === "pie" && (
              <PieChart width={400} height={300} className="mx-auto">
                <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={80} fill="#6366F1" label />
                <Tooltip />
              </PieChart>
            )}
            <div className="flex gap-2 mt-4 justify-center">
              <button className="btn btn-primary btn-lg" onClick={() => setChartType("bar")}>Bar</button>
              <button className="btn btn-secondary btn-lg" onClick={() => setChartType("line")}>Line</button>
              <button className="btn btn-accent btn-lg" onClick={() => setChartType("pie")}>Pie</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-2xl border border-gray-200">
          <div className="card-body">
            <h3 className="card-title text-xl font-semibold">📈 Market Trends</h3>
            <LineChart width={400} height={300} data={data} className="mx-auto">
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#EC4899" strokeWidth={3} />
            </LineChart>
          </div>
        </div>
      </div>
    );
};

export default Overview;