import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from "../Inputs";
import { toast } from 'react-toastify';

import { Lista, ListaItem, SlimButton } from "../../themes/Componentes";
import { Modal, Form } from 'react-bootstrap';
import { api } from '../../utils/api';

import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required("Informe o nome da categoria"),
});

const Categories = () => {

    const [categories, setCategories] = useState([]);

    const [modalCadastro, setModalCadastro] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);

    const { handleSubmit, control, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        (async () => {
            const res = await api('users/categories')
            setCategories(res.body);
        })()
    }, []);


    const onRegister = async (data) => {
        const res = await api('users/categories', 'POST', { ...data, type: true });
        if (res.code !== 200) {
            toast.error('Erro ao cadastrar categoria.');
            return false;
        }
        reset({ name: '' })
        toast.success('Cadastro realizado com sucesso.');
        setModalCadastro(false);
    };

    return (
        <>
            <SlimButton type="button" className="mb-2" onClick={() => setModalCadastro(true)}>
                Nova Categoria
            </SlimButton>

            <Lista>
                {categories.length > 0 && categories.map((item, index) => (
                    <ListaItem
                        key={index}
                        onClick={() => setModalEditar(true)}
                    >{item.name}</ListaItem>
                ))}
            </Lista>

            <Modal show={modalCadastro} centered onHide={() => setModalCadastro(false)}>
                <Modal.Body>
                    <p>Cadastro Categoria</p>
                    <Form onSubmit={handleSubmit(onRegister)}>

                        <Input
                            name="name"
                            label="Nome"
                            placeholder="Nome"
                            required
                            control={control}
                            error={errors.name}
                        />

                        <div className="d-flex justify-content-end gap-2">
                            <SlimButton type="button" onClick={() => setModalCadastro(false)}>
                                Cancelar
                            </SlimButton>

                            <SlimButton type="submit">
                                Salvar
                            </SlimButton>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={modalEditar} centered onHide={() => setModalEditar(false)}>
                <Modal.Body>
                    <p>Editar Categoria</p>
                    <Form>
                        <div className="d-flex justify-content-end gap-2">
                            <SlimButton type="button" onClick={() => setModalEditar(false)}>
                                Cancelar
                            </SlimButton>

                            <SlimButton>
                                Salvar
                            </SlimButton>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Categories;