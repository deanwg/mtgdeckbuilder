import { useEffect, useState } from "react";
import useDeckStore from "../store/deckStore";
import {
  Add,
  Remove,
  DeleteForever as Delete,
  Close,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

const QuantityEdit = ({ card, close }) => {
  const decks = useDeckStore((state) => state.decks);
  const selectedDeck = useDeckStore((state) => state.selectedDeck);
  const deck = decks.find((deck) => deck.id === selectedDeck);
  const initialCount = deck.cards.find((c) => c.name === card.name)?.count ?? 0;
  const [count, setCount] = useState(initialCount);
  const updateQuantity = useDeckStore((state) => state.updateQuantity);
  const removeCard = useDeckStore((state) => state.removeCardFromDeck);
  const isBasicLand = card.type_line.startsWith("Basic");
  const maxAllowed = isBasicLand ? 24 : 4;

  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  const increaseCount = (e) => {
    e.stopPropagation();
    if (count < maxAllowed) {
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
    updateQuantity(selectedDeck, { ...card, count });
  };

  const handleRemove = () => {
    setCount(0);
    removeCard(selectedDeck, card);
    close();
  };

  return (
    <div className="fixed z-10 right-0 h-full bg-black border border-black border-l-orange-600 border-l-8 rounded-l-xl w-1/3">
      <div className="flex flex-col bg-slate-200 shadow-lg shadow-slate-600 rounded-lg m-4">
        <div className="flex justify-end">
          <IconButton onClick={close}>
            <Close />
          </IconButton>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={card.image_uris?.border_crop}
            alt={card.name}
            className="m-2 rounded-lg w-3/5 mt-5"
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
            <div>
              <button
                className="rounded shadow-md text-center text-sm p-3 ml-8 bg-orange-400"
                onClick={handleChangeQuantity}
              >
                Change Quantity
              </button>
              <IconButton onClick={handleRemove}>
                <Delete className="[&>path]:fill-red-500" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantityEdit;
