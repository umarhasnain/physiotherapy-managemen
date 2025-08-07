"use client";
import { useState } from "react";
import StaffForm from "@/components/staff/StaffForm";
import StaffList from "@/components/staff/StaffList";
import { Container, Typography } from "@mui/material";

export default function StaffPage() {
  const [staff, setStaff] = useState([]);
  const [editData, setEditData] = useState(null);

  const handleAddOrUpdate = (data) => {
    if (editData) {
      setStaff(staff.map((s) => (s.name === editData.name ? data : s)));
      setEditData(null);
    } else {
      setStaff([...staff, data]);
    }
  };

  const handleEdit = (row) => {
    setEditData(row);
  };

  const handleDelete = (row) => {
    setStaff(staff.filter((s) => s.name !== row.name));
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight="bold" mb={3} color="primary">
        Staff Management
      </Typography>
      <StaffForm onSubmit={handleAddOrUpdate} initialData={editData} onCancel={() => setEditData(null)} />
      <StaffList staff={staff} onEdit={handleEdit} onDelete={handleDelete} />
    </Container>
  );
}
