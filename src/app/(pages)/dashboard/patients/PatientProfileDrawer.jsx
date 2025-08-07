"use client";
import {
  Drawer,
  Box,
  Typography,
  Tabs,
  Tab,
  Divider,
} from "@mui/material";
import { useState } from "react";

export default function PatientProfileDrawer({ open, onClose, patient }) {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  if (!patient) return null;

  return (
    <Drawer anchor="right" open={open} onClose={onClose} PaperProps={{ sx: { width: { xs: "100%", sm: 400 } } }}>
      <Box p={3} pt={12}>
        <Typography variant="h6" fontWeight="bold">
          {patient.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Age: {patient.age} | Gender: {patient.gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Department: {patient.department}
        </Typography>
      </Box>
      <Divider />

      <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth">
        <Tab label="Profile" />
        <Tab label="Appointments" />
        <Tab label="Medical History" />
        <Tab label="Billing" />
      </Tabs>

      <Box p={3} sx={{ overflowY: "auto", flex: 1 }}>
        {tabIndex === 0 && (
          <>
            <Typography variant="subtitle1">Contact:</Typography>
            <Typography>{patient.contact}</Typography>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>Address:</Typography>
            <Typography>{patient.address}</Typography>
          </>
        )}
        {tabIndex === 1 && <Typography>No appointments found.</Typography>}
        {tabIndex === 2 && <Typography>No medical history available.</Typography>}
        {tabIndex === 3 && (
          <>
            <Typography variant="subtitle1">Status:</Typography>
            <Typography>{patient.status}</Typography>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>Pending Bills:</Typography>
            <Typography>₹ 0</Typography>
          </>
        )}
      </Box>
    </Drawer>
  );
}
