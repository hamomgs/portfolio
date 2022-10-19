import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --highlightColor: ${({ theme, index }) => theme.highlightColor[index]};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    outline: 0;
    text-decoration: none;
    list-style: none;
  }

  html {
    scroll-behavior: ${({ scroll }) => scroll || 'smooth'};
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.primaryBgColor};
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--highlightColor);
  }
  ::selection {
    color: #fff;
    background: var(--highlightColor);
  }

  body {
    background: ${({ theme }) => theme.primaryBgColor};
    color: ${({ theme }) => theme.primaryTextColor};
  }
`