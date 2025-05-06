import { useEffect, useState } from "react";
import useDeckStore from "../store/deckStore";
import { Add, Remove } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const QuantityEdit = ({ card }) => {
  const decks = useDeckStore((state) => state.decks);
  const deck = decks.find((deck) => deck.id === "default");
  const initialCount = deck.cards.find((c) => c.name === card.name).count;
  const [count, setCount] = useState();
  const updateQuantity = useDeckStore((state) => state.updateQuantity);

  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  const increaseCount = (e) => {
    e.stopPropagation();
    if (count < 4) {
      setCount(count + 1);
    }
  };

  const decreaseCount = (e) => {
    e.stopPropagation();
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleChangeQuantity = () => {
    updateQuantity("default", { ...card, count });
  };

  return (
    <div className="absolute z-10 right-0 h-full p-6 bg-black border border-black border-l-orange-600 border-l-8 rounded-l-xl w-1/3">
      <div className="flex flex-col bg-slate-200 shadow-lg shadow-slate-600 rounded-lg m-4">
        <div className="flex items-center justify-center">
          <img
            src={card.image_uris?.border_crop}
            alt={card.name}
            className="m-2 rounded-lg w-3/5"
          />
        </div>
        <div className="flex flex-col justify-between p-2">
          <div>
            <h2 className="text-2xl font-bold text-center">{card.name}</h2>
            <p className="text-lg text-slate-600 text-center">
              {card.type_line}
            </p>
          </div>
          <div>
            <p className="text-lg text-slate-600 ml-4">{card.oracle_text}</p>
          </div>
          <div>
            <p className="text-sm text-slate-600 text-center">
              {card.flavor_text}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <IconButton onClick={decreaseCount}>
                <Remove />
              </IconButton>
              <input
                type="text"
                value={count}
                readOnly
                className="w-8 border border-slate-800 text-center rounded hover:cursor-default"
              />
              <IconButton onClick={increaseCount}>
                <Add />
              </IconButton>
            </div>
            <button
              className="rounded shadow-md text-center text-sm p-3 bg-orange-400"
              onClick={handleChangeQuantity}
            >
              Change Quantity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantityEdit;
