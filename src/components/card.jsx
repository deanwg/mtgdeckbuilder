import { useState } from "react";
import { Add, Remove } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Card = ({ card, cardError }) => {
  const [count, setCount] = useState(1);
  const [expanded, setExpanded] = useState(false);

  const increaseCount = (e) => {
    e.stopPropagation();
    if (count < 4) {
      setCount(count + 1);
    } else {
      cardError("You can't have more than 4 cards in a standard deck", "error");
    }
  };

  const decreaseCount = (e) => {
    e.stopPropagation();
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div
        className="flex flex-row rounded-lg shadow-md bg-white mt-5 transition-all duration-200 ease-in-out hover:shadow-xl hover:scale-105 cursor-pointer"
        onClick={() => setExpanded(true)}
      >
        <div className="w-1/2">
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
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <IconButton onClick={decreaseCount}>
                <Remove />
              </IconButton>
              <input
                type="text"
                value={count}
                readOnly
                className="w-8 border border-slate-800 text-center rounded hover:cursor-default"
              />
              <IconButton onClick={increaseCount}>
                <Add />
              </IconButton>
            </div>
            <button className="rounded shadow-md text-center text-sm p-1 bg-orange-400">
              Add to Deck
            </button>
          </div>
        </div>
      </div>

      {expanded && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setExpanded(false)}
          ></div>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setExpanded(false)}
          >
            <div
              className="w-2/5 bg-white shadow-xl rounded-md relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-0 right-0 text-lg p-2 text-gray-500"
                onClick={() => setExpanded(false)}
              >
                x
              </button>
              <div className="flex flex-row">
                <div className="w-2/3">
                  <img
                    src={card.image_uris?.border_crop}
                    alt={card.name}
                    className="object-cover m-2 rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-between p-2 pr-8 max-w-96">
                  <div>
                    <h2 className="text-2xl font-bold text-center">{card.name}</h2>
                    <p className="text-lg text-slate-600 text-center">{card.type_line}</p>
                  </div>
                  <div>
                  <p className="text-lg text-slate-600 ml-4">{card.oracle_text}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 text-center">{card.flavor_text}</p>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex items-center">
                      <IconButton onClick={decreaseCount}>
                        <Remove />
                      </IconButton>
                      <input
                        type="text"
                        placeholder={count}
                        readOnly
                        className="w-8 border border-slate-800 text-center rounded hover:cursor-default"
                      />
                      <IconButton onClick={increaseCount}>
                        <Add />
                      </IconButton>
                    </div>
                    <button className="rounded shadow-md text-center text-xl p-2 bg-orange-400">
                      Add to Deck
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Card;
