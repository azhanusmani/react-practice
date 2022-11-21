import React, { useState } from 'react';

import { getTextColor, getBackgroundColor } from '../utils/styles';

export default function TextForm({ heading, mode }) {
  const [text, setText] = useState('');

  const handleClickUp = () => {
    setText(text.toUpperCase());
  };

  const handleClickLower = () => {
    setText(text.toLowerCase());
  };

  const handleClickClear = () => {
    setText('');
  };

  const handleClickSpeech = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleCopy = () => {
    let text = document.getElementById('myBox');
    if (!text) return;

    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleOnChange = (e) => {
    setText(e?.target?.value);
  };

  const getTextReadingInfo = (text) => {
    if (!text || !text.length) {
      return {
        readingTime: 0,
        wordsCount: 0,
        charactersCount: 0,
      };
    }

    return {
      readingTime: Math.round(text.split(' ').length * 0.008),
      wordsCount: text.length ? text.split(' ').length : 0,
      charactersCount: text.length,
    };
  };

  const textColor = getTextColor(mode);
  const bgColor = getBackgroundColor(mode);
  const { readingTime, wordsCount, charactersCount } = getTextReadingInfo(text);

  return (
    <>
      <div className="container" style={{ color: textColor }}>
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            style={{
              backgroundColor: bgColor,
            }}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleClickUp}>
          Convert Upper Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClickLower}>
          Convert Lower Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClickClear}>
          {' '}
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClickSpeech}>
          {' '}
          Speak It
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          {' '}
          Copy It
        </button>
      </div>
      <div className="container my-2" style={{ color: textColor }}>
        <h1>Your Text Summary</h1>
        <p>
          {wordsCount} Words , {charactersCount} chararcters
        </p>
        <h5>{readingTime < 1 ? 'Less than a' : readingTime} Minutes Read</h5>
        <h3>Preview</h3>
        <h5>{text}</h5>
      </div>
    </>
  );
}
