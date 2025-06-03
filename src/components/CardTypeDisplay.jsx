import { React } from "react";
import useDeckStore from "../store/deckStore";
import StackedCard from "./StackedCard";

const CardTypeDisplay = ({ name, onClick }) => {
  const decks = useDeckStore((state) => state.decks);
  const deck = decks.find((deck) => deck.id === "default");
  const cardType = deck.cards
    .filter((card) => card.type_line.split(" ")[0] === name)
    .sort((a, b) => a.cmc - b.cmc);

  return (
    <>
      <div className="flex flex-row flex-wrap">
        {cardType.map((card) => (
          <div key={card.id}>
            <StackedCard card={card} onClick={onClick} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CardTypeDisplay;
