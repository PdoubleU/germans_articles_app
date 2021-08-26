import styled from 'styled-components';
import { UsersContext } from '../../providers/UserAuthProvider';
import { useContext } from 'react';
import StyledButton from '../reusables/Button';
import { Link } from 'react-router-dom';

const Navbar = ({ className, children }) => {
  const cxt = useContext(UsersContext);

  return (
    <nav className={className}>
      {children}
      <Link to="/">
        <StyledButton as="button" fontSize="sm">
          Home
        </StyledButton>
      </Link>
      {!cxt.loading && cxt.isLogged ? (
        <StyledButton as="button" onClick={cxt.logOut} fontSize="sm">
          Log out
        </StyledButton>
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
  z-index: 100;
  & > :first-child {
    position: absolute;
    top: calc(100vh - 3.5rem);
    left: 1rem;
  }
`;

export default StyledNavbar;
