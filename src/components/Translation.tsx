// src/components/Translation.tsx
import React, { useState } from 'react';
import axios from 'axios';
import './Translation.css'; // Import the CSS file
import { FaTimesCircle } from "react-icons/fa";

const Translation: React.FC = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = async () => {
    try {
      const response = await axios.get(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          text
        )}&langpair=hmn|en`
      );

      // Extract translated text from the response
      const translation = response.data.responseData.translatedText;
      setTranslatedText(translation);
    } catch (error) {
      console.error('Translation error:', error);
    }
  };

  const handleClear = () => {
    setText('');
    setTranslatedText('');
  };

  return (
    <div className="translation-container">
      <textarea
        className="input-text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate..."
      />
      <div className="button-container">
        <button className="translate-button" onClick={handleTranslate}>
          Translate
        </button>
        <button className="clear-button" onClick={handleClear}>
          <FaTimesCircle /> {/* Use the close icon here */}
        </button>
      </div>
      <div className="result-container">
        <strong>Translated Text:</strong> {translatedText}
      </div>
    </div>
  );
};

export default Translation;
