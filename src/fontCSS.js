import { css } from "styled-components";
import UbuntuBold from "./assets/fonts/Ubuntu/Ubuntu-Bold.ttf";
import UbuntuBoldItalic from "./assets/fonts/Ubuntu/Ubuntu-Bold.ttf";
import UbuntuItalic from "./assets/fonts/Ubuntu/Ubuntu-Bold.ttf";
import UbuntuLight from "./assets/fonts/Ubuntu/Ubuntu-Bold.ttf";
import UbuntuLightItalic from "./assets/fonts/Ubuntu/Ubuntu-Bold.ttf";
import UbuntuMedium from "./assets/fonts/Ubuntu/Ubuntu-Bold.ttf";
import UbuntuMediumItalic from "./assets/fonts/Ubuntu/Ubuntu-Bold.ttf";
import UbuntuRegular from "./assets/fonts/Ubuntu/Ubuntu-Bold.ttf";


export const UbuntuFont = css`

    @font-face {
        font-family: "Ubuntu";
        src: url(${UbuntuBold});
        font-weight: 700;
        font-style: normal;
        font-display: block;
    }

    @font-face {
        font-family: "Ubuntu";
        src: url(${UbuntuBoldItalic});
        font-weight: 700;
        font-style: italic;
        font-display: block;
    }

    @font-face {
        font-family: "Ubuntu";
        src: url(${UbuntuItalic});
        font-weight: 400;
        font-style: italic;
        font-display: block;
    }

    @font-face {
        font-family: "Ubuntu";
        src: url(${UbuntuLight});
        font-weight: 300;
        font-style: normal;
        font-display: block;
    }

    @font-face {
        font-family: "Ubuntu";
        src: url(${UbuntuLightItalic});
        font-weight: 300;
        font-style: italic;
        font-display: block;
    }

    @font-face {
        font-family: "Ubuntu";
        src: url(${UbuntuMedium});
        font-weight: 500;
        font-style: normal;
        font-display: block;
    }

    @font-face {
        font-family: "Ubuntu";
        src: url(${UbuntuMediumItalic});
        font-weight: 500;
        font-style: italic;
        font-display: block;
    }

    @font-face {
        font-family: "Ubuntu";
        src: url(${UbuntuRegular});
        font-weight: 400;
        font-style: normal;
        font-display: block;
    }

`;