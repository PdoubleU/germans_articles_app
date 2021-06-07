import React, { useEffect, useState } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import PropTypes from 'prop-types';
import netlifyAuth from './NetlifyAuthHelper';

export const UsersContext = React.createContext({
  logIn: () => {},
  logOut: () => {},
  isLogged: false,
  loading: true,
});

export function UserAuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState('');

  useEffect(() => {
    netlifyAuth.initialize((user) => {
      setIsLogged(!!user);
    });
  }, [isLogged]);

  useEffect(() => {
    window.netlifyIdentity = netlifyIdentity;
    netlifyIdentity.on('init', ({ user_metadata: { full_name } }) => {
      console.log(full_name);
      setUser(full_name);
      setIsLogged(true);
    });
    netlifyIdentity.init();
  }, []);

  const logIn = () => {
    netlifyIdentity.open();
    netlifyIdentity.on('login', ({ user_metadata: { full_name } }) => {
      setUser(full_name);
      setIsLogged(true);
    });
  };
  const logOut = () => {
    netlifyIdentity.logout();
    setIsLogged(false);
  };

  return (
    <UsersContext.Provider
      value={{
        logIn,
        logOut,
        isLogged,
        loading,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

UserAuthProvider.propTypes = {
  children: PropTypes.element,
};
