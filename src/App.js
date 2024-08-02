import logo from './logo.svg';
import './App.css';
import Battle from './Battle/Battle';
import Header from './Header/Header';
import Generation from './Generation/Generation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Battle} />
        <Route path="/battle" exact component={Battle} />
        <Route path="/gen" exact component={Generation} />
      </Switch>
    </Router>
  );
}

export default App;

