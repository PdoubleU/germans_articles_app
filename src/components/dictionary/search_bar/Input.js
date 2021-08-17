import styled from 'styled-components';

export const Input = styled.input`
  visibility: ${({ visibility, theme }) => theme[visibility]};
  border: 1px solid ${({ props, theme }) => theme[props]};
`;
