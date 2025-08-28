import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import fetchCards from "../api/mtgApi";
import Toast from "../components/Toast";
import { useLocation } from "react-router-dom";
import DeckOverlay from "../components/DeckOverlay";
import CardSkeleton from "../components/CardSkeletion";

const SearchPage = () => {
  const location = useLocation();
  const initialQuery = location.state?.query || "";
  const [query, setQuery] = useState("");
  const [cards, setCards] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ message: "", toastStyle: "info" });
  const [displayDeck, setDisplayDeck] = useState(false);
  const [colourFilters, setColourFilters] = useState([]);

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
      handleSearch(initialQuery);
    }
  }, [initialQuery]);

  useEffect(() => {
    handleSearch(query);
  }, [colourFilters]);

  const buildQuery = (searchTerm, colourFilters) => {
    const scryFallColours = ["B", "U", "R", "G", "W", "C"];
    let selectedColours = colourFilters.map((i) => scryFallColours[i]).join("");
    if (selectedColours.includes("C")) selectedColours = "C";
    if (!selectedColours) return searchTerm;

    return `${searchTerm} c:${selectedColours}`;
  };

  const handleSearch = async (searchTerm = query) => {
    setError("");
    setLoading(true);
    setCards([]);

    const fullQuery = buildQuery(searchTerm, colourFilters);
    try {
      const result = await fetchCards(fullQuery);
      setCards(result);
    } catch (err) {
      setError("No cards found");
    }
    setLoading(false);
  };

  const handleToast = (message, toastStyle) => {
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
      <NavBar
        colourFilters={colourFilters}
        setColourFilters={setColourFilters}
      />
      <div className="flex flex-col min-h-[calc(100vh-56px)] bg-slate-100">
        <div
          className={`flex-1 overflow-auto py-5 transition-all duration-500 ${
            displayDeck ? "pb-[260px]" : "pb-20"
          }`}
        >
          <div className="container mx-auto w-full px-4">
            {loading && (
              <div className="grid grid-cols-4 gap-4 justify-between">
                {Array.from({ length: 8 }).map((_, i) => (
                  <CardSkeleton key={i} />
                ))}
              </div>
            )}
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {toast.message && (
            <Toast
              message={toast.message}
              clearMessage={clearToast}
              toastStyle={toast.toastStyle}
            />
          )}
          <div className="container mx-auto w-full px-8">
            {cards && (
              <div className="grid grid-cols-4 gap-4 justify-between">
                {cards.map((card) => (
                  <Card key={card.id} card={card} toast={handleToast} />
                ))}
              </div>
            )}
          </div>
        </div>
        <DeckOverlay isOpen={displayDeck} />
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-400 h-10 flex items-center">
        <div className="flex bg-orange-600 w-1/12 rounded-lg ml-5 my-2 justify-center">
          Deck Overlay
        </div>
        <div
          className={`flex text-2xl absolute left-1/2 text-white hover:cursor-pointer ${
            displayDeck ? "rotate-180" : ""
          }`}
          onClick={() => setDisplayDeck((v) => !v)}
        >
          ^
        </div>
      </div>
    </>
  );
};

export default SearchPage;
