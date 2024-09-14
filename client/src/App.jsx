import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Trademarkia from './Trademarkia';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Trademarkia />} />
      </Routes>
    </Router>
  );
};

export default App
