import { Grid, Paper, Typography } from "@mui/material";
import { Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend);

export default function ChartsSection() {
  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [{
      label: "Appointments",
      data: [5, 9, 7, 11, 6],
      borderColor: "#3f8efc",
      backgroundColor: "rgba(63,142,252,0.2)",
      tension: 0.4
    }]
  };

  const pieData = {
    labels: ["Male", "Female"],
    datasets: [{
      data: [60, 40],
      backgroundColor: ["#3f8efc", "#f44336"]
    }]
  };

  return (
    <Grid container spacing={3} sx={{ mt: 3 }}>
      <Grid item xs={12} md={8}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Appointments Trend</Typography>
          <Line data={lineData} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>Patient Demographics</Typography>
          <Pie data={pieData} />
        </Paper>
      </Grid>
    </Grid>
  );
}
