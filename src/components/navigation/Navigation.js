import styled from 'styled-components';
import StyledLink from './Link';
import { UsersContext } from '../../providers/UserAuthProvider';
import { useContext } from 'react';
import StyledButton from '../reusables/Button';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';

const Navbar = ({ className }) => {
  const cxt = useContext(UsersContext);

  return (
    <nav className={className}>
      <Link to="/">Home</Link>
      {!cxt.loading && cxt.isLogged ? (
        <StyledButton onClick={cxt.logOut}>Log out</StyledButton>
      ) : null}
    </nav>
  );
};

const StyledNavbar = styled(Navbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 100vw;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export default StyledNavbar;
