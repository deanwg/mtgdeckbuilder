import NavBar from "../components/NavBar";
import useDeckStore from "../store/deckStore";


const DeckEditor = () => {

const decks = useDeckStore((state) => state.decks)
const deck = decks.find((deck) => deck.id ==='default');
deck.cards.sort((a, b) => a.cmc - b.cmc);

const duplicateOffsets = [
    "top-0",
    "top-[25px]",
    "top-[50px]",
    "top-[75px]"
];

    return (
        <>
        <div className=" flex flex-col bg-black h-[100vh]">
        <NavBar />
            <div className="text-white">Creatures</div>  
            <div>
                {Object.values(
                deck.cards
                    .reduce((duplicates, card) => {
                    if (!duplicates[card.id]) {
                        duplicates[card.id] = [];
                    }
                    duplicates[card.id].push(card);
                    return duplicates;
                    }, {})
                ).map(duplicate => (
                <div key={duplicate[0].id} className="relative inline-block m-2 w-48 h-[400px]">
                    {duplicate.map((card, index) => (
                    <img
                        key={index}
                        src={card.image_uris?.border_crop}
                        alt={card.name}
                        className={`rounded-lg w-full absolute ${duplicateOffsets[index]}`}
                        style={{zIndex: index}}
                    />
                    ))}
                </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default DeckEditor;