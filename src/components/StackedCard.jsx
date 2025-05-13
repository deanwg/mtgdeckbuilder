import React from "react";

const StackedCard = ({ card, onClick }) => {
  return (
    <div className="relative inline-block m-2 w-48 h-[400px]">
      {[0, 1, 2, 3].slice(0, card.count).map((index) => (
        <img
          key={index}
          src={card.image_uris?.border_crop}
          alt={card.name}
          className="rounged-lg w-full absolute"
          style={{ top: `${index * 25}px`, zIndex: index }}
          onClick={() => onClick?.(card)}
        />
      ))}
      <span className="absolute bottom-1 right-1 text-white text-lg">
        x {card.count}
      </span>
    </div>
  );
};

export default StackedCard;
