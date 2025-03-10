import { useState  } from "react";


const CardSearch = () => {

    const [query, setQuery] = useState("");
    const [card, setCard] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    const fetchCard = async () => {
        if (!query.trim()) return; //simple prevent search without input - TODO: add error messaging

        setLoading(true);
        setError("");
        setCard(null);

        try {
            const response = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${query}`); //this only works on single result searches otherwise it will be 404
            if (!response.ok) throw new Error("Card not found");


            const data = await response.json();
            setCard(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    const handleKeyDown = (event) => {
        if(event.key === "Enter") {
            fetchCard();
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
                <button className="bg-orange-500 p-2 ml-3 rounded-md"onClick={fetchCard}>Search</button>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p className="test-red-500">{error}</p>}

            {card && (
                <div>
                    <h1>{card.name}</h1>
                    <img src={card.image_uris.normal} alt={card.name}/>
                </div>
            )}
        </div>
    )
}


export default CardSearch;