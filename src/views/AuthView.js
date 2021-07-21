import React, { useState } from 'react';
import StyledButton from '../components/reusables/Button';
import DisplayForm from '../components/form/DisplayForm';
import DisplayDictionary from '../components/dictionary/DisplayDictionary';
import DisplayGame from '../components/game/DisplayGame';
import { DictionaryProvider } from '../providers/DictionaryProvider';
import {
  BrowserRouter as Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';

const AuthView = () => {
  const { pathname } = useLocation();
  console.log(pathname, pathname !== '/');
  console.log('rerender auth viewe');
  return (
    <DictionaryProvider>
      <Route path="/">
        {pathname === '/' ? (
          <nav>
            <Link to="/add">Add word</Link>
            <Link to="/game">Play</Link>
            <Link to="/dictionary">Dictionary</Link>
          </nav>
        ) : null}
        <Route path="/add" component={DisplayForm} />
        <Route path="/dictionary" component={DisplayDictionary} />
        <Route path="/game" component={DisplayGame} />
      </Route>
    </DictionaryProvider>
  );
};

export default AuthView;
