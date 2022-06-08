import { Col, Row } from "react-bootstrap";

const HeaderPage = ({ title }) => {
    return (
        <Row className="mt-3 mb-3">
            <Col>
                <h2 className="mb-0">{title}</h2>
            </Col>
            <Col>

            </Col>
        </Row>
    )
}

export default HeaderPage;