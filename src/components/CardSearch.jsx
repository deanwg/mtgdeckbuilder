import { useState  } from "react";
import Card from "./Card"
import fetchCards from "../api/mtgApi";


const CardSearch = () => {

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
        <div className="flex flex-col items-center py-5">
            <div className="flex flex-row">
                <input
                    className="border rounded border-gray-500 text-center"
                    type="text"
                    placeholder="Search for card"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onBlur={() => setError("")}
                />
                <button className="bg-orange-500 p-2 ml-3 rounded-md"onClick={handleSearch}>Search</button>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p className="test-red-500">{error}</p>}

            {cards && (
                <div className="grid grid-cols-4 gap-4 justify-between w-2/3">
                    {cards.map((card) => (
                        <Card key={card.id} card={card} />
                    ))}
                </div>
                
            )}
        </div>
    )
}


export default CardSearch;