import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import StudentDashboard from "./pages/Student/StudentDashboard/StudentDashboard";
import DailyStandup from "./pages/Student/DailyStandup/DailyStandup";
import Assignments from "./pages/Student/Assignments/Assignments";
import MyProgress from "./pages/Student/MyProgress/MyProgress";
import Announcements from "./pages/Student/Announcements/Announcements";
import Sidebar from "./components/Admin/Sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />, // Layout
    children: [
      { index: true, element: <StudentDashboard /> }, // default page
      { path: "dashboard", element: <StudentDashboard /> },
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