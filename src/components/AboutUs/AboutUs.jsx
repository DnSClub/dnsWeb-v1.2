import React from "react";
import { data } from "./ExecInfo";
import ExecDataCard from "./ExecDataCard";

function AboutUs() {
  return (
    <div className='flex flex-col justify-center items-center gap-8'>
      {data.map((exec, index) => (
        <ExecDataCard key={index} execData={exec} index={index} />
      ))}
    </div>
  );
}

export default AboutUs;
