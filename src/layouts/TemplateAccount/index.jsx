import { Outlet } from "react-router-dom";
import { ContainerContent, ContainerEmpty, ContainerLogin } from "./styles";

const TemplateAccount = () => {
    return (
        <ContainerLogin>
            <ContainerContent>
                <Outlet />
            </ContainerContent>
            <ContainerEmpty>

            </ContainerEmpty>
        </ContainerLogin>
    )
}

export default TemplateAccount;