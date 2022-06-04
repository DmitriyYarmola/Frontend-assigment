import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${theme.colors.text};
    font-size: ${theme.fontSizes.small};
    font-family: 'Be Vietnam Pro', sans-serif;
    background-color: ${theme.colors.bg};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  p {
    margin: 0;
    padding: 0;
  }
  
  th {
    font-weight: ${theme.fontWeights.regular};
  }
  
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }
  
  input {
    margin: 0;
    padding: 0;
    outline: none;
    border: 0;
    background: none;
  }
  
  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
  
  button {
    border: 0;
    background: none;
    color: ${theme.colors.grey};
  }
  
  * {
    &.customScroll {
      &::-webkit-scrollbar {
        width: 5px;
        height: 4px;
      }

      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${theme.colors['white-005']};
      }
    }
  }
`
