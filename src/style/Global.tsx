import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme { }
}

const GlobalStyle = createGlobalStyle`
  * {
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
  #root {
    background: url('./images/GLENTYPOOL_background_Plan de travail 1 copie 8.svg') aliceblue;
    background-size: cover;
    background-repeat: no-repeat;
  }
  input:focus, textarea:focus, select:focus{
    outline: none;
  }

`

// the top box is the one that is with the button "harvest" / "unlock wallet" named farms & staking

// the bottom one is the box on the bottom called earn up to %

export default GlobalStyle
