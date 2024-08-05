import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Battle from './Battle/Battle';
import Header from './Header/Header';
import Generation from './Generation/Generation';
import Historys from './Historys/Historys';
import SubMenu from './SubMenu/SubMenu';

function App() {
  return (
    <Router basename="/nexia">
      <Header />
      <SubMenu />
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
