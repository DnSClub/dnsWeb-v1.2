import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import ContactPage from "./pages/Contact/ContactPage";
import HomePage from "./pages/Home/HomePage";
import ProjectsPage from "./pages/Projects/ProjectsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/contact", element: <ContactPage /> },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-800 via-purple-500 to-pink-600 w-full h-full">
        <React.StrictMode>
          <RouterProvider router={router}></RouterProvider>
        </React.StrictMode>
      </div>
    </>
  );
}

export default App;
