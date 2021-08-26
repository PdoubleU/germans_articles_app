import styled from 'styled-components';

export const Input = styled.input`
  margin: 0;
  padding: 0.6rem 1.2rem;
  visibility: ${({ visibility, theme }) => theme.visibility[visibility]};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  margin-top: ${({ mt, theme }) => theme.margin[mt]};
  margin-bottom: ${({ mt, theme }) => theme.margin[mt]};
  width: ${({ width, theme }) => theme.width[width]};
  height: ${({ height, theme }) => theme.height[height]};
`;
