import styled from 'styled-components';

export const Label = styled.label`
  user-select: none;
  padding: 0.2rem 1.2rem;
  background-color: ${({ props, theme }) => theme[props]};
  &:hover,
  &:active,
  &:focus {
    color: ${({ theme }) => theme.textHover};
    background: ${({ theme }) => theme.backgroundHover};
  }
`;
