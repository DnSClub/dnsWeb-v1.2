import React from "react";

const ExecDataCard = ({ execData, index }) => {
  const isEven = index % 2 === 0;
  return (
    <figure
      className={`flex justify-center items-start gap-12 w-2/3 rounded-2xl shadow-lg p-6 text-white ${
        isEven ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <img
        className="w-96 h-96"
        src={execData.imagePath}
        alt={execData.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{execData.position}</div>
        <div className="font-bold text-xl mb-2">{execData.name}</div>
        <p className="text-white text-base">{execData.description}</p>
      </div>
    </figure>
  );
};

export default ExecDataCard;
