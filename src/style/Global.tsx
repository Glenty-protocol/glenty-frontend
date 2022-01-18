import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme { }
}
function backgroundChange(){
  let x;
if(document.location.pathname === "/"){
  x='url("./images/background.svg")';
}else if(document.location.pathname==='/top100'){
  x='url("./images/TP100_mobile_background.svg")'
}else{
  x="url('./images/GLENTYPOOL_background_Plan de travail 1 copie 8.svg')"
}
return(x);
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
    background: ${backgroundChange()};
    background-size: cover;
    background-repeat: no-repeat;
  }
  .socialL{
    display:${document.location.pathname === "/"?"none":"grid"}
  }
  input:focus, textarea:focus, select:focus{
    outline: none;
  }
  .slick-prev:before,.slick-next:before{
    display:none;
  }
  .slick-prev, .slick-next{
    width:80px !important;
    height:80px !important;
    top:40% !important;
  }
  .slick-next{
    right:-70px !important;
  }
  .slick-prev{
    left:-70px !important;
  }
  .dotsList li{
    width:50px;
  }
  .dotsList li.slick-active svg #activeSickSvg{
    fill:#f3ba2f !important;
  }
`

// the top box is the one that is with the button "harvest" / "unlock wallet" named farms & staking

// the bottom one is the box on the bottom called earn up to %

export default GlobalStyle
