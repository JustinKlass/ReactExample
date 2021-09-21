import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Header from './components/Header'
import BarChart from './components/BarChart';
import Navbar from './components/Navbar/Navbar'
import England from './pages/England/England'
import Scotland from './pages/Scotland/Scotland'

const App = () => {

  return (
    // <div className="container">
    // {/* <div className="container" style={{backgroundColor: "#122e4e"}}> */}
    //   <Header />
    //   <BarChart />
    // </div>
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path='/' exact>
            <div className="container">
            {/* <div className="container" style={{backgroundColor: "#122e4e"}}> */}
              <Header />
              <BarChart />
            </div>
          </Route>

          <Route path='/England' exact>
            <England />
          </Route>
          
          <Route path='/Scotland' exact>
            <Scotland />
          </Route>
          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
