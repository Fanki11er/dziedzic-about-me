import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
        line-height: 1.5;
        scroll-behavior: smooth;
        overflow-x: hidden;
        width: 100vw;
        min-height: 100dvh;
        height: auto;
    }

    body {
        margin: 0;
        padding: 0;
        width: 100vw;
        min-height: 100dvh;
        overflow-x: hidden;
        height: auto;
    }

    a {
        text-decoration: none;
        color: ${theme.colors.menuBlue};
    }

    ul, ol {
        list-style: none;
    }

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }

    button {
        cursor: pointer;
        border: none;
        background: none;
    }
`;

export default GlobalStyles;
