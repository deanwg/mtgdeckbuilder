import NavBar from "../components/NavBar";
import QuantityEdit from "../components/QuantityEdit";
import { useState } from "react";
import CardTypeDisplay from "../components/CardTypeDisplay";
import useDeckStore from "../store/deckStore";
import CreateDeckButton from "../components/CreateDeckButton";

const DeckEditor = () => {
  const [editing, setEditing] = useState(false);
  const [card, setCard] = useState([]);
  const decks = useDeckStore((state) => state.decks);
  const selectedDeck = useDeckStore((state) => state.selectedDeck);
  const deck = decks.find((deck) => deck.id === selectedDeck);

  const handleClick = (e) => {
    setCard(e);
    if (!editing) {
      setEditing(true);
    }
  };

  const close = () => {
    setEditing(false);
  };

  const types = Array.from(
    new Set(
      deck.cards
        .map((card) => card.type_line?.split(" ")[0])
        .filter((type) => !type.includes("Basic"))
        .sort((a, b) => a.localeCompare(b))
    )
  );

  return (
    <>
      <div className="flex flex-col bg-black min-h-screen">
        <NavBar />
        <CreateDeckButton />
        <div className="flex flex-row flex-wrap">
          {types.map((type) => (
            <div className="flex flex-row">
              <CardTypeDisplay key={type} type={type} onClick={handleClick} />
            </div>
          ))}
        </div>
        <div className="text-white">
          <CardTypeDisplay type="Basic" onClick={handleClick} />
        </div>
        {editing && <QuantityEdit card={card} close={close} />}
      </div>
    </>
  );
};

export default DeckEditor;
