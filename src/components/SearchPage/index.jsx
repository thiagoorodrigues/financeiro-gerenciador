import { Row, Col } from "react-bootstrap";
import { MdAdd } from 'react-icons/md';
import Buttons from "../Buttons";

const SearchPage = ({ onChange = () => { } }) => {
    return (
        <Row className="justify-content-between mb-4">
            <Col sm={6}>
                <Buttons type="button" style="btn-sm" title="Nova Categoria" />
            </Col>

            <Col sm={4}>
                <input
                    type="text"
                    className='form-control form-control-sm'
                    placeholder="Pesquisa"
                    onChange={onChange}
                />
            </Col>
        </Row>
    )
}

export default SearchPage;