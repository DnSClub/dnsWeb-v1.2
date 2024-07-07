import React from "react";

const ExecDataCard = ({ execData, index }) => {
  const isEven = index % 2 === 0;
  return (
    <figure
      className={`flex flex-col md:flex-row justify-center items-start gap-12 w-[90%] md:w-2/3 rounded-2xl shadow-lg p-6 text-white backdrop-blur-2xl bg-white/15 ${
        isEven ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <img
        className="w-full h-full md:w-96 md:h-96"
        src={execData.imagePath}
        alt={execData.name}
      />
      <div className="flex flex-col gap-4 items-start px-6 py-4">
        <div className="text-purple-100 font-bold text-3xl md:text-5xl mb-2">{execData.position}</div>
        <div className="font-medium text-lg md:text-3xl mb-2">{execData.name}</div>
        <p className="text-base leading-8">{execData.description}</p>
      </div>
    </figure>
  );
};

export default ExecDataCard;
