import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";

function HomePage() {
  return (
    <div className="pb-8">
      <Hero />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default HomePage;
