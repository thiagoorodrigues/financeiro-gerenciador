import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap');

    *{
        font-family: 'Lexend Deca', sans-serif;
    }

    html,
    body,
    #root {
        height: 100vh;
    }
`;

export default GlobalStyle;