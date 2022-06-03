import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, InputPassword } from "../../../components/Inputs";
import { Card, Form } from "react-bootstrap";

import * as yup from "yup";
import Button from "../../../components/Buttons/inde";
// import CryptoJs from "crypto-js";

const schema = yup.object({
    email: yup.string().email("E-mail inválido").required("Informe o e-mail"),
    password: yup.string().required("Informe a senha"),
});


const Login = () => {

    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        // const key = CryptoJs.SHA512(data.email + ';' + data.password).toString();

    };

    return (
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

                    <Button type="submit" fullsize title="Login" />
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Login;