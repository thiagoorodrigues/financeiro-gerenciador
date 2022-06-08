import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, InputPassword } from "../../../components/Inputs";
import { Card, Form } from "react-bootstrap";
import { ContainerLogin, LinkForgot } from "./styles";

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as yup from "yup";
import Button from "../../../components/Buttons/inde";
import { api } from "../../../utils/api";
import { setGlobal } from "../../../redux/reducers/global";
import { toast } from "react-toastify";

const schema = yup.object({
    email: yup.string().email("E-mail inválido").required("Informe o e-mail"),
    password: yup.string().required("Informe a senha"),
});

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        let res = await api('auth/login', 'POST', data);

        if (res.code !== 200) {
            toast.error('Os dados de e-mail e ou senha estão inválidos.')
            return false;   
        }

        dispatch(setGlobal({ token: res.body.token, isLogged: true }));
        navigate('/', { replace: true });
    };

    return (
        <ContainerLogin>
            <Card className="shadow">
                <Card.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            name="email"
                            label="E-mail"
                            placeholder="E-mail"
                            required
                            control={control}
                            error={errors.email}
                        />

                        <InputPassword
                            name="password"
                            label="Senha"
                            placeholder="Senha"
                            required
                            control={control}
                            error={errors.password}
                        />

                        <LinkForgot to="">Esqueseu a senha?</LinkForgot>

                        <Button type="submit" fullsize title="Login" />
                    </Form>
                </Card.Body>
            </Card>
        </ContainerLogin>
    )
}

export default Login;