import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sidebar from './components/AdminDashboard/Sidebar'

const App = () => {

  let router = createBrowserRouter([
    {
      path: "/",
      element: <Sidebar />
    }
  ])
  return (
   <RouterProvider router={router}>

   </RouterProvider>
  )
}

export default App
