import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/Header/PageHeader";

function HomePage() {
  return (
    <div className="pb-8">
      <PageHeader
        pageTitle="dns"
        desc1="developers and systems"
        desc2="created by first years, made for all"
        imgUrl="/images/donut.gif"
      />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default HomePage;
