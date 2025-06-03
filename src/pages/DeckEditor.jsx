import NavBar from "../components/NavBar";
import useDeckStore from "../store/deckStore";
import QuantityEdit from "../components/QuantityEdit";
import StackedCard from "../components/StackedCard";
import { useState, useEffect, useRef } from "react";

const DeckEditor = () => {
  const decks = useDeckStore((state) => state.decks);
  const deck = decks.find((deck) => deck.id === "default");
  deck.cards.sort((a, b) => a.cmc - b.cmc);
  const [editing, setEditing] = useState(false);
  const [card, setCard] = useState([]);

  const handleClick = (e) => {
    setCard(e);
    if (!editing) {
      setEditing(true);
    }
  };

  const close = () => {
    setEditing(false);
  };

  return (
    <>
      <div className="flex flex-col flex-wrap bg-black h-[100vh]">
        <NavBar />
        <div className="text-white">Creatures</div>
        <div className="flex flex-wrap">
          {deck.cards.map((card) => (
            <div key={card.id}>
              <div className="text-white text-center">x {card.count}</div>
              <StackedCard card={card} onClick={handleClick} />
            </div>
          ))}
        </div>
        {editing && <QuantityEdit card={card} close={close} />}
      </div>
    </>
  );
};

export default DeckEditor;
