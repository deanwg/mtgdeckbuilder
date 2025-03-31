import useDeckStore from "../store/deckStore";



const DeckOverlay = () => {

const decks = useDeckStore((state) => state.decks)
// const deck = decks.find((deck) => deck.id === "default").cards.sort((a, b) => a.cmc - b.cmc);
const deck = decks.find((deck) => deck.id ==='default');
deck.cards.sort((a, b) => a.cmc - b.cmc);
 

    return (
           <div className="bg-black h-screen overflow-auto">
            <h1 className="flex bg-orange-600 w-1/12 rounded-lg ml-5 mt-2 justify-center">Deck Overlay</h1>
                <div className="flex flex-wrap justify-start p-4">
                    {deck.cards.map((card) => (
                        <img
                        src={card.image_uris?.border_crop}
                        alt={card.name}
                        className="m-2 rounded-lg w-48"
                        />                    
                    ))}
                </div>  
           </div>
    )
}

export default DeckOverlay;