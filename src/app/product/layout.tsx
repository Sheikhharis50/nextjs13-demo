"use client"

import SideBar from "@/components/Product/Sidebar";
import Box from '@mui/material/Box';

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box component="main" className="flex">
      <SideBar />
      <Box component="div">
        {children}
      </Box>
    </Box>
  );
}
