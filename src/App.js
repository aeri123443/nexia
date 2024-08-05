import React from 'react';
import './App.css';
import Battle from './Battle/Battle';
import Header from './Header/Header';
import Generation from './Generation/Generation';
import Historys from './Historys/Historys';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router basename="/nexia">
      <Header />
      <Switch>
        <Route path="/" exact component={Battle} />
        <Route path="/battle" exact component={Battle} />
        <Route path="/gen" exact component={Generation} />
        <Route path="/history" exact component={Historys} />
      </Switch>
    </Router>
  );
}

export default App;
