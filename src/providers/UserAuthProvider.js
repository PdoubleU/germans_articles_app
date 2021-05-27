import React, { useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import PropTypes from 'prop-types';

export const LoggedUserContext = React.createContext({
  logIn: () => {},
  logOut: () => {},
  isLogged: false,
});

export function UserAuthProvider({ children }) {
  console.log(children);
  useEffect(() => {
    netlifyIdentity.init({});
  });

  const logIn = () => {
    netlifyIdentity.open();
  };
  const logOut = () => {
    netlifyIdentity.logout();
  };

  return (
    <LoggedUserContext.Provider
      value={{
        logIn,
        logOut,
        isLogged: true,
      }}
    >
      {children}
    </LoggedUserContext.Provider>
  );
}

UserAuthProvider.propTypes = {
  children: PropTypes.element,
};
