import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen dark:text-gray-100 dark:bg-gray-950 bg-gray-100">
      <header className="flex-shrink-0">
        <Navbar />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="flex-shrink-0">
        <Footer />
      </footer>
    </div>
  );
}
