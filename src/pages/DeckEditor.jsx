import NavBar from "../components/NavBar";
import QuantityEdit from "../components/QuantityEdit";
import { useState } from "react";
import CardTypeDisplay from "../components/CardTypeDisplay";
import useDeckStore from "../store/deckStore";
import CreateDeckButton from "../components/CreateDeckButton";
import ConfirmationModal from "../components/ConfirmationModal";

const DeckEditor = () => {
  const [editing, setEditing] = useState(false);
  const [card, setCard] = useState([]);
  const decks = useDeckStore((state) => state.decks);
  const selectedDeck = useDeckStore((state) => state.selectedDeck);
  const deck = decks.find((deck) => deck.id === selectedDeck);
  const [confirmationModal, setConfirmationModal] = useState(false);

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
        <div className="flex fixed right-0 bottom-0">
          <button
            className="bg-red-600 m-2 p-2 rounded-lg"
            onClick={() => setConfirmationModal(true)}
          >
            Delete Deck
          </button>
        </div>
        {confirmationModal && (
          <div className="fixed top-1/2 right-1/2 z-10">
            <ConfirmationModal
              setConfirmationModal={setConfirmationModal}
              deckId={deck.id}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default DeckEditor;
