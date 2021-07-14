import React, { useState } from 'react';
import StyledButton from '../components/reusables/Button';
import AddWordToDB from '../components/form/AddNounToDB';
import { DictionaryProvider } from '../providers/DictionaryProvider';

const AuthView = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);

  return (
    <DictionaryProvider>
      {isFormOpen ? (
        <AddWordToDB />
      ) : (
        <div className="auth-view">
          <StyledButton onClick={openForm}>Add word</StyledButton>
          <StyledButton onClick={() => alert('play game')}>Play</StyledButton>
        </div>
      )}
    </DictionaryProvider>
  );
};

export default AuthView;
