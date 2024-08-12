import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { contactData } from "./ContactInfo";

function ContactUs() {
  return (
    <div className="flex flex-col items-center md:gap-12 p-6 mb-8 text-white text-lg md:text-2xl backdrop-blur-2xl bg-white/15 w-[90%] md:w-2/3 mx-auto rounded-2xl">
      {contactData.map((data, index) => (
        <a
          className="flex items-center mb-4" // Add margin-bottom to space out items
          key={index}
          href={data.link}
        >
          {data.icon === "MdOutlineEmail" && <MdOutlineEmail />}
          {data.icon === "CiLinkedin" && <CiLinkedin />}
          {data.icon === "FaInstagram" && <FaInstagram />}
          {data.icon === "FaDiscord" && <FaDiscord />}
          <p className="ml-2">{data.title}</p>
        </a>
      ))}
    </div>
  );
}

export default ContactUs;
