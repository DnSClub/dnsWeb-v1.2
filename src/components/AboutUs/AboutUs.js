import React from "react";
import { data } from "./ExecInfo";
import ExecDataCard from "./ExecDataCard";

function AboutUs() {
  return (
    <div>
      {data.map((exec, index) => (
        <ExecDataCard key={index} execData={exec} />
      ))}
    </div>
  );
}

export default AboutUs;
