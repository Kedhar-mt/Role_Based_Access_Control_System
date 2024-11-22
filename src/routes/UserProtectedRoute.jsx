import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const UserProtectedRoute = () => {
  const isAuthenticated = sessionStorage.getItem("isAuthenticated");
  const role = sessionStorage.getItem("role");

  if (!isAuthenticated || role !== "user") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default UserProtectedRoute;
