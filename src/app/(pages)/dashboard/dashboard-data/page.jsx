import React from 'react'
import { Container } from "@mui/material";
import StatsCardsSection from "@/components/StatsCardsSection";
import QuickActions from "@/components/QuickActions";
import ChartsSection from "@/components/ChartsSection";
import RecentAppointmentsTable from "@/components/RecentAppointmentsTable";
import AppointmentsTable from '@/components/AppointmentsTable';
import StaffList from '@/components/staff/StaffList';

const DashboardData = () => {
  return (
    <div>
    <Container maxWidth="2-xl" sx={{ mt: 3 }}>
      <StatsCardsSection />
      {/* <QuickActions />
      <ChartsSection /> */}
      <AppointmentsTable/>
      <RecentAppointmentsTable />
      {/* <StaffList/> */}
    </Container>
    </div>
  )
}

export default DashboardData
