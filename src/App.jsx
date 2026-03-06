import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import DailyStandup from "./pages/Admin/DailyStandup/DailyStandup";
import Assignments from "./pages/Admin/Assignments/Assignments";
import MyProgress from "./pages/Admin/MyProgress/MyProgress";
import Announcements from "./pages/Admin/Announcements/Announcements";
import Sidebar from "./components/Admin/Sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />, // Layout
    children: [
      { index: true, element: <AdminDashboard /> }, // default page
      { path: "dashboard", element: <AdminDashboard /> },
      { path: "standup", element: <DailyStandup /> },
      { path: "assignments", element: <Assignments /> },
      { path: "progress", element: <MyProgress /> },
      { path: "announcements", element: <Announcements /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;