import { Outlet } from "react-router-dom";
import { Container, Header, Nav, NavLink } from './styles';

import Logomarca from '../../images/logomarca.svg';

const TemplateAdmin = () => {
    return (
        <>
            <Header>
                <Container>
                    <div className="logomarca">
                        <img src={Logomarca} width={100} alt='Gestão Financeira' />
                    </div>

                    <Nav>
                        <NavLink to="contas-bancarias">Contas Bancárias</NavLink>
                        <NavLink to="categorias">Categorias</NavLink>
                        <NavLink to="lancamentos">Lançamentos</NavLink>
                    </Nav>

                    <Nav>
                        <NavLink to="categorias">Olá, Thiago Rodrigues</NavLink>
                        <NavLink to="lancamentos">Sair</NavLink>
                    </Nav>
                </Container>
            </Header>

            <div className="content">
                <Outlet />
            </div>
        </>
    )
}

export default TemplateAdmin;