import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CursorFX from "./CursorFX";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex min-h-screen flex-col">
    <CursorFX />
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

export default Layout;
