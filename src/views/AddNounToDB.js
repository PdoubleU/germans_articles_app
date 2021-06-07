import React, { useState } from 'react';
import styled from 'styled-components';
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
  const saveWord = () => console.log('Commiting thought to memory…');
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
      <button onClick={saveWord}>Commit to memory</button>
    </AddNounForm>
  );
}

// AddNounToDB.propTypes = {

// }

export default AddNounToDB;
