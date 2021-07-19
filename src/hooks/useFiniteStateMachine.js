import { useState } from 'react';

const states = {
  empty: 'empty',
  isLoading: 'loading',
  hasLoaded: 'loaded',
  hasError: 'error',
};

const transitions = {
  [states.empty]: {
    FETCH_DATA: states.isLoading,
  },
  [states.isLoading]: {
    FETCH_DATA_SUCCESS: states.hasLoaded,
    FETCH_DATA_ERROR: states.hasError,
  },
  [states.hasLoaded]: {
    FETCH_DATA: states.isLoading,
  },
  [states.hasError]: {
    FETCH_DATA: states.isLoading,
  },
};

function useFiniteStateMachine() {
  const [currentState, setCurrentState] = useState('empty');

  const transition = (currentState, action) => {
    const nextState = transitions[currentState][action];
    return nextState || currentState;
  };

  const updateState = (action) => {
    setCurrentState((currentState) => transition(currentState, action));
  };

  return [currentState, updateState];
}

export default useFiniteStateMachine;
