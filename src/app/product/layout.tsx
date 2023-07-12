"use client"

import ProductPage from "@/components/Product";
import Box from '@mui/material/Box';

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box component="main" className="flex">
      <ProductPage />
      <Box component="div">
        {children}
      </Box>
    </Box>
  );
}
