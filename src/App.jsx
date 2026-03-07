import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import StudentDashboard from "./pages/Student/StudentDashboard/StudentDashboard";
import DailyStandup from "./pages/Student/DailyStandup/DailyStandup";
import Assignments from "./pages/Student/Assignments/Assignments";
import MyProgress from "./pages/Student/MyProgress/MyProgress";
import Announcements from "./pages/Student/Announcements/AnnoucmentStudent";
import AdminSidebar from "./components/Admin/AdminSidebar";
import StudentSidebar from "./components/Student/StudentSidebar";
import TeacherSidebar from "./components/Teacher/TeacherSidebar";
import TeacherDashboard from "./pages/Teacher/TeacherDashboards/TeacherDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import Bootcamps from "./pages/Admin/Bootcamps/Bootcamps";
import User from "./pages/Admin/Users/User";
import AddUser from "./pages/Admin/Users/AddUser";
import Domains from "./pages/Admin/Domains/Domains";
import AdminAnnoucment from "./pages/Admin/AdminAnnoucment/AdminAnnoucment";
import CreateAssignment from "./components/Admin/CreateAssignment/CreateAssignment";
import ReviewSubmission from "./pages/Teacher/ReviewSubmission/ReviewSubmission";
import AnnoucmentTeacher from "./pages/Teacher/Annoucment/AnnoucmentTeacher";
import CreateBootcamp from "./pages/Admin/CreateBootcamp/CreateBootcamp";
import AddAnnouncement from "./components/Admin/AdminAnnouncement/AddAnnouncement"
import CreateTeacherAnnoucment from './components/Teacher/TeacherAnnoucment/CreateTeacherAnnoucment';
import AnnoucmentStudent from "./pages/Student/Announcements/AnnoucmentStudent";

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
      { path: "create-bootcamp", element: <CreateBootcamp /> },
      { path: "users", element: <User /> },
      { path: "users/add", element: <AddUser /> },
      { path: "domains", element: <Domains /> },
      { path: "adminannoucment", element: <AdminAnnoucment /> },
      { path: "adminannoucment/addAnnouncement", element: <AddAnnouncement /> },
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
      { path: "studentannouncements", element: <AnnoucmentStudent /> },
      // { path: "studentannouncements", element: <StudentAssigmentList /> },
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
      { path: "announcements/create-teacher-annoucement", element: <CreateTeacherAnnoucment /> },
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