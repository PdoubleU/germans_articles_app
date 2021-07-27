import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getNounsAPI from '../api/getNounsAPI';
import addNounAPI from '../api/addNounAPI';
import isNounInDictionaryAPI from '../api/isNounInDictionaryAPI';
import {
  useFiniteStateMachine,
  setOfActions,
} from '../hooks/useFiniteStateMachine';

export const DictionaryContext = React.createContext({
  addData: () => {},
  setLocalStorage: () => {},
  localDictionary: [],
  currentState: '',
});

export const DictionaryProvider = ({ children }) => {
  const [localDictionary, setLocalDictionary] = useState();
  const [currentState, updateState] = useFiniteStateMachine();

  const { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } = setOfActions;
  const storageItemName = 'german_articles_dict';

  console.log('rerender dictionary provider');

  const addData = (props) => {
    updateState(FETCH_DATA); // isLoading
    isNounInDictionaryAPI(props).then((response) => {
      if (response) return updateState(FETCH_DATA_ERROR); // isError
      addNounAPI(props).then((response) => {
        response
          ? updateState(FETCH_DATA_SUCCESS) // hasLoaded
          : updateState(FETCH_DATA_ERROR); // hasError
      });
    });
  };

  const setLocalStorage = () => {
    updateState(FETCH_DATA); // isLoading
    console.log(!window.localStorage.getItem(storageItemName));
    if (!window.localStorage.getItem(storageItemName)) {
      getNounsAPI()
        .then((response) => {
          window.localStorage.setItem(
            storageItemName,
            JSON.stringify(response)
          );
          updateState(FETCH_DATA_SUCCESS); // hasLoaded
          return setLocalDictionary(
            JSON.parse(window.localStorage.getItem(storageItemName))
          );
        })
        .catch((e) => {
          updateState(FETCH_DATA_ERROR); // hasError
          console.error(e);
          return;
        });
    } else {
      updateState(FETCH_DATA_SUCCESS); // hasLoaded
      return setLocalDictionary(
        JSON.parse(window.localStorage.getItem(storageItemName))
      );
    }
  };

  return (
    <DictionaryContext.Provider
      value={{ addData, setLocalStorage, localDictionary, currentState }}
    >
      {children}
    </DictionaryContext.Provider>
  );
};

DictionaryProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
