import useDeckStore from "../store/deckStore";
import StackedCard from "./StackedCard";

const DeckOverlay = ({ isOpen }) => {
  const decks = useDeckStore((state) => state.decks);
  const selectedDeck = useDeckStore((state) => state.selectedDeck);
  const deck = decks.find((deck) => deck.id === selectedDeck);
  deck.cards.sort((a, b) => a.cmc - b.cmc);

  return (
    <div
      className={`fixed bottom-10 z-40 border-t-4 rounded-sm border-slate-400 border- bg-black transition-[max-height] duration-500 ${
        isOpen ? "max-h-[55vh]" : "max-h-0"
      }`}
    >
      <div className="h-[55vh] overflow-y-auto">
        <div className="h-full flex flex-wrap justify-start p-4">
          {deck.cards.map((card) => (
            <div key={card.id} className="flex flex-col items-center">
              <StackedCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeckOverlay;
