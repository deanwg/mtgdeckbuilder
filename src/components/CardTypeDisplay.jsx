import { React } from "react";
import useDeckStore from "../store/deckStore";
import StackedCard from "./StackedCard";

const CardTypeDisplay = ({ type, onClick }) => {
  const decks = useDeckStore((state) => state.decks);
  const selectedDeck = useDeckStore((state) => state.selectedDeck);
  const deck = decks.find((deck) => deck.id === selectedDeck);
  const cardType = deck.cards
    .filter((card) => card.type_line.split(" ")[0] === type)
    .sort((a, b) => a.cmc - b.cmc);

  return (
    <>
      <div className="flex flex-row flex-wrap">
        {cardType.map((card) => (
          <div key={card.id} className="flex flex-col text-center relative">
            <StackedCard card={card} onClick={onClick} />
            {type === "Basic" && (
              <span className="text-orange-500 text-lg bg-black rounded-lg opacity-50 p-2 absolute bottom-10 right-5 z-50">
                x {card.count}
              </span>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CardTypeDisplay;
