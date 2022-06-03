import { BrowserRouter } from "react-router-dom";
import Routes from '../routes';
import GlobalStyle from "../themes/GlobalStyles";

const Views = () => {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </>
    )
}

export default Views;