import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getNounAPI from '../api/getNounAPI';
import addNounAPI from '../api/addNounAPI';

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
  getData: () => {},
});

export const DictionaryProvider = ({ children }) => {
  const [localDictionary, setLocalDictionary] = useState(mockupDictionary);

  const getData = () => {
    console.log('get word');
    console.log(getNounAPI());
  };

  const addData = (props) => addNounAPI(props);

  return (
    <DictionaryContext.Provider value={{ addData, getData }}>
      {children}
    </DictionaryContext.Provider>
  );
};

DictionaryProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
