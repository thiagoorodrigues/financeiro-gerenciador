import { Row, Col } from "react-bootstrap";
import AccountBanks from "../../components/AccountBanks";
import Categories from "../../components/Categories";

const Home = () => {
    return (
        <Row>
            <Col sm={2}>
                <p>Contas</p>
                <AccountBanks />
                
                <p>Categorias</p>
                <Categories />
            </Col>
            <Col sm={10}>
                <p>Lançamentos</p>
            </Col>
        </Row>
    )
}

export default Home;