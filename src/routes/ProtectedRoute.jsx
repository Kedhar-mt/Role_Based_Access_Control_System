import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";  // Import Toastify for notifications

const ProtectedRoute = ({ allowedRoles }) => {
  const isAuthenticated = sessionStorage.getItem("isAuthenticated") === "true";
  const role = sessionStorage.getItem("role");

  useEffect(() => {
    // Only show toast if the user is not authenticated
    if (!isAuthenticated) {
      toast.error("Access restricted! Please log in to continue.");
    }
  }, [isAuthenticated]);  // Dependency on isAuthenticated

  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If user role is not in allowedRoles, redirect to user dashboard
  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/user-dashboard" />;
  }

  // If everything checks out, render the protected content
  return <Outlet />;
};

export default ProtectedRoute;
