import './index.css';
import SearchPage from './components/SearchPage';
import SyntaxPage from './pages/SyntaxPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<SearchPage />}/>
          <Route path="/syntax" element={<SyntaxPage />}/>
        </Routes>
    </Router>
  )
}

export default App
