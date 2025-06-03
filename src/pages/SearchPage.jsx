import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import fetchCards from "../api/mtgApi";
import Toast from "../components/Toast";
import { useLocation } from "react-router-dom";
import DeckOverlay from "../components/DeckOverlay";

const SearchPage = () => {
  const location = useLocation();
  const initialQuery = location.state?.query || "";
  const [query, setQuery] = useState("");
  const [cards, setCards] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ message: "", toastStyle: "info" });
  const [displayDeck, setDisplayDeck] = useState(false);

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
      handleSearch(initialQuery);
    }
  }, [initialQuery]);

  const handleSearch = async (searchTerm = query) => {
    setError("");
    setLoading(true);
    setCards([]);
    try {
      const result = await fetchCards(searchTerm);
      setCards(result);
    } catch (err) {
      setError("No cards found");
    }
    setLoading(false);
  };

  const handleCardError = (message, toastStyle) => {
    setToast({ message, toastStyle });
  };

  const clearToast = () => {
    setToast({ message: "", toastStyle: "" });
  };

  const handleDisplayDeck = () => {
    if (displayDeck) {
      setDisplayDeck(false);
    } else {
      setDisplayDeck(true);
    }
  };

  return (
    <>
      <NavBar />
      <div
        className={`flex flex-col items-center py-5 overflow-auto bg-slate-100 transition-all duration-500 ${
          displayDeck ? "h-[50vh]" : "h-[93vh]"
        }`}
      >
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {toast.message && (
          <Toast
            message={toast.message}
            clearMessage={clearToast}
            toastStyle={toast.toastStyle}
          />
        )}
        {cards && (
          <div className="grid grid-cols-4 gap-4 justify-between mx-24">
            {cards.map((card) => (
              <Card key={card.id} card={card} cardError={handleCardError} />
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-row  bg-slate-400">
        <div className="flex bg-orange-600 w-1/12 rounded-lg ml-5 my-2 justify-center">
          Deck Overlay
        </div>
        <div
          className={`flex text-2xl absolute left-1/2 text-white hover:cursor-pointer ${
            displayDeck ? "rotate-180" : ""
          }`}
          onClick={handleDisplayDeck}
        >
          ^
        </div>
      </div>
      <DeckOverlay isOpen={displayDeck} />
    </>
  );
};

export default SearchPage;
