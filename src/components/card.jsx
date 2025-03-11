const Card = ({card}) => {

    return (
        <div className="flex flex-row rounded-lg shadow-md p-4 pr-20 mt-5 transition-all duration-200 ease-in-out hover:shadow-xl hover:scale-105">
            <img src={card.image_uris?.border_crop} alt={card.name}/>
            <div className="flex flex-col justify-between">
                {card.name}
                <br/>
                {card.type_line.split(" — ")[0]}
                {/* <button className="rounded shadow-md text-center bg-slate-200 p-1 ml-4">Add to Deck</button> */}
            </div>
        </div>
    )
}


export default Card;