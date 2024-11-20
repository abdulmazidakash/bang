import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto my-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
