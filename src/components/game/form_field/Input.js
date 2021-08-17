import styled from 'styled-components';

export const Input = styled.input`
  visibility: ${({ visibility, theme }) => theme.visibility[visibility]};
  margin: 0;
  padding: 0;
  width: 0;
  height: 0;
`;
