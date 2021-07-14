import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ className, onClick, type, children }) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

const StyledButton = styled(Button)`
  padding: 0.6rem 1.2rem;
  font-size: ${({ props, theme }) => theme.fontSize[props]};
`;

Button.prototype = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
  description: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default StyledButton;
