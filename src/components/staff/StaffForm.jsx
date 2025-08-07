"use client";
import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  MenuItem
} from "@mui/material";

export default function StaffForm({ onSubmit, initialData, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    role: "Select Role",
    department: "Select Department",
    contact: "",
    joiningDate: "",
    salary: "",
    status: "Select Status",
  });

  const departments = [
    "Select Department",
    "Pathology",
    "Radiology",
    "Front Desk",
    "Orthopedics",
    "Cardiology",
  ];

  const roles = [
    "Select Role",
    "Doctor",
    "Lab Technician",
    "Receptionist",
    "Nurse",
    "Admin",
  ];

  const statuses = ["Select Status", "Active", "On Leave", "Resigned"];

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        role: initialData.role || "Select Role",
        department: initialData.department || "Select Department",
        status: initialData.status || "Select Status",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      role: "Select Role",
      department: "Select Department",
      contact: "",
      joiningDate: "",
      salary: "",
      status: "Select Status",
    });
  };

  return (
    <Card
      sx={{
        boxShadow: 4,
        borderRadius: 4,
        background: "linear-gradient(135deg, #f0f9ff, #ffffff)",
        mb: 3,
      }}
    >
      <CardContent>
        <Typography variant="h5" fontWeight="bold" color="primary" mb={3}>
          {initialData ? "Edit Staff" : "Add New Staff"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Name */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Role */}
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                {roles.map((role, i) => (
                  <MenuItem
                    key={i}
                    value={role}
                    disabled={i === 0}
                    sx={{ color: i === 0 ? "gray" : "inherit" }}
                  >
                    {role}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Department */}
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                {departments.map((dept, i) => (
                  <MenuItem
                    key={i}
                    value={dept}
                    disabled={i === 0}
                    sx={{ color: i === 0 ? "gray" : "inherit" }}
                  >
                    {dept}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Contact */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Contact Number"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Joining Date */}
            <Grid item xs={12} sm={6}>
              <TextField
                type="date"
                fullWidth
                label="Joining Date"
                name="joiningDate"
                InputLabelProps={{ shrink: true }}
                value={formData.joiningDate}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Salary */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Salary"
                name="salary"
                type="number"
                value={formData.salary}
                onChange={handleChange}
              />
            </Grid>

            {/* Status */}
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                label="Status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                {statuses.map((status, i) => (
                  <MenuItem
                    key={i}
                    value={status}
                    disabled={i === 0}
                    sx={{ color: i === 0 ? "gray" : "inherit" }}
                  >
                    {status}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Buttons */}
            <Grid
              item
              xs={12}
              sx={{ display: "flex", gap: 2, justifyContent: "center" }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{
                  background: "linear-gradient(90deg, #0288d1, #01579b)",
                  px: 4,
                  py: 1.2,
                  borderRadius: 3,
                }}
              >
                {initialData ? "Update Staff" : "Add Staff"}
              </Button>
              {onCancel && (
                <Button variant="outlined" color="error" onClick={onCancel}>
                  Cancel
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}
