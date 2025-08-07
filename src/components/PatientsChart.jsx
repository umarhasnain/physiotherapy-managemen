"use client";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function PatientsChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Patients",
        data: [1200, 2212, 1800, 2400, 2200, 1900, 2100],
        fill: true,
        backgroundColor: "rgba(108, 99, 255, 0.2)",
        borderColor: "#6C63FF",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h3 className="font-bold mb-4">Patients (7 Days)</h3>
      <Line data={data} />
    </div>
  );
}
