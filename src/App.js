import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Jumbotron} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importing components
import TranslateBox from './components/TranslateBox';
import InfoAlert from './components/InfoAlert';

function App() {
  return (
    <div className="App">
      <div className="Title">
        <h1>Translator by TuluAI</h1>
      </div>
      <TranslateBox />
    </div>
  );
}

export default App;
