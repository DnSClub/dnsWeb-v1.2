import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import ContactPage from "./pages/Contact/ContactPage";
import HomePage from "./pages/Home/HomePage";
import ProjectsPage from "./pages/Projects/ProjectsPage";

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-800 via-purple-500 to-pink-600 w-full h-full">
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="projects" element={<ProjectsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
