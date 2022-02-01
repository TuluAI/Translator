import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {Jumbotron} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, BrowserRouter, Router, Switch, Route} from 'react-router-dom';

//Importing components
import TranslateBox from './components/TranslateBox';
import InfoAlert from './components/InfoAlert';

//Importing pages
import Home from './pages/Home';
import Share from './pages/Share';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/share">
            <Share />
          </Route>
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
