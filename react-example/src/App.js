import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
// import Header from './components/Header'

import Navbar from './components/Navbar/Navbar'

import England from './pages/England/England'
import Scotland from './pages/Scotland/Scotland'
import UnitedKingdom from './pages/UnitedKingdom/UnitedKingdom'

const App = () => {

  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path='/' exact>

            {/* <div className="container" style={{backgroundColor: "#122e4e"}}> */}
              {/* <Header /> */}
              <UnitedKingdom/>
              {/* <BarChart url={englandData}/> */}
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