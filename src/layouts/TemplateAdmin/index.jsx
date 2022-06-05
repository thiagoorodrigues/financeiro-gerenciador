import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Nav, NavLink } from './styles';

const TemplateAdmin = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6">

                        </div>
                        <div className="col-12 col-sm-6">

                        </div>
                    </div>
                </div>
            </header>

            <Container>
                <Nav>
                    <NavLink to="/">Resumo</NavLink>
                    <NavLink to="/categorias">Categorias</NavLink>
                    <NavLink to="/lanamento-contas">Lançamentos</NavLink>
                    <NavLink to="/contas-bancarias">Contas Bancárias</NavLink>
                </Nav>
            </Container>

            <div className="content">
                <Outlet />
            </div>
        </>
    )
}

export default TemplateAdmin;