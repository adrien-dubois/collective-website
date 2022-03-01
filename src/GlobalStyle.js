import { createGlobalStyle } from "styled-components";
import Questrial from './assets/fonts/Questrial-Regular.ttf';
import Montserrat from './assets/fonts/Montserrat-VariableFont_wght.ttf';
import KronaOne from './assets/fonts/KronaOne-Regular.ttf';
import Maragsa from './assets/fonts/Maragsâ.otf';

const GlobalStyle = createGlobalStyle`

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
        /*---- COLORS -----*/
        --almond-bg : #EADBCD;
        --black-chocolate : #1D1E16;
        --white-color: #FFF;
        --black-color: #000;
        --white-alabaster: #f4f3e6;
        --white-antique: #FAECD9;
        --black-smoky : #0b0c09;

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
        height: 100vh;
        color: var(--black-chocolate);
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }


`;

export default GlobalStyle;