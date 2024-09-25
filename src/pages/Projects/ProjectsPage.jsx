import React from "react";
import Footer from "../../components/Footer/Footer";
import Events from "../../components/Event/Events";
import PageHeader from "../../components/Header/PageHeader";

function ProjectsPage() {
  return (
    <div className="pb-8">
      <PageHeader pageTitle="projects & events" />
      <Events />
      <Footer />
    </div>
  );
}

export default ProjectsPage;
