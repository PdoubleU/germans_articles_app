import React, { useState } from 'react';
import StyledButton from '../components/reusables/Button';
import DisplayForm from '../components/form/DisplayForm';
import DisplayDictionary from '../components/dictionary/DisplayDictionary';
import DisplayGame from '../components/game/DisplayGame';
import { DictionaryProvider } from '../providers/DictionaryProvider';

const AuthView = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDictionaryOpen, setIsDictionaryOpen] = useState(false);
  const [isGameOpen, setIsGameOpen] = useState(false);

  console.log('rerender auth viewe');

  const openForm = () => setIsFormOpen(true);
  const openDictionary = () => setIsDictionaryOpen(true);
  const openGame = () => setIsGameOpen(true);

  const renderContent = () => {
    if (isFormOpen) return <DisplayForm />;
    if (isDictionaryOpen) return <DisplayDictionary />;
    if (isGameOpen) return <DisplayGame />;
  };

  return (
    <DictionaryProvider>
      <>{renderContent()}</>
      <StyledButton onClick={openForm}>Add word</StyledButton>
      <StyledButton onClick={openGame}>Play</StyledButton>
      <StyledButton onClick={openDictionary}>Dictionary</StyledButton>
    </DictionaryProvider>
  );
};

export default AuthView;
