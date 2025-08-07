import { Stack, Button } from "@mui/material";
import { PersonAdd, EventAvailable, Assessment } from "@mui/icons-material";

export default function QuickActions() {
  return (
    <Stack
      direction="row"
      spacing={4}
      sx={{
        mt: 4,
        m:3,
        gap: 2,
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Button variant="contained" startIcon={<PersonAdd />} color="primary">
        Add Patient
      </Button>
      <Button variant="contained" startIcon={<EventAvailable />} color="success">
        Schedule Session
      </Button>
      <Button variant="contained" startIcon={<Assessment />} color="secondary">
        Generate Report
      </Button>
    </Stack>
  );
}
