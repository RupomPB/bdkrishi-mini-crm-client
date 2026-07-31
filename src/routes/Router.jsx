import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import AddCustomer from "../pages/AddCustomer";

import EditCustomer from "../pages/EditCustomer";

import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import Register from "../pages/Register";
import Leads from "../pages/Leads";
import AddLead from "../pages/AddLead";
// import EditLead from "../pages/EditLead";

const Router = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Login />} />
      
<Route path="/register" element={<Register />} />

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

    <Route
    path="customers/edit/:id"
    element={<EditCustomer />}
 />
 <Route path="leads" element={<Leads />} />

 <Route path="leads/add" element={<AddLead />} />

{/* <Route path="leads/edit/:id" element={<EditLead />} /> */}




      </Route>

  

      {/* Redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;