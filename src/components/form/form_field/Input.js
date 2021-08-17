import styled from 'styled-components';

export const Input = styled.input`
  visibility: ${({ visibility, theme }) => theme[visibility]};
  border: 1px solid ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  margin-top: ${({ mt, theme }) => theme.margin[mt]};
  margin-bottom: ${({ mt, theme }) => theme.margin[mt]};
`;
