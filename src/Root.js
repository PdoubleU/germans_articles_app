import './style.css';
import Login from './views/Login';
import netlifyIdentity from 'netlify-identity-widget';

netlifyIdentity.init({});

function Root() {
  return (
    <>
      <h2>This is root</h2>
      <button
        onClick={() => {
          netlifyIdentity.open();
        }}
      >
        Login
      </button>
      <Login></Login>
    </>
  );
}

export default Root;
