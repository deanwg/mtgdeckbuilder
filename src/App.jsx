import "./index.css";
import SearchPage from "./pages/SearchPage";
import SyntaxPage from "./pages/SyntaxPage";
import DeckEditor from "./pages/DeckEditor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/syntax" element={<SyntaxPage />} />
        <Route path="/deckeditor" element={<DeckEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
