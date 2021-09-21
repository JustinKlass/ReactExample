import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import BarChart from './components/BarChart';

function App() {

  return (
    <div className="container">
      <Header />
      <BarChart />
    </div>
  );
}

export default App;
