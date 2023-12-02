// src/components/Translation.tsx
import React, { useState } from 'react';
import axios from 'axios';

const Translation: React.FC = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = async () => {
    try {
      const response = await axios.get(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          text
        )}&langpair=en|th`,
      );

      // Extract translated text from the response
      const translation = response.data.responseData.translatedText;
      setTranslatedText(translation);
    } catch (error) {
      console.error('Translation error:', error);
    }
  };

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleTranslate}>Translate</button>
      <div>
        <strong>Translated Text:</strong> {translatedText}
      </div>
    </div>
  );
};

export default Translation;
