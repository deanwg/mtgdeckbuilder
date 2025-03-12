const fetchCards = async (query) => {
    if (query.trim()){
        try {
            const response = await fetch(`https://api.scryfall.com/cards/search?q=${query}`); 
            if (!response.ok) throw new Error("Card not found");

            const data = await response.json();
            return data.data;
                    
        } catch (error) {
            console.error("API Error:", error)
            throw error;
            }  
    }
}
export default fetchCards;