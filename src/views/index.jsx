import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Routes from '../routes';
import GlobalStyle from "../themes/GlobalStyles";

const Views = () => {
    return (
        <>
            <GlobalStyle />
            <ToastContainer theme="colored" position="top-right" closeOnClick autoClose={3000} />            
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </>
    )
}

export default Views;