import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Tooltip } from "@mui/material";
import { CheckCircle, AccessTime, Cancel } from "@mui/icons-material";

const appointments = [
  { name: "John Doe", date: "2025-08-06", status: "Completed" },
  { name: "Jane Smith", date: "2025-08-07", status: "Pending" },
  { name: "Mike Johnson", date: "2025-08-08", status: "Cancelled" },
];

export default function RecentAppointmentsTable() {
  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Typography variant="h6" sx={{ p: 2 }}>Recent Appointments</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Patient</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <Tooltip title={row.status}>
                  <Chip
                    icon={row.status === "Completed" ? <CheckCircle /> : row.status === "Pending" ? <AccessTime /> : <Cancel />}
                    label={row.status}
                    color={row.status === "Completed" ? "success" : row.status === "Pending" ? "warning" : "error"}
                    size="small"
                  />
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
