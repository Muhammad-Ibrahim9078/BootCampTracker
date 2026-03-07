import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import StudentDashboard from "./pages/Student/StudentDashboard/StudentDashboard";
import DailyStandup from "./pages/Student/DailyStandup/DailyStandup";
import Assignments from "./pages/Student/Assignments/Assignments";
import MyProgress from "./pages/Student/MyProgress/MyProgress";
import Announcements from "./pages/Student/Announcements/Announcements";
import AdminSidebar from "./components/Admin/AdminSidebar";
import StudentSidebar from "./components/Student/StudentSidebar";
import TeacherSidebar from "./components/Teacher/TeacherSidebar";
import TeacherDashboard from "./pages/Teacher/TeacherDashboards/TeacherDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import Bootcamps from "./pages/Admin/Bootcamps/Bootcamps";
import User from "./pages/Admin/Users/User";
import Domains from "./pages/Admin/Domains/Domains";
import Reports from "./pages/Admin/Reports/Reports";
import CreateAssignment from "./components/Admin/CreateAssignment/CreateAssignment";
import ReviewSubmission from "./pages/Teacher/ReviewSubmission/ReviewSubmission";
import AnnoucmentTeacher from "./pages/Teacher/Annoucment/AnnoucmentTeacher";

import StudentLogin from './pages/Auth/StudentLogin'
import TeacherLogin from './pages/Auth/TeacherLogin'
import AdminLogin from "./pages/Auth/Adminlogin";

const router = createBrowserRouter([
  {
    path: "/admin-dashbaord",
    element: <AdminSidebar />, // Layout
    children: [
      { index: true, element: <AdminDashboard /> }, // default page
      { path: "dashboard", element: <AdminDashboard /> }, // default page
      { path: "bootcamps", element: <Bootcamps /> },
      { path: "users", element: <User /> },
      { path: "domains", element: <Domains /> },
      { path: "reports", element: <Reports /> },
    ],
  },
  {
    path: "/student-dashbaord",
    element: <StudentSidebar />, // Layout
    children: [
      { index: true, element: <StudentDashboard /> }, // default page
      { path: "dashboard", element: <StudentDashboard /> },
      { path: "standup", element: <DailyStandup /> },
      { path: "assignments", element: <Assignments /> },
      { path: "progress", element: <MyProgress /> },
      { path: "announcements", element: <Announcements /> },
    ],
  },
  {
    path: "/teacher-dashboard",
    element: <TeacherSidebar />, // Layout
    children: [
      { index: true, element: <TeacherDashboard /> }, // default page
      { path: "dashboard", element: <TeacherDashboard /> },
      { path: "create-assignment", element: <CreateAssignment /> },
      { path: "review-submissions", element: <ReviewSubmission /> },
      // { path: "student-progress", element: < /> },
      { path: "announcements", element: <AnnoucmentTeacher /> },
    ],
   
  
  },
  {
    path: 'studentlogin', element: <StudentLogin/>
  },
  {
    path: 'teacherlogin', element: <TeacherLogin/>
  },
  {
     path: 'adminlogin', element: <AdminLogin/>
  }
  


]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;