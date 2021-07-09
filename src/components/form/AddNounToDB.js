import React, { useState } from 'react';
import styled from 'styled-components';
import StyledButton from '../reusables/Button';
//import PropTypes from 'prop-types'

const AddNounForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function AddNounToDB() {
  const [word, setWord] = useState({
    noun: '',
    article: '',
  });

  const saveWord = () => alert('Commiting thought to memory…');
  const handleWordChange = (e) =>
    setWord({ ...word, [e.target.name]: e.target.value });

  return (
    <AddNounForm className="App">
      <h1>Add new noun</h1>
      <input
        type="text"
        name="noun"
        placeholder="Your noun"
        value={word.noun}
        onChange={handleWordChange}
      />
      <input
        type="text"
        name="article"
        placeholder="Article"
        value={word.article}
        onChange={handleWordChange}
      />
      <StyledButton handleClick={saveWord} description="Add" />
    </AddNounForm>
  );
}

// AddNounToDB.propTypes = {

// }

export default AddNounToDB;
