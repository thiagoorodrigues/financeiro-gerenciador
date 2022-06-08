import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet } from 'react-router-dom';

const TemplateAdmin = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <Nav.Link href="#">Olá, Thiago Rodrigues</Nav.Link>
                            <Nav.Link href="#">Sair</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="pt-3">
                <Outlet />
            </Container>
        </>
    )
}

export default TemplateAdmin;