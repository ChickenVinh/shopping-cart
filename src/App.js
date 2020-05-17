import React from 'react';
import Navbar from './Components/Navbar'
import { Switch, Route } from 'react-router-dom';
import Shop from './Components/Shop'
import Cart from './Components/Cart'
function App() {
  return (
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path = '/' component = {Shop} />
          <Route path = "/cart" component = {Cart} />
        </Switch>
    </div>
  );
}

export default App;
