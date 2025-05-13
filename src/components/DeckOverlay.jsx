import useDeckStore from "../store/deckStore";
import StackedCard from "./StackedCard";

const DeckOverlay = ({ isOpen }) => {
  const decks = useDeckStore((state) => state.decks);
  const deck = decks.find((deck) => deck.id === "default");
  deck.cards.sort((a, b) => a.cmc - b.cmc);

  return (
    <div
      className={`bg-black overflow-hidden transition-all duration-500 ${
        isOpen ? "max-h-[10000px] min-h-[43vh]" : "max-h-0 min-h-0"
      }`}
    >
      <div className="h-full flex flex-wrap justify-start p-4">
        {deck.cards.map((card) => (
          <div key={card.id} className="flex flex-col items-center">
            <StackedCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeckOverlay;
