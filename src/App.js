import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Notes from "./Pages/Notes/Notes";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Login /> },
        {
          path: "notes",
          element: (
            <ProtectedRoute>
              <Notes />
            </ProtectedRoute>
          ),
        },

        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}
