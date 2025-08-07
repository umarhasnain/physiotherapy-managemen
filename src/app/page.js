'use client'
import DashboardLayoutBranding from '@/components/Sidebar'
import React from 'react'
import { Container } from "@mui/material";
import StatsCardsSection from "@/components/StatsCardsSection";
import QuickActions from "@/components/QuickActions";
import ChartsSection from "@/components/ChartsSection";
import RecentAppointmentsTable from "@/components/RecentAppointmentsTable";

const page = () => {
  return (
    <div>
      <DashboardLayoutBranding/>
       <Container maxWidth="xl" sx={{ mt: 3 }}>
      <StatsCardsSection />
      <QuickActions />
      <ChartsSection />
      <RecentAppointmentsTable />
    </Container>
    </div>
  )
}

export default page

// import Layout from "@/components/Layout";
// import StatsCard from "@/components/StatsCard";
// import { FaUserMd, FaUsers, FaHospital, FaFlask } from "react-icons/fa";
// import PatientsChart from "@/components/PatientsChart";
// import AppointmentsTable from "@/components/AppointmentsTable";
// import RecentDoctors from "@/components/RecentDoctors";
// import OutOfStock from "@/components/OutOfStock";

// export default function Home() {
//   return (
//     <Layout>
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         <StatsCard title="Total Patients" value="20" icon={<FaUsers />} />
//         <StatsCard title="Total Doctors" value="20" icon={<FaUserMd />} />
//         <StatsCard title="Total Wards" value="20" icon={<FaHospital />} />
//         <StatsCard title="Total Labs" value="20" icon={<FaFlask />} />
//       </div>

//       <PatientsChart />
//       <AppointmentsTable />
//       <RecentDoctors />
//       <OutOfStock />
//     </Layout>
//   );
// }


// export default function Home() {
//   return(
//     <DashboardLayoutBranding/>
//   )
// }