import styled from 'styled-components';

const Link = ({ className }) => {
  return (
    <a className={className} href="/">
      Home
    </a>
  );
};

const StyledLink = styled(Link)`
  &:active,
  &:visited,
  &:link {
    text-decoration: none;
    color: white;
  }
`;

export default StyledLink;
