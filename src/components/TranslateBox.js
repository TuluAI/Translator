import React, {useRef, useState} from 'react';
import { Form, Alert } from 'react-bootstrap';
import tuluwords from '../utils/tuluwords.json';
import '../App.css';

function  TranslateBox(){
  //const toTranslate = useRef();
  const [translatedWord, setTranslatedWord] = useState();
  const [error, setError] = useState(false);
  const [warning, setWarning] = useState();
  //const [toTranslate, setToTranslate] = useState();
  const handleChange = (e) => {
    e.preventDefault();
    const word = tuluwords.find((w) => w.english === e.target.value.toLowerCase().trim()); 
    //const noword = tuluwords.find((w) => w.english !== e.target.value.toLowerCase().trim());
    if(word){
      setTranslatedWord(word.tulu);
      setError(false);
    }
    else if(e.target.value === ""){
      setError(false);
    }
    else {
      setTranslatedWord("");
      setError(true);
      setWarning("Translation is not available for this word as we are in still in beta and working on being able to translate all words and sentences.");
    }
  }

  return(
    <center>
    <div className="TranslateBox">
      <Form> 
        {error ? <Alert variant="danger">{warning}</Alert> : null}
        <Form.Group>
          <Form.Label>English</Form.Label>
          <Form.Control size="lg" type="text" onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Tulu</Form.Label>
          <Form.Control size="lg" type="text" placeholder={translatedWord} readOnly/>
        </Form.Group>

      </Form>
    </div>
    </center>
  );
}

export default TranslateBox;