import React, { useContext, useEffect, useRef } from 'react';
import { DictionaryContext } from '../../providers/DictionaryProvider';
import WordCard from './word_card/word_card.js';

const DisplayDictionary = () => {
  const ctx = useContext(DictionaryContext);

  useEffect(() => {
    ctx.setSessionStorage();
  }, []);

  return (
    <ul className="dictionary_container">
      {!ctx.localDictionary ? (
        <p>{ctx.currentState}</p>
      ) : (
        ctx.localDictionary.map((item) => (
          <WordCard item={item} key={item.id} />
        ))
      )}
    </ul>
  );
};

export default DisplayDictionary;
