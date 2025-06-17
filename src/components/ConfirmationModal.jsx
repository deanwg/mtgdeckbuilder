import React from "react";
import useDeckStore from "../store/deckStore";

const ConfirmationModal = ({ setConfirmationModal, deckId }) => {
  const deleteDeck = useDeckStore((state) => state.removeDeck);

  const handleDeleteDeck = () => {
    deleteDeck(deckId);
    setConfirmationModal(false);
  };

  return (
    <div className="flex flex-col bg-gray-300 rounded-md p-1">
      <div
        className="absolute right-1 hover:cursor-pointer"
        onClick={() => setConfirmationModal(false)}
      >
        x
      </div>
      <div className="p-1 m-1 mt-5 hover: cursor-default">
        Are you sure you want to delete this deck?
      </div>
      <div className="flex flex-row justify-center">
        <button
          className="bg-green-500 rounded-md p-1 m-1 mr-10"
          onClick={handleDeleteDeck}
        >
          Yes
        </button>
        <button
          className="bg-red-500 rounded-md p-1 m-1"
          onClick={() => setConfirmationModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
