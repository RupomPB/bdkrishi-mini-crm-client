import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import AddCustomer from "../pages/AddCustomer";

import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Login />} />

      {/* Protected */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="customers" element={<Customers />} />
        <Route path="customers/add" element={<AddCustomer />} />
      </Route>

      {/* Redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;