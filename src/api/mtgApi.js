const fetchCard = async (query) => {
    if (!query.trim()) return; //simple prevent search without input - TODO: add error messaging


    try {
        const response = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${query}`); //this only works on single result searches otherwise it will be 404
        if (!response.ok) throw new Error("Card not found");


        return await response.json();

    } catch (error) {
        console.error("API Error:", error)
        throw error;
    }
}
export default fetchCard;