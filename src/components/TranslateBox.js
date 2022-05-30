import React, {useRef, useState} from 'react';
import { Dropdown, DropdownButton, Form, Alert, Button, Modal, Jumbotron } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import tuluwords from '../utils/tuluwords.json';
import '../App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

//utils
import { db } from '../utils/Firebase';

function  TranslateBox(){
  //const toTranslate = useRef();
  const [fromLanguage, setFromLanguage] = useState();
  const [fromSpeechValue, setFromSpeechValue] = useState();
  const [toLanguage, setToLanguage] = useState();
  const [language, setLanguage] = useState();
  const [fromLangWord, setFromLangWord] = useState('');
  const [translatedWord, setTranslatedWord] = useState();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [shareLink, setShareLink] = useState();
  const [warning, setWarning] = useState();
  const [show, setShow] = useState(false);
  const [button, setButton] = useState(false);

  const fromLangRef = useRef()
  const toLangRef = useRef();
  const fromLangWordRef = useRef();
  const toLangWordRef = useRef();
  //const [toTranslate, setToTranslate] = useState();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const startVoice = (e) => {
    e.preventDefault();
    if(toLangWordRef.current.value != undefined){
      setFromLanguage(fromLangRef.current.value);
      setToLanguage(toLangRef.current.value);
      SpeechRecognition.startListening({ continuous: true });
      setFromSpeechValue(transcript);
      setFromLangWord(transcript);
      console.log(fromLangWord); 
      const word = tuluwords.find((w) => w[fromLanguage] === fromLangWord.toLowerCase().trim());
      if(word){
          setTranslatedWord(word[toLanguage]);
      }    
    } 
  }

  const stopVoice = (e) => {
    e.preventDefault();
    SpeechRecognition.stopListening();
    setFromSpeechValue("");
  }

  const addToDatabase = (e) => {
    e.preventDefault();
    let feedbackRef = db.ref("feedback");
    let feedbackList = {
      language : fromLangRef.current.value,
      word: fromLangWordRef.current.value
    }
    feedbackRef.push(feedbackList);
  }
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
          setButton(false);
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
          setButton(true);
          console.log(error);
          console.log(success);
          console.log(len);
          setWarning("Translation is not available for this word as we are in still in beta. Please click the button below so that we can add transaltion for it.");
        }
      }
      else {
        setError(false);
        setSuccess(false);
        setButton(false);
        console.log(error);
        console.log(success)
      }
  }
  
/*
  const fromLangChange = (e) => {
    e.preventDefault();
    if(fromLangWordRef.current.value != undefined){
      //setFromLanguage(e.target.value);
      setFromLangWord(fromLangWordRef.current.value)
      
    }
  }
*/
  
  const toLangChange = (e) => {
    e.preventDefault();
 /*   if(fromLangWordRef.current.value === undefined){
      return
    } 
    //else{ */
    //setTranslatedWord(toLangWordRef.current.value);
    if(toLangWordRef.current.value != undefined){
      setFromLanguage(fromLangRef.current.value);
      setFromLangWord(fromLangWordRef.current.value);
      //setToLanguage(e.target.value); 
      const word = tuluwords.find((w) => w[fromLanguage] === fromLangWord.toLowerCase().trim());
      if(word){
        setTranslatedWord(word[e.target.value]);
        const shareval = `https://translator.tuluai.tech/share?fl=${fromLanguage}&flw=${fromLangWord}&tl=${toLanguage}&tlw=${word[toLanguage]}`;
          setShareLink(shareval);
      }  
    }
   /* setFromLanguage(fromLangRef.current.value);
    setFromLangWord()
    setToLanguage(e.target.value); 
    if(word){
      setTranslatedWord(word[toLanguage]);
    }    */
  }
  return(
    <center>
    <div className="TranslateBox">
      {error ? <Alert variant="danger">{warning}</Alert> : null}
  {success ? <Alert variant="primary">Share this translation : <Link to={`/share?fl=${fromLanguage}&flw=${fromLangWord}&tl=${toLangRef.current.value}&tlw=${translatedWord}`}>{`https://translator.tuluai.tech/share?fl=${fromLanguage}&flw=${fromLangWord}&tl=${toLangRef.current.value}&tlw=${translatedWord}`}</Link></Alert> : null}
      <Form> 
        <div className="TextArea">
        <Form.Group>
          <Form.Label>Translate From</Form.Label>
          <Form.Control as="select" ref={fromLangRef}>
            <option>Select Language</option>
            <option value="english">English</option>
        <option value="french">French</option>
        <option value="gujarati-english">Gujarati (English Text)</option>
            <option value="hindi">Hindi</option>
            <option value="hindi-english">Hindi (English Text)</option>
         <option value="malayalam-english">Malayalam (English Text)</option>
            <option value="marathi">Marathi</option>
            <option value="marathi-english">Marathi (English Text)</option>
            <option value="sanskrit-english">Sanskrit (English Text)</option>
            <option value="tulu">Tulu</option>
          </Form.Control>  
          <Form.Control size="lg" as="textarea" rows={5} onChange={handleChange} placeholder={fromSpeechValue} ref={fromLangWordRef}  />
        </Form.Group>
        <Form.Group>
          <Form.Label>Translate To</Form.Label>
          <Form.Control as="select" ref={toLangRef} onChange={toLangChange} >
            <option>Select Language</option>
            <option value="english">English</option>
        <option value="french">French</option>
        <option value="gujarati-english">Gujarati (English Text)</option>
            <option value="hindi">Hindi</option>
            <option value="hindi-english">Hindi (English Text)</option>
            <option value="korean-english">Korean (English Text)</option>
            <option value="malayalam-english">Malayalam (English Text)</option>
            <option value="marathi">Marathi</option>
            <option value="marathi-english">Marathi (English Text)</option>
            <option value="sanskrit-english">Sanskrit (English Text)</option>
            <option value="tulu">Tulu</option>
          </Form.Control> 
          <Form.Control size="lg" as="textarea" rows={5} placeholder={translatedWord} ref={toLangWordRef} readOnly/>
        </Form.Group>
    </div>
        {button ? <center><Button onClick={addToDatabase}>Submit Feedback</Button></center> : null}
      </Form>
    </div>
    </center>
  );
}

export default TranslateBox;