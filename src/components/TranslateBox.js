import React, {useRef, useState} from 'react';
import { Dropdown, DropdownButton, Form, Alert } from 'react-bootstrap';
import tuluwords from '../utils/tuluwords.json';
import '../App.css';

function  TranslateBox(){
  //const toTranslate = useRef();
  const [fromLanguage, setFromLanguage] = useState();
  const [toLanguage, setToLanguage] = useState();
  const [language, setLanguage] = useState();
  const [translatedWord, setTranslatedWord] = useState();
  const [error, setError] = useState(false);
  const [warning, setWarning] = useState();
  const fromLangRef = useRef();
  //const [toTranslate, setToTranslate] = useState();
  const handleChange = (e) => {
    e.preventDefault();
    if(fromLangRef.current.value === "English"){
      console.log(e.target.value);
      const word = tuluwords.find((w) => w.english === e.target.value.toLowerCase().trim()); 

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
    else if(fromLangRef.current.value === "Hindi"){
      const word = tuluwords.find((w) => w.hindi === e.target.value.toLowerCase().trim()); 

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

    else if(fromLangRef.current.value === "Marathi"){
      const word = tuluwords.find((w) => w.marathi === e.target.value.toLowerCase().trim());

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
    //const noword = tuluwords.find((w) => w.english !== e.target.value.toLowerCase().trim());
  }

  const handleFromLanguage = (e) => {
    e.preventDefault();
    setFromLanguage(e.target.value);
  }

  return(
    <center>
    <div className="TranslateBox">
      <Form> 
        {error ? <Alert variant="danger">{warning}</Alert> : null}
        <Form.Group>
            {/* <DropdownButton id="basic-dropdown-button" title="Translate From" onChange={handleFromLanguage}>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Hindi</Dropdown.Item>
              <Dropdown.Item>Kannada</Dropdown.Item>
            </DropdownButton> */}
          <Form.Label>Translate From</Form.Label>
          <Form.Control as="select" ref={fromLangRef}>
            <option>Select Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Marathi">Marathi</option>
          </Form.Control>  
          <Form.Control size="lg" type="text" onChange={handleChange} />
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