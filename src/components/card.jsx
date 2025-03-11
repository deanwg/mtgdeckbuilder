import { useEffect, useState } from "react";


const Card = ({card}) => {
const [raised, setRaised] = useState(false)

    return (
        <div className={`flex flex-row rounded-lg shadow-md p-4 mt-5 transition-all duration-200 ease-in-out ${raised ? "shadow-2xl scale-105" : "shadow-md"}`} 
        onMouseEnter={() => setRaised(true)} 
        onMouseLeave={() => setRaised(false)}
        >
            <img src={card.image_uris?.border_crop} alt={card.name}/>
            <div className="flex flex-col">
                {card.name}
                <br/>
                {card.type_line}
            </div>
        </div>
    )
}


export default Card;