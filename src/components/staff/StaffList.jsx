"use client";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

export default function StaffList({ staff = [], onEdit, onDelete }) {
  return (
    <TableContainer component={Paper} sx={{ mt: 3, boxShadow: 3 }}>
      <Table>
        <TableHead sx={{ background: "#0288d1" }}>
          <TableRow>
            <TableCell sx={{ color: "#fff" }}>Name</TableCell>
            <TableCell sx={{ color: "#fff" }}>Role</TableCell>
            <TableCell sx={{ color: "#fff" }}>Department</TableCell>
            <TableCell sx={{ color: "#fff" }}>Contact</TableCell>
            <TableCell sx={{ color: "#fff" }}>Joining Date</TableCell>
            <TableCell sx={{ color: "#fff" }}>Salary</TableCell>
            <TableCell sx={{ color: "#fff" }}>Status</TableCell>
            <TableCell sx={{ color: "#fff" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {staff.length > 0 ? (
            staff.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.department}</TableCell>
                <TableCell>{row.contact}</TableCell>
                <TableCell>{row.joiningDate}</TableCell>
                <TableCell>{row.salary}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <Button size="small" variant="contained" onClick={() => onEdit(row)}>Edit</Button>
                  <Button size="small" variant="outlined" color="error" sx={{ ml: 1 }} onClick={() => onDelete(row)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={8} align="center">No staff members found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

