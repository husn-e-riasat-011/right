"use client"; // This indicates that the component should be rendered on the client side.
import React from "react";
import Sidebar from "./component/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
}
