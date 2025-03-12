import { useState } from "react";

const Card = ({card}) => {

    const [count, setCount] = useState(1);

    return (
        <div className="flex flex-row rounded-lg shadow-md p-4 pr-20 mt-5 transition-all duration-200 ease-in-out hover:shadow-xl hover:scale-105 hover:cursor-pointer">
            <img src={card.image_uris?.border_crop} alt={card.name}/>
            <div className="flex flex-col justify-between">
                {card.name}
                <br/>
                {card.type_line.split(" — ")[0]}
            </div>
        </div>
    )
}


export default Card;