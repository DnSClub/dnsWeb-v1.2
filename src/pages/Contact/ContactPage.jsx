import React from "react";
import PageHeader from "../../components/Header/PageHeader";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";

function ContactPage() {
  return (
    <div className="pb-8">
      <PageHeader pageTitle="contact us" />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default ContactPage;
