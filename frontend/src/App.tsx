import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePageContent from './HomePageContent';
import CardPageContent from './CardPageContent';

function App() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePageContent />} />
            <Route path="/card/:title" element={<CardPageContent />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
}

export default App;
