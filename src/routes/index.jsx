import { useRoutes, Navigate } from "react-router-dom";

import { useSelector } from 'react-redux';

import TemplateAccount from "../layouts/TemplateAccount";
import TemplateAdmin from "../layouts/TemplateAdmin";

import Home from "../views/home";
import Login from "../views/Account/Login";
import Forgot from "../views/Account/Forgot";
import Categories from "../views/Categories";
import BankAccount from "../views/BankAccount";

const Routes = () => {
    const { isLogged } = useSelector(state => state.global);

    return useRoutes([
        {
            path: '/',
            element: isLogged ? <TemplateAdmin /> : <Navigate to="/conta" />,
            children: [
                { index: true, element: <Home /> },
                { path: 'contas-bancarias', element: <BankAccount /> },
                { path: 'categorias', element: <Categories /> },
                { path: 'lancamentos', element: <Home /> },
            ]
        },
        {
            path: 'conta',
            element: <TemplateAccount />,
            children: [
                { index: true, element: <Login /> },                
                { path: 'recuperar-senha', element: <Forgot/> },
            ]
        }
    ]);
}

export default Routes;