import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap');

    *{
        font-family: 'Mukta', sans-serif !important;
    }

    html,
    body,
    #root {
        height: 100vh;
    }
`;

export default GlobalStyle;