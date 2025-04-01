import NavBar from "../components/NavBar";
import useDeckStore from "../store/deckStore";
import QuantityEdit from "../components/QuantityEdit";
import { useState } from "react";


const DeckEditor = () => {

const decks = useDeckStore((state) => state.decks)
const deck = decks.find((deck) => deck.id ==='default');
deck.cards.sort((a, b) => a.cmc - b.cmc);
const [editing, setEditing] = useState(false);
const [card, setCard] = useState([]);




const handleClick = (e) => {
    setEditing(true);
    setCard(e);
}
const duplicateOffsets = [
    "top-0",
    "top-[25px]",
    "top-[50px]",
    "top-[75px]"
];

    return (
        <>
        <div className="flex flex-col bg-black h-[100vh]">
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
                        onClick={() => handleClick(card)}
                    />
                    ))}
                </div>
                ))}
            </div>
            {editing && (
                <QuantityEdit card={card} />
            )}
        </div>
        </>
    )
}

export default DeckEditor;