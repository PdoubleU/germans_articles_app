import styled from 'styled-components';

const Button = ({ className, handleClick, description }) => {
  return (
    <button className={className} onClick={handleClick} value={description}>
      {description}
    </button>
  );
};

const StyledButton = styled(Button)`
  padding: 0.6rem 1.2rem;
  font-size: ${({ props, theme }) => theme.fontSize[props]};
`;

export default StyledButton;
