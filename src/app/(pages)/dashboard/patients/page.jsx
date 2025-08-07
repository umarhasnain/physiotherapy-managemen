"use client";
import { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  MenuItem,
  IconButton,
  InputAdornment,
  Box,
} from "@mui/material";
import { Search, Add, Visibility, Edit, Delete } from "@mui/icons-material";
import PatientForm from "./PatientForm";
import PatientProfileDrawer from "./PatientProfileDrawer";
import patientsData from "./patientsData";

export default function PatientsPage() {
  const [patients, setPatients] = useState(patientsData);
  const [search, setSearch] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formMode, setFormMode] = useState("add");

  const handleSearch = (e) => setSearch(e.target.value);

  const handleView = (patient) => {
    setSelectedPatient(patient);
    setIsDrawerOpen(true);
  };

  const handleEdit = (patient) => {
    setSelectedPatient(patient);
    setFormMode("edit");
    setIsFormOpen(true);
  };

  const handleDelete = (id) => {
    setPatients(patients.filter((p) => p.id !== id));
  };

  const handleFormSubmit = (data) => {
    if (formMode === "add") {
      setPatients([...patients, { ...data, id: Date.now() }]);
    } else {
      setPatients(
        patients.map((p) => (p.id === data.id ? { ...data } : p))
      );
    }
    setIsFormOpen(false);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Patients Management
      </Typography>

      {/* Top Bar */}
      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        justifyContent="space-between"
        mb={3}
      >
        <TextField
          placeholder="Search patients..."
          value={search}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ width: { xs: "100%", sm: 300 }, bgcolor: "white" }}
        />
        <Button
          variant="contained"
          startIcon={<Add />}
          sx={{
            background: "linear-gradient(90deg, #0288d1, #01579b)",
            borderRadius: 3,
            px: 3,
          }}
          onClick={() => {
            setFormMode("add");
            setSelectedPatient(null);
            setIsFormOpen(true);
          }}
        >
          Add Patient
        </Button>
      </Box>

      {/* Table */}
      <Grid container spacing={2}>
        {patients
          .filter((p) =>
            p.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((patient) => (
            <Grid item xs={12} md={6} lg={4} key={patient.id}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6">{patient.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Age: {patient.age} | Gender: {patient.gender}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Dept: {patient.department}
                  </Typography>
                  <Box mt={2} display="flex" gap={1}>
                    <IconButton
                      color="primary"
                      onClick={() => handleView(patient)}
                    >
                      <Visibility />
                    </IconButton>
                    <IconButton
                      color="warning"
                      onClick={() => handleEdit(patient)}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(patient.id)}
                    >
                      <Delete />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>

      {/* Drawer & Form */}
      <PatientProfileDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        patient={selectedPatient}
      />
      <PatientForm
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleFormSubmit}
        initialData={selectedPatient}
      />
    </Container>
  );
}


//*************************************************************NEXT CODE */

// "use client";
// import { useState, useEffect } from "react";
// import {
//   Container,
//   Typography,
//   Card,
//   CardContent,
//   Button,
//   Grid,
//   TextField,
//   MenuItem,
//   Chip,
//   Table,
//   TableHead,
//   TableBody,
//   TableCell,
//   TableRow,
//   TablePagination,
//   IconButton,
//   Stack,
// } from "@mui/material";
// import { Add, Edit, Delete, PictureAsPdf, Download } from "@mui/icons-material";

// export default function PatientsPage() {
//   const [patients, setPatients] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     gender: "Male",
//     contact: "",
//     status: "Active",
//     billing: 0,
//     paid: 0,
//     balance: 0,
//     medicalHistory: "",
//   });
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [editIndex, setEditIndex] = useState(null);

//   const genders = ["Male", "Female", "Other"];
//   const statuses = ["Active", "Pending", "Discharged"];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleAddPatient = () => {
//     if (editIndex !== null) {
//       const updated = [...patients];
//       updated[editIndex] = formData;
//       setPatients(updated);
//       setEditIndex(null);
//     } else {
//       setPatients([...patients, formData]);
//     }
//     resetForm();
//   };

//   const handleEdit = (index) => {
//     setFormData(patients[index]);
//     setEditIndex(index);
//   };

//   const handleDelete = (index) => {
//     const updated = patients.filter((_, i) => i !== index);
//     setPatients(updated);
//   };

//   const resetForm = () => {
//     setFormData({
//       name: "",
//       age: "",
//       gender: "Male",
//       contact: "",
//       status: "Active",
//       billing: 0,
//       paid: 0,
//       balance: 0,
//       medicalHistory: "",
//     });
//   };

//   const filteredPatients = patients.filter((p) =>
//     p.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <Container maxWidth="lg" sx={{ py: 5 }}>
//       <Typography variant="h4" fontWeight="bold" mb={3} color="primary">
//         🏥 Patients Management
//       </Typography>

//       {/* Patient Form */}
//       <Card sx={{ mb: 4, borderRadius: 4, boxShadow: 4 }}>
//         <CardContent>
//           <Typography variant="h6" fontWeight="bold" mb={2}>
//             {editIndex !== null ? "✏️ Edit Patient" : "➕ Add New Patient"}
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={4}>
//               <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} />
//             </Grid>
//             <Grid item xs={12} sm={2}>
//               <TextField fullWidth type="number" label="Age" name="age" value={formData.age} onChange={handleChange} />
//             </Grid>
//             <Grid item xs={12} sm={3}>
//               <TextField select fullWidth label="Gender" name="gender" value={formData.gender} onChange={handleChange}>
//                 {genders.map((g, i) => (
//                   <MenuItem key={i} value={g}>{g}</MenuItem>
//                 ))}
//               </TextField>
//             </Grid>
//             <Grid item xs={12} sm={3}>
//               <TextField fullWidth label="Contact" name="contact" value={formData.contact} onChange={handleChange} />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField select fullWidth label="Status" name="status" value={formData.status} onChange={handleChange}>
//                 {statuses.map((s, i) => (
//                   <MenuItem key={i} value={s}>{s}</MenuItem>
//                 ))}
//               </TextField>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField type="number" fullWidth label="Billing" name="billing" value={formData.billing} onChange={handleChange} />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField type="number" fullWidth label="Paid" name="paid" value={formData.paid} onChange={handleChange} />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField type="number" fullWidth label="Balance" name="balance" value={formData.balance} onChange={handleChange} />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField fullWidth multiline rows={2} label="Medical History" name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} />
//             </Grid>
//             <Grid item xs={12} sx={{ textAlign: "center" }}>
//               <Button variant="contained" onClick={handleAddPatient} sx={{ px: 4, py: 1.2, borderRadius: 3 }}>
//                 {editIndex !== null ? "Update Patient" : "Add Patient"}
//               </Button>
//             </Grid>
//           </Grid>
//         </CardContent>
//       </Card>

//       {/* Search + Export */}
//       <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
//         <TextField size="small" label="Search Patient" value={search} onChange={(e) => setSearch(e.target.value)} />
//         <Stack direction="row" spacing={1}>
//           <Button variant="outlined" startIcon={<PictureAsPdf />}>Export PDF</Button>
//           <Button variant="outlined" startIcon={<Download />}>Export Excel</Button>
//         </Stack>
//       </Stack>

//       {/* Patients Table */}
//       <Card sx={{ borderRadius: 4, boxShadow: 4 }}>
//         <CardContent>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Name</TableCell>
//                 <TableCell>Age</TableCell>
//                 <TableCell>Gender</TableCell>
//                 <TableCell>Contact</TableCell>
//                 <TableCell>Status</TableCell>
//                 <TableCell>Billing</TableCell>
//                 <TableCell>Paid</TableCell>
//                 <TableCell>Balance</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredPatients.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((p, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{p.name}</TableCell>
//                   <TableCell>{p.age}</TableCell>
//                   <TableCell>{p.gender}</TableCell>
//                   <TableCell>{p.contact}</TableCell>
//                   <TableCell>
//                     <Chip
//                       label={p.status}
//                       color={p.status === "Active" ? "success" : p.status === "Pending" ? "warning" : "error"}
//                     />
//                   </TableCell>
//                   <TableCell>{p.billing}</TableCell>
//                   <TableCell>{p.paid}</TableCell>
//                   <TableCell>{p.balance}</TableCell>
//                   <TableCell>
//                     <IconButton color="primary" onClick={() => handleEdit(index)}><Edit /></IconButton>
//                     <IconButton color="error" onClick={() => handleDelete(index)}><Delete /></IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//           <TablePagination
//             rowsPerPageOptions={[5, 10, 25]}
//             component="div"
//             count={filteredPatients.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={(e, newPage) => setPage(newPage)}
//             onRowsPerPageChange={(e) => {
//               setRowsPerPage(parseInt(e.target.value, 10));
//               setPage(0);
//             }}
//           />
//         </CardContent>
//       </Card>
//     </Container>
//   );
// }
