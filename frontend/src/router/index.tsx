import { Routes, Route } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import Upload from "../pages/Upload";
import NotFound from "../pages/NotFound";

export default function Router() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Landing />} />

      {/* Dashboard Layout */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}