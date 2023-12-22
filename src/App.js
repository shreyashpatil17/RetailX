import './App.css';
import Home from "./Pages/HomePage/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from "./Pages/AboutPage/About";

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
