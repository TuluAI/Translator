import React from 'react';
import { Alert } from 'react-bootstrap'
import '../App.css';


function InfoAlert(){
  return(
    <center>
    <div className="InfoAlert">
      <Alert variant="primary">This product is currently in beta and most the words and sentences are not yet available due to which we cannot translate it at the moment.</Alert>
    </div>
   </center>    
    );
   
  
  
  }
export default InfoAlert;