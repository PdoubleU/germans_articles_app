import React, { useState } from 'react';
import StyledButton from '../components/reusables/Button';
import AddNounToDB from '../components/form/AddNounToDB';

function AuthView() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);

  return isFormOpen ? (
    <AddNounToDB />
  ) : (
    <div className="auth-view">
      <StyledButton handleClick={openForm} description="Add word" />
      <StyledButton
        handleClick={() => alert('play game')}
        description="Play game"
      />
    </div>
  );
}

export default AuthView;
