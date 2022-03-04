import { createGlobalStyle, keyframes } from "styled-components";
import Questrial from './assets/fonts/Questrial-Regular.ttf';
import Montserrat from './assets/fonts/Montserrat-VariableFont_wght.ttf';
import KronaOne from './assets/fonts/KronaOne-Regular.ttf';
import Maragsa from './assets/fonts/Maragsâ.otf';
import { UbuntuFont } from "./fontCSS";

const grain = keyframes`
  0%,
  100% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-5%, -10%);
  }
  20% {
    transform: translate(-15%, 5%);
  }
  30% {
    transform: translate(7%, -25%);
  }
  40% {
    transform: translate(-5%, 25%);
  }
  50% {
    transform: translate(-15%, 10%);
  }
  60% {
    transform: translate(15%, 0%);
  }
  70% {
    transform: translate(0%, 15%);
  }
  80% {
    transform: translate(3%, 35%);
  }
  90% {
    transform: translate(-10%, 10%);
  }
`;

const GlobalStyle = createGlobalStyle`

    ${UbuntuFont};

    @font-face{
        font-family: 'Questrial';
        src: url(${Questrial}) format('truetype');
    }
    
    @font-face{
        font-family: 'KronaOne';
        src: url(${KronaOne}) format('truetype');
    }

    @font-face{
        font-family: 'Montserrat';
        src: url(${Montserrat}) format('truetype');
    }

    @font-face{
        font-family: 'Maragsa';
        src: url(${Maragsa}) format('truetype');
    }
    
    :root{
        /*----- FONTS ------*/
        --font-1: "Questrial", sans-serif;
        --font-2: "KronaOne", serif;
        --font-3: "Montserrat", sans-serif;
        --maragsa-font: "Maragsa", serif;
        --ubuntu-font: "Ubuntu", sans-serif;
        /*---- COLORS -----*/
        --almond-bg : #EADBCD;
        --black-chocolate : #1D1E16;
        --white-color: #FFF;
        --black-color: #000;
        --white-alabaster: #f4f3e6;
        --white-antique: #FAECD9;
        /*---- MENU -----*/
        --color-text: #1D1E16;
        --color-bg: #EADBCD;
        --color-link: #1D1E16;
        --color-link-hover: #1D1E16;
        --color-border: #a7927b;
        --marquee-bg: #1D1E16;
        --marquee-text: #f4f3e6;
        --menu-focus: #775e41;



    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        outline: none;
        border: none;
        text-decoration: none;
    }

    html {
        overscroll-behavior: contain;
        
        @media (prefers-reduced-motion: no-preference) {
            scroll-behavior: smooth;
        }
    }

    body {
        font-family: var(--font-2);
        color: var(--black-chocolate);
        background-color: var(--almond-bg);
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        &:before {
            animation: ${grain} 8s steps(10) infinite;
            background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/paper-pattern.png");
            content: "";
            height: 300%;
            left: -50%;
            opacity: 0.3;
            position: fixed;
            top: -100%;
            width: 300%;
        }
        &.no-scroll {
            overflow-y: hidden;
        }
        
    }

    a {
        color: var(--black-chocolate);
        text-decoration: none;
    }


`;


export default GlobalStyle;
