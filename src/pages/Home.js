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
    {/*}  <Dictaphone /> */}
    </div>
  );
}

export default Home;