import React, { useState } from "react";
import useDeckStore from "../store/deckStore";

const CreateDeckButton = () => {
  const addDeck = useDeckStore((state) => state.addDeck);
  const setSelectedDeck = useDeckStore((state) => state.setSelectedDeck);
  const selectedDeck = useDeckStore((state) => state.selectedDeck);
  const renameDeck = useDeckStore((state) => state.renameDeck);
  const [deckName, setDeckName] = useState("");
  const [editDeckName, setEditDeckName] = useState("");

  const createNewDeck = () => {
    const newId = `deck-${Date.now()}`;
    addDeck({ id: newId, name: deckName, cards: [] });
    setSelectedDeck(newId);
    setDeckName("");
  };

  const handleRenameDeck = () => {
    renameDeck(selectedDeck, editDeckName);
    setEditDeckName("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !" ") {
      e.preventDefault();
      createNewDeck();
    }
  };

  return (
    <div className="flex justify-between bg-slate-900 border border-x-slate-900 border-b-orange-950">
      <div className="p-2">
        <input
          type="text"
          value={deckName}
          onChange={(e) => setDeckName(e.target.value)}
          placeholder="Deck name"
          onKeyDown={(e) => {
            if (e.key === "Enter" && deckName.trim()) {
              e.preventDefault();
              createNewDeck();
            }
          }}
          className="border rounded-md border-gray-500 text-center p-2"
        />
        <button
          className="bg-orange-700 text-white rounded p-2 m-2"
          onClick={createNewDeck}
          disabled={!deckName.trim()}
        >
          Create New Deck
        </button>
      </div>
      <div>
        <input
          type="text"
          value={editDeckName}
          onChange={(e) => setEditDeckName(e.target.value)}
          placeholder="Edit Deck name"
          onKeyDown={(e) => {
            if (e.key === "Enter" && editDeckName.trim()) {
              e.preventDefault();
              handleRenameDeck();
            }
          }}
          className="border rounded-md border-gray-500 text-center p-2"
        />
        <button
          className="bg-orange-700 text-white rounded p-2 m-2"
          onClick={handleRenameDeck}
          disabled={!editDeckName.trim()}
        >
          Rename Deck
        </button>
      </div>
    </div>
  );
};

export default CreateDeckButton;
