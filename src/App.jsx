import "./index.css";
import SearchPage from "./pages/SearchPage";
import DeckEditor from "./pages/DeckEditor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/deckeditor" element={<DeckEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
