import { Grid, Paper, Typography, Box } from "@mui/material";
import { People, Event, Person, AttachMoney } from "@mui/icons-material";

const stats = [
  { title: "Total Patients", value: "120", icon: <People sx={{ fontSize: { xs: 40, sm: 50 } }} color="primary" />, bg: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)" },
  { title: "Appointments", value: "15", icon: <Event sx={{ fontSize: { xs: 40, sm: 50 }, color: "#4caf50" }} />, bg: "linear-gradient(135deg, #a8ff78 0%, #78ffd6 100%)" },
  { title: "Therapists", value: "8", icon: <Person sx={{ fontSize: { xs: 40, sm: 50 }, color: "#ff9800" }} />, bg: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)" },
  { title: "Earnings", value: "$5,200", icon: <AttachMoney sx={{ fontSize: { xs: 40, sm: 50 }, color: "#f44336" }} />, bg: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)" },
];

export default function StatsCardsSection() {
  return (
    <Grid container spacing={3}>
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper
            elevation={4}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              height: { xs: 120, sm: 140, md: 160 }, // equal height for all cards
              background: stat.bg,
              color: "white",
              borderRadius: 3,
              textAlign: "center",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              },
            }}
          >
            {stat.icon}
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
              >
                {stat.title}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.7rem" },
                }}
              >
                {stat.value}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
