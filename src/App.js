import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/Home/HomePage";
import ContactPage from "./pages/Contact/ContactPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import Nav from "./components/Nav/Nav"; // Import Nav

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
  {
    path: "projects",
    element: <ProjectsPage />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router}>
        <Nav />
      </RouterProvider>
    </React.StrictMode>
  );
}

export default App;