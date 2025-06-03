import NavBar from "../components/NavBar";
import QuantityEdit from "../components/QuantityEdit";
import { useState } from "react";
import CardTypeDisplay from "../components/CardTypeDisplay";

const DeckEditor = () => {
  const [editing, setEditing] = useState(false);
  const [card, setCard] = useState([]);

  const handleClick = (e) => {
    setCard(e);
    if (!editing) {
      setEditing(true);
    }
  };

  const close = () => {
    setEditing(false);
  };

  return (
    <>
      <div className="flex flex-col flex-wrap bg-black h-[100vh]">
        <NavBar />
        <CardTypeDisplay name="Creatures" onClick={handleClick} />
        {editing && <QuantityEdit card={card} close={close} />}
      </div>
    </>
  );
};

export default DeckEditor;
