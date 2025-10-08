import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Flights from './pages/Home/Filters/Flights';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights/filter" element={<Flights />} />
      </Routes>
    </Router>

  )
}

export default App