import React, { useState, useEffect } from 'react';

import './App.css';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import {
  COLORS,
  DARK_MODE_THEME,
  LIGHT_MODE_THEME,
  SUCCESS_MESSAGES,
} from './utils/constants.js';
import { getBackgroundColor } from './utils/styles';

function App() {
  const [mode, setMode] = useState(DARK_MODE_THEME);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = getBackgroundColor(mode);
  }, []);

  const showAlert = (msg, type) => {
    setAlert({
      msg,
      type,
    });
  };

  const toggleMode = () => {
    if (mode === LIGHT_MODE_THEME) {
      setMode(DARK_MODE_THEME);
      document.body.style.backgroundColor = COLORS.GREY;

      showAlert(SUCCESS_MESSAGES.DARK_MODE_ENABLED, SUCCESS_MESSAGES.SUCCESS);
    } else {
      setMode(LIGHT_MODE_THEME);
      document.body.style.backgroundColor = COLORS.WHITE;

      showAlert(SUCCESS_MESSAGES.LIGHT_MODE_ENABLED, SUCCESS_MESSAGES.SUCCESS);
    }
  };

  return (
    <>
      <Navbar title="Azhan" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter Text to Analyse" mode={mode} />
      </div>
    </>
  );
}

export default App;
