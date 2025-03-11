import { useState  } from "react";
import Card from "./Card"
import fetchCard from "../api/mtgApi";


const CardSearch = () => {

    const [query, setQuery] = useState("");
    const [card, setCard] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    const handleSearch = async () => {
        setError("");
        setLoading(true);

        try { 
            const result = await fetchCard(query);
            setCard(result);
        } catch (err) {
            setError("Card not found");
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
                    className="border border-gray-500 rounded text-center"
                    type="text"
                    placeholder="Search for card"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button className="bg-orange-500 p-2 ml-3 rounded-md"onClick={handleSearch}>Search</button>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p className="test-red-500">{error}</p>}

            {card && (
                <div>
                    <Card card={card}/>
                </div>
            )}
        </div>
    )
}


export default CardSearch;