// "use client";
// import {
//   Grid,
//   Paper,
//   Typography,
//   Box,
//   TextField,
//   MenuItem,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
// } from "@mui/material";
// import { useState } from "react";
// import { EventAvailable } from "@mui/icons-material";

// export default function AppointmentBooking() {
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     gender: "",
//     contact: "",
//     date: "",
//     time: "",
//     department: "",
//     doctor: "",
//     notes: "",
//     communication: "",
//     urgency: "",
//   });

//   const departments = ["Physiotherapy", "Orthopedics", "Neurology", "Pediatrics"];
//   const doctors = ["Dr. John Smith", "Dr. Sarah Lee", "Dr. David Brown"];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     alert("Appointment booked successfully!");
//   };

//   const handleReset = () => {
//     setFormData({
//       name: "",
//       age: "",
//       gender: "",
//       contact: "",
//       date: "",
//       time: "",
//       department: "",
//       doctor: "",
//       notes: "",
//       communication: "",
//       urgency: "",
//     });
//   };

//   return (
//     <Paper
//       elevation={6}
//       sx={{
//         p: { xs: 3, sm: 5 },
//         borderRadius: 5,
//         maxWidth: 950,
//         mx: "auto",
//         mt: 5,
//         background: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
//         boxShadow: "0px 8px 25px rgba(0,0,0,0.1)",
//         transition: "transform 0.3s ease",
//         "&:hover": { transform: "translateY(-4px)" },
//       }}
//     >
//       {/* Header */}
//       <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 4 }}>
//         <EventAvailable sx={{ fontSize: 40, color: "#00796b" }} />
//         <Typography variant="h4" fontWeight="bold" sx={{ color: "#004d40" }}>
//           Book an Appointment
//         </Typography>
//       </Box>

//       <Grid container spacing={3}>
//         {/* Patient Info */}
//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             label="Patient Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             variant="outlined"
//             sx={{ bgcolor: "white", borderRadius: 2 }}
//           />
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <TextField
//             fullWidth
//             label="Age"
//             name="age"
//             type="number"
//             value={formData.age}
//             onChange={handleChange}
//             variant="outlined"
//             sx={{ bgcolor: "white", borderRadius: 2 }}
//           />
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <FormControl fullWidth sx={{ bgcolor: "white", borderRadius: 2 }}>
//             <InputLabel>Gender</InputLabel>
//             <Select
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//             >
//               <MenuItem value="Male">Male</MenuItem>
//               <MenuItem value="Female">Female</MenuItem>
//               <MenuItem value="Other">Other</MenuItem>
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             label="Contact Number"
//             name="contact"
//             value={formData.contact}
//             onChange={handleChange}
//             variant="outlined"
//             sx={{ bgcolor: "white", borderRadius: 2 }}
//           />
//         </Grid>

//         {/* Appointment Details */}
//         <Grid item xs={6} sm={3}>
//           <TextField
//             fullWidth
//             type="date"
//             label="Date"
//             name="date"
//             InputLabelProps={{ shrink: true }}
//             value={formData.date}
//             onChange={handleChange}
//             variant="outlined"
//             sx={{ bgcolor: "white", borderRadius: 2 }}
//           />
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <TextField
//             fullWidth
//             type="time"
//             label="Time"
//             name="time"
//             InputLabelProps={{ shrink: true }}
//             value={formData.time}
//             onChange={handleChange}
//             variant="outlined"
//             sx={{ bgcolor: "white", borderRadius: 2 }}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <FormControl fullWidth sx={{ bgcolor: "white", borderRadius: 2 }}>
//             <InputLabel>Department</InputLabel>
//             <Select
//               name="department"
//               value={formData.department}
//               onChange={handleChange}
//             >
//               {departments.map((dept, i) => (
//                 <MenuItem key={i} value={dept}>
//                   {dept}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <FormControl fullWidth sx={{ bgcolor: "white", borderRadius: 2 }}>
//             <InputLabel>Doctor</InputLabel>
//             <Select
//               name="doctor"
//               value={formData.doctor}
//               onChange={handleChange}
//             >
//               {doctors.map((doc, i) => (
//                 <MenuItem key={i} value={doc}>
//                   {doc}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Grid>

//         {/* Notes & Preferences */}
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             multiline
//             rows={3}
//             label="Problem Description / Notes"
//             name="notes"
//             value={formData.notes}
//             onChange={handleChange}
//             variant="outlined"
//             sx={{ bgcolor: "white", borderRadius: 2 }}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <FormControl fullWidth sx={{ bgcolor: "white", borderRadius: 2 }}>
//             <InputLabel>Preferred Communication</InputLabel>
//             <Select
//               name="communication"
//               value={formData.communication}
//               onChange={handleChange}
//             >
//               <MenuItem value="Phone">Phone</MenuItem>
//               <MenuItem value="Email">Email</MenuItem>
//               <MenuItem value="SMS">SMS</MenuItem>
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <FormControl fullWidth sx={{ bgcolor: "white", borderRadius: 2 }}>
//             <InputLabel>Urgency Level</InputLabel>
//             <Select
//               name="urgency"
//               value={formData.urgency}
//               onChange={handleChange}
//             >
//               <MenuItem value="Normal">Normal</MenuItem>
//               <MenuItem value="High">High</MenuItem>
//               <MenuItem value="Emergency">Emergency</MenuItem>
//             </Select>
//           </FormControl>
//         </Grid>

//         {/* Actions */}
//         <Grid
//           item
//           xs={12}
//           sx={{ textAlign: "center", mt: 3, display: "flex", gap: 2, justifyContent: "center" }}
//         >
//           <Button
//             variant="contained"
//             sx={{
//               px: 4,
//               py: 1.2,
//               background: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)",
//               borderRadius: 3,
//               fontSize: "1rem",
//               "&:hover": { opacity: 0.9 },
//             }}
//             onClick={handleSubmit}
//           >
//             Book Appointment
//           </Button>
//           <Button
//             variant="outlined"
//             color="error"
//             sx={{
//               px: 4,
//               py: 1.2,
//               borderRadius: 3,
//               fontSize: "1rem",
//               borderWidth: 2,
//             }}
//             onClick={handleReset}
//           >
//             Reset
//           </Button>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// }
"use client";
import { useState } from "react";
import {
    Grid,
    Paper,
    Typography,
    TextField,
    MenuItem,
    Button,
    FormControl,
    InputLabel,
    Select,
} from "@mui/material";
import { FaCalendarCheck } from "react-icons/fa";

export default function AppointmentBookingUI() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        insuranceInfo: "",
        doctor: "Select Doctor",
        referralSource: "",
        attorneyName: "",
        attorneyPhone: "",
        attorneyEmail: "",
        type: "Select Type",
        billing: "Billed",   // default value
        paid: "No",          // default value
        balance: "Pending",  // default value
        clinicLocation: "",
        documents: null,
    });

    const doctors = ["Select Doctor","Dr Ahmed", "Dr Saleem", "Dr Rizwan", "Dr Waseem"];
    const types = ["Select Type","WC", "P.I", "Self Pay", "Private Ins."];

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Appointment booked successfully!");
        console.log(formData);
    };

    return (
        <Paper
            elevation={6}
            sx={{
                p: { xs: 3, sm: 5 },
                borderRadius: 5,
                maxWidth: 1100,
                mx: "auto",
                mt: 5,
                background: "linear-gradient(135deg, #f0f9ff, #ffffff)",
                boxShadow: "0px 8px 25px rgba(0,0,0,0.1)",
            }}
        >
            {/* Header */}
            <Typography
                variant="h4"
                fontWeight="bold"
                sx={{
                    color: "#0288d1",
                    mb: 4,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                <FaCalendarCheck /> Book an Appointment
            </Typography>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    {/* First & Last Name */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </Grid>

                    {/* Phone & Email */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Grid>

                    {/* Address */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </Grid>

                    {/* Insurance Info */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Insurance Info / Claim #"
                            name="insuranceInfo"
                            value={formData.insuranceInfo}
                            onChange={handleChange}
                        />
                    </Grid>

                    {/* Doctor */}
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel>Select Doctor</InputLabel>
                            <Select
                                name="doctor"
                                value={formData.doctor}
                                onChange={handleChange}
                            >
                                {doctors.map((doc, index) => (
                                    <MenuItem key={index} value={doc}>
                                        {doc}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Referral Source */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Referral Source"
                            name="referralSource"
                            value={formData.referralSource}
                            onChange={handleChange}
                        />
                    </Grid>

                    {/* Attorney Info */}
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Attorney Name"
                            name="attorneyName"
                            value={formData.attorneyName}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Attorney Phone"
                            name="attorneyPhone"
                            value={formData.attorneyPhone}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Attorney Email"
                            name="attorneyEmail"
                            value={formData.attorneyEmail}
                            onChange={handleChange}
                        />
                    </Grid>

                    {/* Type */}
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel>Type</InputLabel>
                            <Select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                            >
                                {types.map((t, index) => (
                                    <MenuItem key={index} value={t}>
                                        {t}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Billing / Paid / Balance */}
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Billing</InputLabel>
                            <Select
                                name="billing"
                                value={formData.billing}
                                onChange={handleChange}
                            >
                                <MenuItem value="Billed">Billed</MenuItem>
                                <MenuItem value="Not Billed">Not Billed</MenuItem>
                                <MenuItem value="Pending">Pending</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Paid</InputLabel>
                            <Select
                                name="paid"
                                value={formData.paid}
                                onChange={handleChange}
                            >
                                <MenuItem value="Yes">Yes</MenuItem>
                                <MenuItem value="No">No</MenuItem>
                                <MenuItem value="Partial">Partial</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Balance</InputLabel>
                            <Select
                                name="balance"
                                value={formData.balance}
                                onChange={handleChange}
                            >
                                <MenuItem value="0">0</MenuItem>
                                <MenuItem value="Pending">Pending</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>


                    {/* Clinic Location */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Clinic Location"
                            name="clinicLocation"
                            value={formData.clinicLocation}
                            onChange={handleChange}
                        />
                    </Grid>

                    {/* File Upload */}
                    <Grid item xs={12}>
                        <Button variant="outlined" component="label" fullWidth>
                            Upload Patient Documents
                            <input
                                type="file"
                                hidden
                                name="documents"
                                onChange={handleChange}
                            />
                        </Button>
                    </Grid>

                    {/* Submit Button */}
                    <Grid
                        item
                        xs={12}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 2,
                            mt: 2,
                        }}
                    >
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                background: "linear-gradient(90deg, #0288d1, #01579b)",
                                px: 4,
                                py: 1.5,
                                borderRadius: 3,
                                fontSize: "1rem",
                            }}
                        >
                            Confirm Appointment
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
}
