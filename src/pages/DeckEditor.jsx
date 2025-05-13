import NavBar from "../components/NavBar";
import useDeckStore from "../store/deckStore";
import QuantityEdit from "../components/QuantityEdit";
import StackedCard from "../components/StackedCard";
import { useState } from "react";

const DeckEditor = () => {
  const decks = useDeckStore((state) => state.decks);
  const deck = decks.find((deck) => deck.id === "default");
  deck.cards.sort((a, b) => a.cmc - b.cmc);
  const [editing, setEditing] = useState(false);
  const [card, setCard] = useState([]);

  const handleClick = (e) => {
    setEditing(true);
    setCard(e);
  };

  return (
    <>
      <div className="flex flex-col bg-black h-[100vh]">
        <NavBar />
        <div className="text-white">Creatures</div>
        <div>
          {deck.cards.map((card) => (
            <StackedCard key={card.id} card={card} onClick={handleClick} />
          ))}
        </div>
        {editing && <QuantityEdit card={card} />}
      </div>
    </>
  );
};

export default DeckEditor;
