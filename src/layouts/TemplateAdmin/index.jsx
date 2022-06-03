import { Outlet } from "react-router-dom";
import { ContainerAdmin, Sidebar, Content } from "./styles";
import { Container } from "react-bootstrap";

const TemplateAdmin = () => {
    return (
        <ContainerAdmin>
            <Sidebar></Sidebar>
            <Content>
                <Outlet />
            </Content>
        </ContainerAdmin>
    )
}

export default TemplateAdmin;