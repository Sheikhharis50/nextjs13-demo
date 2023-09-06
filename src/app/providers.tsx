"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import ProductProvider from "@/store/product/context";

type ProvidersProps = {
  children: React.ReactElement;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <ProductProvider>{children}</ProductProvider>
    </ThemeProvider>
  );
}
