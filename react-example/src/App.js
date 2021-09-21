import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import BarChart from './components/BarChart';

const App = () => {

  return (
    <div className="container">
    {/* <div className="container" style={{backgroundColor: "#122e4e"}}> */}
      <Header />
      <BarChart />
    </div>
  );
}

export default App;
