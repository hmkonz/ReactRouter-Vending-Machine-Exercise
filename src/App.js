import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import VendingMachine from "./VendingMachine";
import CliffBar from "./CliffBar";
import Fritos from "./Fritos";
import Water from "./Water";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path = "/">
          <VendingMachine />
        </Route>
        <Route exact path = "/cliffbar">
          <CliffBar />
        </Route>
        <Route exact path = "/fritos">
          <Fritos />
        </Route>
        <Route exact path = "/water">
          <Water />
        </Route>
      
      </BrowserRouter>  
    </div>
  );
}

export default App;
