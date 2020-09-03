import React from 'react';
import './App.css';

import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import NoMatch from './components/NoMatch/NoMatch';
import CountryDetails from './components/CountryDetails/CountryDetails';
function App() {
  
  return (
    <div >
  <Router>
        <Switch>
            <Route  path="/home">
                <Home/>
            </Route>
            <Route  path="/country/:countryName">
                <CountryDetails/>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          
            <Route path="*">
              <NoMatch />
            </Route>

        </Switch>
  </Router>
 
    

    </div>
  );
}

export default App;
