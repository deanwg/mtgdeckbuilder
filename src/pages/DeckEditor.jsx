import NavBar from "../components/NavBar";
import QuantityEdit from "../components/QuantityEdit";
import { useState } from "react";
import CardTypeDisplay from "../components/CardTypeDisplay";
import useDeckStore from "../store/deckStore";

const DeckEditor = () => {
  const [editing, setEditing] = useState(false);
  const [card, setCard] = useState([]);
  const decks = useDeckStore((state) => state.decks);
  const deck = decks.find((deck) => deck.id === "default");

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
        <div className="flex flex-row flex-wrap">
          {types.map((type) => (
            <div className="flex flex-row">
              <CardTypeDisplay key={type} name={type} onClick={handleClick} />
            </div>
          ))}
        </div>
        <div>
          <CardTypeDisplay name="Basic" onClick={handleClick} />
        </div>
        {editing && <QuantityEdit card={card} close={close} />}
      </div>
    </>
  );
};

export default DeckEditor;
