import React from 'react';
//import PropTypes from 'prop-types'

function AuthView({ handleClick, user }) {
  console.log(handleClick);
  return (
    <div>
      <h2>Welcome, {user} is logged in</h2>
      <button onClick={handleClick}>Log out</button>
    </div>
  );
}

// MainView.propTypes = {

// }

export default AuthView;
