import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=PT+Sans&display=swap');

    html, body {
        font-family: 'PT Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    * {
        box-sizing: border-box;
    }
`;
