import React, { useState } from 'react';
import PropTypes from 'prop-types';

// below temporary data from fauna db to handle references
// {
//     "ref": Ref(Collection("articles"), "304029321487450636"),
//     "ts": 1626203805340000,
//     "data": {
//       "article": "der"
//     }
//   }

//   {
//     "ref": Ref(Collection("articles"), "304029334979478028"),
//     "ts": 1626203818200000,
//     "data": {
//       "article": "das"
//     }
//   }

//   {
//   "ref": Ref(Collection("articles"), "304029355755962892"),
//   "ts": 1626203838020000,
//   "data": {
//     "article": "die"
//   }
// }

const mockupDictionary = [
  { nounDE: 'Geste, -n', article: 'die', nounPL: 'gest' },
  { nounDE: 'Wade, -n', article: 'die', nounPL: 'łydka' },
  { nounDE: 'Atem', article: 'der', nounPL: 'oddech' },
  { nounDE: 'Knochen', article: 'der', nounPL: 'kość' },
  { nounDE: 'Nagel, -:', article: 'der', nounPL: 'paznokieć' },
  { nounDE: 'Knie', article: 'das', nounPL: 'kolano' },
  { nounDE: 'Skelett, -e', article: 'das', nounPL: 'szkielet, kościec' },
];

const initialState =
  JSON.parse(window.localStorage.getItem('localDictionary')) ||
  mockupDictionary;

export const DictionaryContext = React.createContext({
  addData: () => {},
});

export const DictionaryProvider = ({ children }) => {
  const [localDictionary, setLocalDictionary] = useState(mockupDictionary);

  console.log(localDictionary);

  const getWord = ({ word }) => {
    console.log('get word');
    console.log(word);
  };

  const addWord = ({ nounDE, article, nounPL }) => {
    if (localDictionary.some((obj) => obj.nounDE === nounDE))
      return console.log('such word already added!', nounDE, article);
    setLocalDictionary([...localDictionary, { nounDE, article, nounPL }]);
  };
  return (
    <DictionaryContext.Provider value={{ addWord }}>
      {children}
    </DictionaryContext.Provider>
  );
};

DictionaryProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
