import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import netlifyAuth from './NetlifyAuthHelper';

export const UsersContext = React.createContext({
  logIn: () => {},
  logOut: () => {},
  isLogged: false,
  loading: false,
  user: null,
});

export function UserAuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    netlifyAuth.initialize((user) => {
      setIsLogged(!!user);
      if (user) {
        let {
          user_metadata: { full_name },
        } = user;
        setUser(full_name);
      }
    });
  }, [isLogged]);

  useEffect(() => {
    setLoading(false);
  }, [isLogged]);

  const logIn = () => {
    netlifyAuth.authenticate((user) => {
      setIsLogged(!!user);
      setUser(user);
      netlifyAuth.closeModal();
    });
  };
  const logOut = () => {
    netlifyAuth.signout(() => {
      setIsLogged(false);
      setUser(null);
    });
  };

  return (
    <UsersContext.Provider
      value={{
        logIn,
        logOut,
        isLogged,
        loading,
        user,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

UserAuthProvider.propTypes = {
  children: PropTypes.element,
};
