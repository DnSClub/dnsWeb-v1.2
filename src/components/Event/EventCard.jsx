import React from "react";
import { FaGithub } from "react-icons/fa";

const EventCard = ({ eventData }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-12 w-[90%]  md:w-2/3 rounded-2xl shadow-lg p-6 text-white backdrop-blur-2xl bg-white/15">
      <div className="">
        <p className="text-purple-100 font-bold text-3xl md:text-5xl mb-2">
          {eventData.title}
        </p>
        <p className="text-2xl">{eventData.date}</p>
        <a className="col flex items-center" href={eventData.link}>
          <FaGithub />
          <p className="ml-2">more information</p>
        </a>
        <p className="mt-2 font-medium text-lg md:text-2xl mb-2">
          {eventData.description}
        </p>
      </div>
      <div className="ml-5">
        <img className="rounded-2xl pt-2" src={eventData.photoUrl}></img>
      </div>
    </div>
  );
};

export default EventCard;
