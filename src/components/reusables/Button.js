import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ className, onClick, type, children }) => {
  return (
    <div className={className} onClick={onClick} type={type}>
      {children}
    </div>
  );
};

const StyledButton = styled(Button)`
  cursor: pointer;
  padding: 0.6rem 1.2rem;
  font-size: ${({ props, theme }) => theme.fontSize[props]};
  background-color: ${({ props, theme }) => theme[props]};
  &:hover {
    color: ${({ theme }) => theme.textHover};
    background: ${({ theme }) => theme.backgroundHover};
  }
  &:active {
    transform: scale(0.99);
  }
  &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }
`;

Button.prototype = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
  description: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default StyledButton;
