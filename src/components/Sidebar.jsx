"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import { FaFirstOrderAlt } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import Reports from '@/app/(pages)/dashboard/reports/page';
import SummarizeIcon from '@mui/icons-material/Summarize';
import PersonalInjuryIcon from '@mui/icons-material/PersonalInjury';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import DashboardData from '@/app/(pages)/dashboard/dashboard-data/page';
import Appointment from '@/app/(pages)/dashboard/appointments/page';
import StaffPage from '@/app/(pages)/dashboard/staff/page';
import PT_Dashboard_MUI from './PT_Dashboard_MUI';
import PT_Dashboard from './PT_Dashboard';

const NAVIGATION = [
  { segment: 'dashboard', title: 'Dashboard', icon: <DashboardIcon /> },
  { segment: 'reports', title: 'Reports', icon: <SummarizeIcon /> },
  { segment: 'staff', title: 'Staff', icon: <FaFirstOrderAlt /> },
  { segment: 'patients', title: 'Patients', icon: <PersonalInjuryIcon /> },
  { segment: 'appointments', title: 'Appointments', icon: <BookOnlineIcon /> },
  { segment: 'users', title: 'Users', icon: <FiUsers /> },
  { segment: 'signOut', title: 'Sign Out', icon: <MdLogout /> },
];

const demoTheme = createTheme({
  cssVariables: { colorSchemeSelector: 'data-toolpad-color-scheme' },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 600, lg: 1200, xl: 1536 },
  },
});

function DemoPageContent({ pathname }) {
  const renderComponent = () => {
    switch (pathname) {
      case "/reports":
        return <Reports />;
      case "/staff":
        return <StaffPage />;
      case "/dashboard":
        return <DashboardData />; 
      case "/appointments":
        return <Appointment />;
      case "/patients":
        return <PT_Dashboard_MUI />;
      case "/users":
        return <PT_Dashboard />;
      case "/signOut":
        return <Typography>Signing out...</Typography>;
      default:
        return <Typography>Page Not Found</Typography>;
    }
  };

  if (pathname === '/signOut') {
    return (
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h6">You have been signed out.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 4, display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
      {renderComponent()}
    </Box>
  );
}

export default function DashboardLayoutBranding(props) {
  const { window } = props;
  const router = useDemoRouter('/dashboard');
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{ title: 'Physiotherapy Management System', homeUrl: '/' }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout
        slotProps={{
          sideNav: {
            sx: {
              "& .MuiDrawer-paper": { width: 80 }, // sidebar ki width fix
            },
          },
          content: {
            sx: { ml: "80px" }, // content margin sidebar ke equal
          },
        }}
      >
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}
