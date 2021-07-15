import React, { useState } from 'react';
import StyledButton from '../components/reusables/Button';
import AddWordToDB from '../components/form/AddWordToDB';
import DisplayDictionary from '../components/dictionary/DisplayDictionary';
import { DictionaryProvider } from '../providers/DictionaryProvider';

const AuthView = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDictionaryOpen, setIsDictionaryOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const openDictionary = () => setIsDictionaryOpen(true);

  if (isFormOpen)
    return (
      <DictionaryProvider>
        <AddWordToDB />
      </DictionaryProvider>
    );
  if (isDictionaryOpen)
    return (
      <DictionaryProvider>
        <DisplayDictionary />
      </DictionaryProvider>
    );

  return (
    <DictionaryProvider>
      <div className="auth-view">
        <StyledButton onClick={openForm}>Add word</StyledButton>
        <StyledButton onClick={() => alert('play game')}>Play</StyledButton>
        <StyledButton onClick={openDictionary}>Dictionary</StyledButton>
      </div>
    </DictionaryProvider>
  );
};

export default AuthView;
