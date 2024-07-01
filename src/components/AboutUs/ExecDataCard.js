import React from "react";

const ExecDataCard = ({ execData }) => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={`${execData.imagePath}`}
        alt={`${execData.name}`}
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{execData.position}</div>
        <div class="font-bold text-xl mb-2">{execData.name}</div>
        <p class="text-gray-700 text-base">{execData.description}</p>
      </div>
    </div>
  );
};

export default ExecDataCard;
