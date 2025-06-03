import { React } from "react";
import useDeckStore from "../store/deckStore";
import StackedCard from "./StackedCard";

const CardTypeHeader = ({ name, onClick }) => {
  const decks = useDeckStore((state) => state.decks);
  const deck = decks.find((deck) => deck.id === "default");
  deck.cards.sort((a, b) => a.cmc - b.cmc);

  return (
    <>
      <div className="text-orange-400 p-2 m-2 font-bold">{name}</div>
      <div className="flex flex-wrap">
        {deck.cards.map((card) => (
          <div key={card.id}>
            <div className="text-white text-center">x {card.count}</div>
            <StackedCard card={card} onClick={onClick} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CardTypeHeader;
