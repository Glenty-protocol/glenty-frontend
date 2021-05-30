import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme { }
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
  #root {
    background: url(/images/pan-bg2.svg) aliceblue;
    background-size: cover;
    background-repeat: no-repeat;
    background-position:bottom;
  }

  #root > div > div > div > div > div:nth-child(2)[style="color: white;"] > div:nth-child(1) > div[style="color: white;"] {
    background: linear-gradient(
      82deg
      , rgba(49, 39, 131, 0.95),60%, rgba(49, 39, 131, 0.1));
  }

  #root > div > div > div > div > div:nth-child(2)[style="color: white;"] > div:nth-child(1) > div:nth-child(2) > div {
    background: rgba(49, 39, 131, 0.9);
  }

  #root > div > div > div > div > div:nth-child(2)[style="color: white;"] > div:nth-child(2) > div[style="color: white;"] {
    background: rgba(49, 39, 131, 0.9);
  }

`

// the top box is the one that is with the button "harvest" / "unlock wallet" named farms & staking

// the bottom one is the box on the bottom called earn up to %

export default GlobalStyle
