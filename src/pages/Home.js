import React, {useEffect} from 'react';
import '../App.css';
import { Helmet } from 'react-helmet';

//import components
import TranslateBox from '../components/TranslateBox';
import InfoAlert from '../components/InfoAlert';
import Dictaphone from '../components/Dictaphone';

function Home(){
  {/*} useEffect(() => {
    document.title = "TuluAI Translator"
  }); */}
  return(
    <div className="Home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>TuluAI Translator</title>
          <meta name="description" content="TuluAI Translator allows people to translate any language." />
          <link rel="canonical" href="mysite.com/example" />
        </Helmet>
       <div className="Title">
        <h1><span class="logo">Tulu<span class="blue">AI</span></span> Translator</h1>
      </div>
      <TranslateBox />
      <h4>Love our product? Join our Discord below.</h4>
      <div className="">
        <a href="https://discord.gg/BSafSedY5U">
          <img height="50" src="https://img.shields.io/badge/discord-darkblue.svg?&style=for-the-badge&logo=discord&logoColor=white" />
        </a>
      </div>
    </div>
  );
}

export default Home;