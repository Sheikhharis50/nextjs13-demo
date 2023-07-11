import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getMetaRoute } from "@/routes/utils";
import Navbar from "@/components/Navbar";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = (): Metadata => {
  const route = getMetaRoute("dashboard");
  return {
    title: route?.title,
    description: route?.description,
  };
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
