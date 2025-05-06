import NavBar from "../components/NavBar";

const SyntaxPage = () => {
  return (
    <div className="bg-slate-100 h-[100vh]">
      <NavBar />
      <h1>Colours</h1>
      <p>
        You can find cards that are a certain color using the c: or color:
        keyword, and cards that are a certain color identity using the id: or
        identity: keywords.
      </p>
      <p>
        Both sets of keywords accepts full color names like blue or the
        abbreviated color letters w, u, r, b and g.
      </p>
      <p>
        Use c or colorless to match colorless cards, and m or multicolor to
        match multicolor cards.
      </p>
    </div>
  );
};

export default SyntaxPage;
