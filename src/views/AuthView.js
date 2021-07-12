import React, { useState } from 'react';
import StyledButton from '../components/reusables/Button';
import AddNounToDB from '../components/form/AddNounToDB';
import { DictionaryProvider } from '../providers/DictionaryProvider';

function AuthView() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);

  return (
    <DictionaryProvider>
      {isFormOpen ? (
        <AddNounToDB />
      ) : (
        <div className="auth-view">
          <StyledButton handleClick={openForm} description="Add word" />
          <StyledButton
            handleClick={() => alert('play game')}
            description="Play game"
          />
        </div>
      )}
    </DictionaryProvider>
  );
}

export default AuthView;
