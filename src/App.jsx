import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from "./components/AdminDashboard/Sidebar";

import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import DailyStandup from "./pages/DailyStandup/DailyStandup";
import Assignments from "./pages/Assignments/Assignments";
import MyProgress from "./pages/MyProgress/MyProgress";
import Announcements from "./pages/Announcements/Announcements";

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