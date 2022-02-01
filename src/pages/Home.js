import React, {useEffect} from 'react';
import '../App.css';

//import components
import TranslateBox from '../components/TranslateBox';
import InfoAlert from '../components/InfoAlert';

function Home(){
  useEffect(() => {
    document.title = "Translator by TuluAI"
  });
  return(
    <div className="Home">
       <div className="Title">
        <h1><span class="logo">Tulu<span class="blue">AI</span></span> Translator</h1>
      </div>
      <TranslateBox />
    </div>
  );
}

export default Home;