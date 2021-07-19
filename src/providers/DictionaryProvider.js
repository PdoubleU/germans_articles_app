import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getNounAPI from '../api/getNounAPI';
import addNounAPI from '../api/addNounAPI';
import isNounInDictionaryAPI from '../api/isNounInDictionaryAPI';

import useFiniteStateMachine from '../hooks/useFiniteStateMachine';

const mockupDictionary = [
  { nounDE: 'Geste, -n', article: 'die', nounPL: 'gest' },
  { nounDE: 'Wade, -n', article: 'die', nounPL: 'łydka' },
  { nounDE: 'Atem', article: 'der', nounPL: 'oddech' },
  { nounDE: 'Knochen', article: 'der', nounPL: 'kość' },
  { nounDE: 'Nagel, -:', article: 'der', nounPL: 'paznokieć' },
  { nounDE: 'Knie', article: 'das', nounPL: 'kolano' },
  { nounDE: 'Skelett, -e', article: 'das', nounPL: 'szkielet, kościec' },
];

export const DictionaryContext = React.createContext({
  addData: () => {},
  getData: () => {},
  currentState: '',
});

export const DictionaryProvider = ({ children }) => {
  const [localDictionary, setLocalDictionary] = useState(mockupDictionary);
  const [currentState, updateState] = useFiniteStateMachine();

  const getData = () => {
    updateState('FETCH_DATA'); // isLoading
    console.log('get word');
    console.log(getNounAPI());
  };

  const addData = (props) => {
    updateState('FETCH_DATA'); // isLoading
    isNounInDictionaryAPI(props).then((response) => {
      if (response) return updateState('FETCH_DATA_ERROR'); // isError
      addNounAPI(props).then((response) => {
        response
          ? updateState('FETCH_DATA_SUCCESS') // hasLoaded
          : updateState('FETCH_DATA_ERROR'); // hasError
      });
    });
  };

  return (
    <DictionaryContext.Provider value={{ addData, getData, currentState }}>
      {children}
    </DictionaryContext.Provider>
  );
};

DictionaryProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
