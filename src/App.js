import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import "./index.css";
import ContactPage from "./pages/Contact/ContactPage";
import HomePage from "./pages/Home/HomePage";
import ProjectsPage from "./pages/Projects/ProjectsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/projects",
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
