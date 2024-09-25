import React from "react";
import { eventData } from "./EventInfo";
import EventCard from "./EventCard";

function Events() {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      {eventData.map((data, index) => (
        <EventCard key={index} eventData={data}></EventCard>
      ))}
    </div>
  );
}

export default Events;
