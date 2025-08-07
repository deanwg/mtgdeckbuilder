import React, { useState } from "react";
import BlackIcon from "../icons/Black.png";
import BlueIcon from "../icons/Blue.png";
import RedIcon from "../icons/Red.png";
import GreenIcon from "../icons/Green.png";
import WhiteIcon from "../icons/White.png";
import ColourlessIcon from "../icons/Colourless.png";

const ColourFilter = ({ colourFilters, setColourFilters }) => {
  const icons = [
    { src: BlackIcon, colour: "shadow-black" },
    { src: BlueIcon, colour: "shadow-blue-900" },
    { src: RedIcon, colour: "shadow-red-900" },
    { src: GreenIcon, colour: "shadow-green-900" },
    { src: WhiteIcon, colour: "shadow-yellow-400" },
    { src: ColourlessIcon, colour: "shadow-gray-600" },
  ];

  const handleClick = (index) => {
    setColourFilters((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="flex flex-row h-9 space-x-2">
      {icons.map((icon, index) => {
        return (
          <img
            key={index}
            src={icon.src}
            onClick={() => handleClick(index)}
            className={`cursor-pointer rounded-3xl transition ${
              colourFilters.includes(index)
                ? `shadow-lg ${icon.colour} border border-gray-50`
                : ``
            } hover:scale-105`}
          />
        );
      })}
    </div>
  );
};

export default ColourFilter;
