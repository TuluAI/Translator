import React, {useRef, useState} from 'react';
import { Dropdown, DropdownButton, Form, Alert } from 'react-bootstrap';
import tuluwords from '../utils/tuluwords.json';
import '../App.css';

function  TranslateBox(){
  //const toTranslate = useRef();
  const [fromLanguage, setFromLanguage] = useState();
  const [toLanguage, setToLanguage] = useState();
  const [language, setLanguage] = useState();
  const [fromLangWord, setFromLangWord] = useState('');
  const [translatedWord, setTranslatedWord] = useState();
  const [error, setError] = useState(false);
  const [warning, setWarning] = useState();
  const fromLangRef = useRef()
  const toLangRef = useRef();
  //const [toTranslate, setToTranslate] = useState();

  const handleChange = (e) => {
    e.preventDefault();
      setFromLanguage(fromLangRef.current.value);
      setToLanguage(toLangRef.current.value);
      const word = tuluwords.find((w) => w[fromLanguage] === e.target.value.toLowerCase().trim());
      console.log(fromLangRef.current.value);
      console.log(fromLangWord);
      if(word){
        setTranslatedWord(word[toLanguage]);
        console.log(fromLangWord.tulu);
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
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="hindi-english">Hindi (English Text)</option>
            <option value="marathi">Marathi</option>
            <option value="marathi-english">Marathi (English Text)</option>
            <option value="tulu">Tulu</option>
          </Form.Control>  
          <Form.Control size="lg" type="text" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Translate To</Form.Label>
          <Form.Control as="select" ref={toLangRef}>
            <option>Select Language</option>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="hindi-english">Hindi (English Text)</option>
            <option value="korean-english">Korean (English Text)</option>
            <option value="marathi">Marathi</option>
            <option value="marathi-english">Marathi (English Text)</option>
            <option value="tulu">Tulu</option>
          </Form.Control> 
          <Form.Control size="lg" type="text" placeholder={translatedWord} readOnly/>
        </Form.Group>

      </Form>
    </div>
    </center>
  );
}

export default TranslateBox;