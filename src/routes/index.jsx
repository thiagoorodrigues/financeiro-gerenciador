import { useRoutes, Navigate } from "react-router-dom";

import TemplateAccount from "../layouts/TemplateAccount";
import TemplateAdmin from "../layouts/TemplateAdmin";

import Home from "../views/home";
import Login from "../views/Account/Login";

const Routes = () => {
    const isLogged = true;

    return useRoutes([
        {
            path: '/',
            element: isLogged ? <TemplateAdmin /> : <Navigate to="/conta" />,
            children: [
                { index: true, element: <Home /> }
            ]
        },
        {
            path: 'conta',
            element: <TemplateAccount />,
            children: [
                { index: true, element: <Login /> }
            ]
        }

    ]);
}

export default Routes;