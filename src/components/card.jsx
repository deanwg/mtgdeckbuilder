import { useState } from "react";
import  { Add, Remove } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Card = ({card}) => {

    const [count, setCount] = useState(1);

    const increaseCount = () => {
        if (count < 4) {
            setCount(count+1);
        }
    }

    const decreaseCount = () => {
        if (count > 1) {
            setCount(count-1);
        }
    }

    return (
        <div className="flex flex-row rounded-lg shadow-md mt-5 transition-all duration-200 ease-in-out hover:shadow-xl hover:scale-105">
            <div className="w-2/4">
                <img 
                    src={card.image_uris?.border_crop} 
                    alt={card.name} 
                    className="object-cover m-2 rounded-l-lg"
                />
            </div>
            <div className="flex flex-col justify-between ml-2 p-2 w-2/5">
                <div>
                    <h2 className="text-lg font-bold truncate">{card.name}</h2>
                    <p className="text-sm text-slate-600">
                        {card.type_line.split(" — ")[0]}
                    </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                    <div className="flex items-center space-x-1">
                        <IconButton onClick={() => decreaseCount()}>
                            <Remove />
                        </IconButton>
                        <input
                            type="text"
                            placeholder={count}
                            readOnly
                            className="w-8 border border-slate-800 text-center rounded"
                        />
                        <IconButton onClick={() => increaseCount()}>
                            <Add />
                        </IconButton>
                    </div>
                    <button className="rounded shadow-md text-center bg-slate-200 p-1">Add to Deck</button>
                </div>
            </div>
        </div>
    )
}


export default Card;