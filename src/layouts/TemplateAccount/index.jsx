import { Outlet } from "react-router-dom";
import { ContainerLogin } from "./styles";

const TemplateAccount = () => {
    return (
        <ContainerLogin>
            <Outlet />
        </ContainerLogin>
    )
}

export default TemplateAccount;