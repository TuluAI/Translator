import React, {useRef, useState} from 'react';
import { Dropdown, DropdownButton, Form, Alert, Button, Modal } from 'react-bootstrap';
import {Link} from 'react-router-dom';
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
  const [success, setSuccess] = useState(false);
  const [shareLink, setShareLink] = useState();
  const [warning, setWarning] = useState();
  const [show, setShow] = useState(false);

  const fromLangRef = useRef()
  const toLangRef = useRef();
  //const [toTranslate, setToTranslate] = useState();
  const handleChange = (e) => {
      e.preventDefault();
      setFromLanguage(fromLangRef.current.value);
      setToLanguage(toLangRef.current.value);
      setFromLangWord(e.target.value);
      let len = e.target.value.length;
      //setFromLangWord(e.target.value);
      const word = tuluwords.find((w) => w[fromLanguage] === e.target.value.toLowerCase().trim());
      console.log(fromLangRef.current.value);
      console.log(fromLangWord);
      if(len != 0){
        if(word){
          setTranslatedWord(word[toLanguage]);
          setFromLangWord(e.target.value)
          console.log(fromLangWord.tulu);
          setError(false);
          setSuccess(true);
          const shareval = `https://translator.tuluai.tech/share?fl=${fromLanguage}&flw=${e.target.value}&tl=${toLanguage}&tlw=${word[toLanguage]}`;
          setShareLink(shareval);
          //setShareLink(`https://translator.tuluai.tech/share?fl="{fromLanguage} + "&flw=" + {fromLangWord} + "&tl=" + {toLanguage} + "&tlw=" + {translatedWord})
          console.log(error);
          console.log(success);
          console.log(len);
        }
        else {
          setTranslatedWord("");
          setFromLangWord("");
          setError(true);
          setSuccess(false);
          console.log(error);
          console.log(success);
          console.log(len);
          setWarning("Translation is not available for this word as we are in still in beta and working on being able to translate all words and sentences.");
        }
      }
      else {
        setError(false);
        setSuccess(false);
        console.log(error);
        console.log(success)
      }
  }
  
  const handleFromLanguage = (e) => {
    e.preventDefault();
    setFromLanguage(e.target.value);
  }

  return(
    <center>
    <div className="TranslateBox">
      {error ? <Alert variant="danger">{warning}</Alert> : null}
  {success ? <Alert variant="primary">Share this translation : <Link to={`/share?fl=${fromLanguage}&flw=${fromLangWord}&tl=${toLanguage}&tlw=${translatedWord}`}>{shareLink}</Link></Alert> : null}
      <Form> 
        <div className="TextArea">
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
          <Form.Control size="lg" as="textarea" rows={3} onChange={handleChange} />
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
          <Form.Control size="lg" as="textarea" rows={3} placeholder={translatedWord} readOnly/>
        </Form.Group>
    </div>
      </Form>
    </div>
    </center>
  );
}

export default TranslateBox;