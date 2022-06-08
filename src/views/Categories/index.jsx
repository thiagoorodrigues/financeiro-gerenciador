import { useEffect, useState } from 'react';
import { Badge, Card, Row, Col, Button } from "react-bootstrap";
import { MdEdit, MdDelete } from "react-icons/md";
import { api } from '../../utils/api';

import HeaderPage from '../../components/HeaderPage';

const Categories = () => {

    const [categories, setCategories] = useState([]);
    const [categoriesSearch, setCategoriesSearch] = useState([]);

    const [serach, setSearch] = useState('');

    useEffect(() => {
        (async () => {
            const res = await api('categories');
            if (res.code === 200) {
                setCategories(res.body);
                setCategoriesSearch(res.body);
            }
        })();
    }, []);

    useEffect(() => {
        const listaForFIlter = categories;
        const listaFiltrada = listaForFIlter.filter(item => {
            return item.name.toLowerCase().includes(serach.toLowerCase());
        });
        setCategoriesSearch(listaFiltrada);
    }, [serach])

    return (
        <>
            <HeaderPage title="Categorias" />

            {categoriesSearch.map((item, index) => (
                <Card key={index} className="mb-2 shadow-sm">
                    <Card.Body className='p-2'>
                        <Row className="align-items-center justify-content-between">
                            <Col>
                                <p className="mb-0"><strong>Nome:</strong></p>
                                <small>{item.name}</small>
                            </Col>

                            <Col className="d-flex justify-content-center">
                                {item.type && <Badge bg="success">Receita</Badge>}
                                {!item.type && <Badge bg="danger">Despesa</Badge>}
                            </Col>

                            <Col className="d-flex justify-content-end">
                                <Button type="button" size="sm">
                                    <MdEdit />
                                </Button>

                                <Button type="button" variant="danger" size="sm">
                                    <MdDelete />
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}

export default Categories;