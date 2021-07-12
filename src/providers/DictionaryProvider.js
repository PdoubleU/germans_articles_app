import React, { useState } from 'react';
import PropTypes from 'prop-types';

const mockupDictionary = [
  { noun: 'Auto', article: 'das' },
  { noun: 'Baum', article: 'das' },
  { noun: 'Katze', article: 'die' },
];

const initialState =
  JSON.parse(window.localStorage.getItem('localDictionary')) ||
  mockupDictionary;

export const DictionaryContext = React.createContext({
  addData: () => {},
});

export const DictionaryProvider = ({ children }) => {
  const [localDictionary, setLocalDictionary] = useState(mockupDictionary);

  const addData = ({ noun, article }) => {
    if (localDictionary.some((obj) => obj.noun === noun))
      return console.log('such word already added!', noun, article);
    setLocalDictionary([...localDictionary, { noun, article }]);
  };
  return (
    <DictionaryContext.Provider value={{ addData }}>
      {children}
    </DictionaryContext.Provider>
  );
};

DictionaryProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
