"use client";
import {
  Box,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  IconButton,
} from "@mui/material";
import { Visibility, Edit, Delete } from "@mui/icons-material";

const dummyAppointments = [
  {
    id: 1,
    name: "John Doe",
    date: "2025-08-06",
    time: "10:00 AM",
    department: "Physiotherapy",
    doctor: "Dr. John Smith",
    urgency: "Normal",
    status: "Completed",
  },
  {
    id: 2,
    name: "Jane Smith",
    date: "2025-08-07",
    time: "02:30 PM",
    department: "Orthopedics",
    doctor: "Dr. Sarah Lee",
    urgency: "High",
    status: "Pending",
  },
  {
    id: 3,
    name: "Mike Johnson",
    date: "2025-08-08",
    time: "09:15 AM",
    department: "Neurology",
    doctor: "Dr. David Brown",
    urgency: "Emergency",
    status: "Cancelled",
  },
];

export default function AppointmentsTable() {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        borderRadius: 3,
        background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
        mt: 4,
      }}
    >
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        All Appointments
      </Typography>

      <Box sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell><strong>Patient Name</strong></TableCell>
              <TableCell><strong>Date</strong></TableCell>
              <TableCell><strong>Time</strong></TableCell>
              <TableCell><strong>Department</strong></TableCell>
              <TableCell><strong>Doctor</strong></TableCell>
              <TableCell><strong>Urgency</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell align="center"><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {dummyAppointments.map((appointment) => (
              <TableRow key={appointment.id} hover>
                <TableCell>{appointment.name}</TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{appointment.department}</TableCell>
                <TableCell>{appointment.doctor}</TableCell>
                <TableCell>
                  <Chip
                    label={appointment.urgency}
                    color={
                      appointment.urgency === "Emergency"
                        ? "error"
                        : appointment.urgency === "High"
                        ? "warning"
                        : "primary"
                    }
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    label={appointment.status}
                    color={
                      appointment.status === "Completed"
                        ? "success"
                        : appointment.status === "Pending"
                        ? "warning"
                        : "error"
                    }
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">
                  <IconButton color="primary">
                    <Visibility />
                  </IconButton>
                  <IconButton color="secondary">
                    <Edit />
                  </IconButton>
                  <IconButton color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Paper>
  );
}
