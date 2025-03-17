import NavBar from "./NavBar"
import { useState  } from "react";
import Card from "./Card"
import fetchCards from "../api/mtgApi";


const SearchPage = () => {
    const [query, setQuery] = useState("");
    const [cards, setCards] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    const handleSearch = async () => {
        setError("");
        setLoading(true);
        setCards([])
        try { 
            const result = await fetchCards(query);
            setCards(result);
        } catch (err) {
            setError("No cards found");
        }
        setLoading(false);
    }

    const handleKeyDown = (event) => {
        if(event.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <>
        <NavBar
        query={query}
        setQuery={setQuery}
        setError={setError}
        handleSearch={handleSearch}
        handleKeyDown={handleKeyDown}
        />
        <div className="flex flex-col items-center py-5">
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {cards && (
                <div className="grid grid-cols-4 gap-4 justify-between mx-24">
                    {cards.map((card) => (
                        <Card key={card.id} card={card} />
                    ))}
                </div>
                
            )}
        </div>
        </>

    )
}

export default SearchPage;