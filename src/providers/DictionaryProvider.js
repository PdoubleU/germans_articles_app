import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getNounsAPI from '../api/getNounsAPI';
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
  setLocalStorage: () => {},
  currentState: '',
});

export const DictionaryProvider = ({ children }) => {
  const [localDictionary, setLocalDictionary] = useState();
  const [currentState, updateState] = useFiniteStateMachine();

  console.log('rerender dictionary provider');

  const getData = () => {
    updateState('FETCH_DATA'); // isLoading
    console.log('get word');
    return getNounsAPI();
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

  const setLocalStorage = () => {
    if (!window.localStorage.getItem('german_articles_dict'))
      getData().then((response) => {
        window.localStorage.setItem(
          'german_articles_dict',
          JSON.stringify(response)
        );
        return setLocalDictionary(
          JSON.parse(window.localStorage.getItem('german_articles_dict'))
        );
      });
    return setLocalDictionary(
      JSON.parse(window.localStorage.getItem('german_articles_dict'))
    );
  };

  return (
    <DictionaryContext.Provider
      value={{ addData, getData, setLocalStorage, currentState }}
    >
      {children}
    </DictionaryContext.Provider>
  );
};

DictionaryProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
