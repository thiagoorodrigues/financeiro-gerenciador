import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const TemplateAdmin = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="m-auto">
                            <Link className="nav-link" to="contas-bancarias">Contas Bancárias</Link>
                            <Link className="nav-link" to="categorias">Categorias</Link>
                            <Link className="nav-link" to="lancamentos">Lançamentos</Link>                                                        
                        </Nav>

                        <Nav>
                            <Nav.Link href="#">Olá, Thiago Rodrigues</Nav.Link>
                            <Nav.Link href="#">Sair</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container>
                <Outlet />
            </Container>
        </>
    )
}

export default TemplateAdmin;