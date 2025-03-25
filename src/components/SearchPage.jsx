import NavBar from "./NavBar"
import { useState, useEffect  } from "react";
import Card from "./Card"
import fetchCards from "../api/mtgApi";
import Toast from "./toast";
import { useLocation } from "react-router-dom";
import DeckOverlay from "./DeckOverlay";


const SearchPage = () => {
    const location = useLocation();
    const initialQuery = location.state?.query || "";

    const [query, setQuery] = useState("");
    const [cards, setCards] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [toast , setToast] = useState({message: "", toastStyle: "info"});

    useEffect(() => {
        if (initialQuery) {
            setQuery(initialQuery);
            handleSearch(initialQuery);
        }
    }, [initialQuery]);

    const handleSearch = async (searchTerm = query) => {
        setError("");
        setLoading(true);
        setCards([])
        try { 
            const result = await fetchCards(searchTerm);
            setCards(result);
        } catch (err) {
            setError("No cards found");
        }
        setLoading(false);
    }

    const handleCardError = (message, toastStyle) => {
        setToast({message, toastStyle});
      };
    
      const clearToast = () => {
        setToast({message: "", toastStyle: ""});
      };

    return (
        <>
        <NavBar />
        <div className="flex flex-col items-center py-5 bg-slate-100 h-[50vh] overflow-y-auto">
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {toast.message && <Toast message={toast.message} clearMessage={clearToast} toastStyle={toast.toastStyle}/>}
            {cards && (
                <div className="grid grid-cols-4 gap-4 justify-between mx-24">
                    {cards.map((card) => (
                        <Card key={card.id} card={card} cardError={handleCardError}/>
                    ))}
                </div>
                
            )}
        </div>
        <DeckOverlay />
        </>

    )
}

export default SearchPage;