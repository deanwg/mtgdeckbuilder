import React, { useState } from "react";
import useDeckStore from "../store/deckStore";

const CreateDeckButton = () => {
  const addDeck = useDeckStore((state) => state.addDeck);
  const [deckName, setDeckName] = useState();

  const createNewDeck = () => {
    const newId = `deck-${Date.now()}`;
    addDeck({ id: newId, name: deckName, cards: [] });
    setSelectedDeckId(newId);
  };

  return (
    <div className="p-2 bg-slate-900 border border-x-slate-900 border-b-orange-950">
      <input
        type="text"
        value={deckName}
        onChange={(e) => setDeckName(e.target.value)}
        placeholder="Deck name"
        className="border rounded border-gray-500 text-center"
      />
      <button
        className="bg-orange-700 text-white rounded p-2 m-2"
        onClick={createNewDeck}
      >
        Create New Deck
      </button>
    </div>
  );
};

export default CreateDeckButton;
