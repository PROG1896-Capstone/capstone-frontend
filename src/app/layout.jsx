"use client"

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

export const Layout = ({ children }) => {
  return (
    <SessionProvider>
    <html lang="en">
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
    </SessionProvider>
  );
};

export default Layout;
