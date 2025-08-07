"use client";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Grid,
} from "@mui/material";
import { useState, useEffect } from "react";

export default function PatientForm({ open, onClose, onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    age: "",
    gender: "Male",
    department: "General",
    contact: "",
    address: "",
    status: "Active",
  });

  const genders = ["Male", "Female", "Other"];
  const departments = ["General", "Cardiology", "Orthopedics", "Neurology"];
  const statuses = ["Active", "Discharged", "Pending"];

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        id: null,
        name: "",
        age: "",
        gender: "Male",
        department: "General",
        contact: "",
        address: "",
        status: "Active",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{initialData ? "Edit Patient" : "Add Patient"}</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <TextField fullWidth label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Age" name="age" type="number" value={formData.age} onChange={handleChange} required />
          </Grid>
          <Grid item xs={6}>
            <TextField select fullWidth label="Gender" name="gender" value={formData.gender} onChange={handleChange}>
              {genders.map((g) => (
                <MenuItem key={g} value={g}>{g}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField select fullWidth label="Department" name="department" value={formData.department} onChange={handleChange}>
              {departments.map((dept) => (
                <MenuItem key={dept} value={dept}>{dept}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Contact Number" name="contact" value={formData.contact} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Address" name="address" value={formData.address} onChange={handleChange} multiline rows={2} />
          </Grid>
          <Grid item xs={12}>
            <TextField select fullWidth label="Status" name="status" value={formData.status} onChange={handleChange}>
              {statuses.map((status) => (
                <MenuItem key={status} value={status}>{status}</MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined" color="error">Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" sx={{ background: "linear-gradient(90deg,#0288d1,#01579b)" }}>
          {initialData ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
