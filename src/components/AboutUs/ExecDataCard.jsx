import React from "react";

const ExecDataCard = ({ execData }) => {
  return (
    <figure className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={`${execData.imagePath}`}
        alt={`${execData.name}`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{execData.position}</div>
        <div className="font-bold text-xl mb-2">{execData.name}</div>
        <p className="text-gray-700 text-base">{execData.description}</p>
      </div>
    </figure>
  );
};

export default ExecDataCard;
