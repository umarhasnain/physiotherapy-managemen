"use client";
import { useState, useEffect } from "react";
import {
  Container, Card, CardContent, Typography, Grid, TextField, MenuItem,
  Button, Table, TableHead, TableBody, TableRow, TableCell,
  IconButton, Chip, TablePagination, Stack
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

export default function PatientsManagement() {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    contact: "",
    email: "",
    address: "",
    admissionDate: "",
    department: "General",
    doctor: "",
    notes: "",
    status: "Active",
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const departments = ["General", "Orthopedics", "Cardiology", "Neurology", "Pediatrics"];
  const doctors = ["Dr. John Smith", "Dr. Sarah Lee", "Dr. David Brown"];
  const statuses = ["Active", "In Treatment", "Discharged"];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updated = [...patients];
      updated[editingIndex] = formData;
      setPatients(updated);
      setEditingIndex(null);
    } else {
      setPatients([...patients, formData]);
    }
    setFormData({
      name: "", age: "", gender: "Male", contact: "", email: "", address: "",
      admissionDate: "", department: "General", doctor: "", notes: "", status: "Active"
    });
  };

  const handleEdit = (index) => {
    setFormData(patients[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updated = patients.filter((_, i) => i !== index);
    setPatients(updated);
  };

  const filteredPatients = patients.filter(p =>
    (p.name.toLowerCase().includes(search.toLowerCase()) ||
     p.contact.includes(search) ||
     p.status.toLowerCase().includes(search.toLowerCase())) &&
    (statusFilter ? p.status === statusFilter : true)
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Add / Edit Form */}
      <Card sx={{ mb: 4, borderRadius: 4, background: "linear-gradient(135deg, #f0f9ff, #ffffff)" }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            {editingIndex !== null ? "Edit Patient" : "Add New Patient"}
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField fullWidth label="Age" name="age" type="number" value={formData.age} onChange={handleChange} required />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField select fullWidth label="Gender" name="gender" value={formData.gender} onChange={handleChange}>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Contact" name="contact" value={formData.contact} onChange={handleChange} required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email" name="email" value={formData.email} onChange={handleChange} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Address" name="address" value={formData.address} onChange={handleChange} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField type="date" fullWidth label="Admission Date" name="admissionDate" InputLabelProps={{ shrink: true }} value={formData.admissionDate} onChange={handleChange} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField select fullWidth label="Department" name="department" value={formData.department} onChange={handleChange}>
                  {departments.map((d, i) => <MenuItem key={i} value={d}>{d}</MenuItem>)}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField select fullWidth label="Assigned Doctor" name="doctor" value={formData.doctor} onChange={handleChange}>
                  {doctors.map((doc, i) => <MenuItem key={i} value={doc}>{doc}</MenuItem>)}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField multiline rows={2} fullWidth label="Medical Condition / Notes" name="notes" value={formData.notes} onChange={handleChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField select fullWidth label="Status" name="status" value={formData.status} onChange={handleChange}>
                  {statuses.map((s, i) => <MenuItem key={i} value={s}>{s}</MenuItem>)}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" sx={{ px: 4, py: 1.2, borderRadius: 3 }}>
                  {editingIndex !== null ? "Update Patient" : "Add Patient"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>

      {/* Filters */}
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 2 }}>
        <TextField label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
        <TextField select label="Filter by Status" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          {statuses.map((s, i) => <MenuItem key={i} value={s}>{s}</MenuItem>)}
        </TextField>
      </Stack>

      {/* Table */}
      <Card>
        <Table>
          <TableHead sx={{ background: "#f4f6f8" }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Doctor</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPatients.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((p, i) => (
              <TableRow key={i}>
                <TableCell>{p.name}</TableCell>
                <TableCell>{p.contact}</TableCell>
                <TableCell>{p.department}</TableCell>
                <TableCell>{p.doctor}</TableCell>
                <TableCell>
                  <Chip label={p.status} color={
                    p.status === "Active" ? "success" : p.status === "In Treatment" ? "warning" : "error"
                  } />
                </TableCell>
                <TableCell align="center">
                  <IconButton color="primary" onClick={() => handleEdit(i)}><Edit /></IconButton>
                  <IconButton color="error" onClick={() => handleDelete(i)}><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={filteredPatients.length}
          page={page}
          onPageChange={(e, newPage) => setPage(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(e) => { setRowsPerPage(parseInt(e.target.value, 10)); setPage(0); }}
        />
      </Card>
    </Container>
  );
}
