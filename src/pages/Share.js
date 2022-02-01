import React from 'react';
import '../App.css';
import {useHistory, useLocation} from 'react-router-dom';

function useQuery(){
  return new URLSearchParams(useLocation().search); 
}

function Share(){
  const params = useQuery();
  const url_fl = params.get('fl');
  const url_flw = params.get('flw');
  const url_tl = params.get('tl');
  const url_tlw = params.get('tlw');
  return(
    <div className="Share">
      <div className="Title">
        <h1><span class="logo">Tulu<span class="blue">AI</span></span> Translator</h1>
      </div>
      <div className="ST">
        <h2><span>{url_fl}</span> : <span>{url_flw}</span></h2>
        <h2><span>{url_tl}</span> : <span>{url_tlw}</span></h2>
      </div>
    </div>
  );
}

export default Share;
