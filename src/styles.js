import styled from 'styled-components';

export const H1 = styled.h1`
  color: purple;
  background-color: black;
`;

export const color = 'darkgreen';

export const Headline = H1.extend`
  text-decoration: underline;
  &:hover {
    background-color: purple;
    color: ${color};
  }
`;
