"use client";
import React, { useState } from "react";
import {
  DataGrid,
  GridToolbar,
} from "@mui/x-data-grid";
import {
  Box,
  Chip,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

// Dummy patients
const initialPatients = [
  {
    id: 1,
    name: "Gonzalez Maria",
    therapist: "Alkhaman M",
    insurance: "SED",
    location: "NYC",
    visits: { 1: "V", 2: "V", 4: "E", 6: "H" },
  },
  {
    id: 2,
    name: "Smith John",
    therapist: "Alkhaman H",
    insurance: "WCIP",
    location: "LA",
    visits: { 2: "V", 4: "V", 7: "D", 10: "N" },
  },
  {
    id: 3,
    name: "Ali Khan",
    therapist: "Alkhaman M",
    insurance: "SED",
    location: "Chicago",
    visits: { 5: "E", 8: "V", 12: "D" },
  },
  {
    id: 4,
    name: "Ali Khan",
    therapist: "Alkhaman M",
    insurance: "SED",
    location: "Chicago",
    visits: { 5: "E", 8: "V", 12: "D" },
  },
  {
    id: 5,
    name: "Ali Khan",
    therapist: "Alkhaman M",
    insurance: "SED",
    location: "Chicago",
    visits: { 5: "E", 8: "V", 12: "D" },
  },
  {
    id: 6,
    name: "Ali Khan",
    therapist: "Alkhaman M",
    insurance: "SED",
    location: "Chicago",
    visits: { 5: "E", 8: "V", 12: "D" },
  },
  {
    id: 7,
    name: "Ali Khan",
    therapist: "Alkhaman M",
    insurance: "SED",
    location: "Chicago",
    visits: { 5: "E", 8: "V", 12: "D" },
  },
  {
    id: 8,
    name: "Ali Khan",
    therapist: "Alkhaman M",
    insurance: "SED",
    location: "Chicago",
    visits: { 5: "E", 8: "V", 12: "D" },
  },
  {
    id: 9,
    name: "Ali Khan",
    therapist: "Alkhaman M",
    insurance: "SED",
    location: "Chicago",
    visits: { 5: "E", 8: "V", 12: "D" },
  },
  {
    id: 10,
    name: "Ali Khan",
    therapist: "Alkhaman M",
    insurance: "SED",
    location: "Chicago",
    visits: { 5: "E", 8: "V", 12: "D" },
  },
];

// Visit colors + labels
const visitColors = {
  V: { label: "Visit", color: "success" },
  E: { label: "Eval", color: "warning" },
  D: { label: "Discharge", color: "error" },
  H: { label: "Hosp", color: "secondary" },
  N: { label: "No Visit", color: "default" },
};

// Order for cycling
const visitTypes = ["", "V", "E", "D", "H", "N"];

export default function PT_Dashboard_MUI() {
  const [month, setMonth] = useState(8); // August
  const [year, setYear] = useState(2025);
  const [patients, setPatients] = useState(initialPatients);

  const daysInMonth = new Date(year, month, 0).getDate();

  // Handle cell click to change visit type
  const handleCellClick = (patientId, day) => {
    setPatients((prev) =>
      prev.map((p) => {
        if (p.id !== patientId) return p;

        const current = p.visits?.[day] || "";
        const currentIndex = visitTypes.indexOf(current);
        const nextType = visitTypes[(currentIndex + 1) % visitTypes.length];

        return {
          ...p,
          visits: {
            ...p.visits,
            [day]: nextType,
          },
        };
      })
    );
  };

  // Columns config
  const columns = [
    {
      field: "serial",
      headerName: "S.No",
      width: 70,
      sortable: false,
      filterable: false,
      renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1,
    },
    {
      field: "name",
      headerName: "Patient",
      flex: 1,
      minWidth: 120,
      renderCell: (params) => (
        <Typography
          sx={{
            whiteSpace: "normal",
            wordWrap: "break-word",
            padding: "10px",
            lineHeight: 1.2,
          }}
        >
          {params.value}
        </Typography>
      ),
    },
    { field: "therapist", headerName: "Therapist", flex: 1, minWidth: 100 },
    { field: "insurance", headerName: "Insurance", flex: 1, minWidth: 100 },
    { field: "location", headerName: "Location", flex: 1, minWidth: 100 },
    ...Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1;
      return {
        field: `day${day}`,
        headerName: `${day}`,
        flex: 0.5,
        minWidth: 50,
        renderCell: (params) => {
          const val = params.row.visits?.[day];
          if (!val) {
            return (
              <Box
                onClick={() => handleCellClick(params.row.id, day)}
                sx={{ cursor: "pointer", width: "100%", height: "100%" }}
              />
            );
          }
          const v = visitColors[val];
          return (
            <Chip
              label={v.label}
              color={v.color}
              size="small"
              variant="outlined"
              onClick={() => handleCellClick(params.row.id, day)}
              sx={{ cursor: "pointer" }}
            />
          );
        },
      };
    }),
  ];

  return (
    <Box p={2}>
      <Typography variant="h5" gutterBottom>
        📅 Physical Therapy Dashboard ({year}-{month})
      </Typography>

      {/* Month & Year Selector */}
      <Box display="flex" gap={2} mb={2}>
        <Select value={month} onChange={(e) => setMonth(Number(e.target.value))}>
          {Array.from({ length: 12 }, (_, i) => (
            <MenuItem key={i + 1} value={i + 1}>
              {new Date(0, i).toLocaleString("default", { month: "long" })}
            </MenuItem>
          ))}
        </Select>

        <TextField
          type="number"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          label="Year"
        />
      </Box>

      {/* DataGrid */}
      <div style={{ height: "80vh", width: "100%" }}>
        <DataGrid
          rows={patients}
          columns={columns}
          pageSize={patients.length}
          rowsPerPageOptions={[patients.length]}
          slots={{ toolbar: GridToolbar }}
          disableRowSelectionOnClick
          getRowId={(row) => row.id}
          sx={{
            "& .MuiDataGrid-cell": {
              textAlign: "center",
              whiteSpace: "normal !important",
              wordWrap: "break-word !important",
            },
          }}
        />
      </div>
    </Box>
  );
}
