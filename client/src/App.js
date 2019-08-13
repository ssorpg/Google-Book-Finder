import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navs from './components/Navs/Navs'
import Header from './components/Header/Header';
import SearchBooks from './components/SearchBooks/SearchBooks';
import SavedBooks from './components/SavedBooks/SavedBooks';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navs />
        <Header />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SavedBooks} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
