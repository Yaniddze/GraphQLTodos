import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background: ${(props): string => props.theme.colors.dim};
    color: ${(props): string => props.theme.colors.dark};
  }
`;
