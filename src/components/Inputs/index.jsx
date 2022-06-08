import { useState } from "react";
import { Controller } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Container, ContainerPassword, InvalidFeedback, Button } from './styles';
import { CustomInput, CustomLabel, CustomSelect, CustomTextArea } from '../../themes/Componentes';

export const Input = ({ name, control, label, required, error, props }) => {
    return (
        <Container>
            {label && <CustomLabel htmlFor={name}>{label} {required && <span className="text-danger">*</span>}</CustomLabel>}

            <Controller
                name={name}
                control={control}
                defaultValue=""
                render={({ field }) => <CustomInput error={error} className="form-control form-control-sm" {...props} {...field} />}
            />

            {error && <InvalidFeedback>{error.message}</InvalidFeedback>}
        </Container>
    )
}

export const InputFile = ({ name, control, label, required, error, props }) => {
    return (
        <Container>
            {label && <CustomLabel htmlFor={name}>{label} {required && <span className="text-danger">*</span>}</CustomLabel>}

            <Controller
                name={name}
                control={control}
                defaultValue=""
                render={({ field }) => <CustomInput type="file" error={error} className="form-control form-control-sm" {...props} {...field} />}
            />

            {error && <InvalidFeedback>{error.message}</InvalidFeedback>}
        </Container>
    )
}

export const Select = ({ name, items = [], control, label, required, error, props }) => {
    return (
        <Container>
            {label && <CustomLabel htmlFor={name}>{label} {required && <span className="text-danger">*</span>}</CustomLabel>}

            <Controller
                name={name}
                control={control}
                defaultValue=""
                render={({ field }) =>
                    <CustomSelect error={error} className="form-control  form-control-sm" {...props} {...field}>
                        {items && items.length > 0 && items.map((item, index) => (<option key={index} value={item.value}>{item.label}</option>))}
                    </CustomSelect>
                }
            />

            {error && <InvalidFeedback>{error.message}</InvalidFeedback>}
        </Container>
    )
}

export const InputPassword = ({ name, control, label, required, error, props }) => {
    const [open, setOpen] = useState(false);
    return (
        <ContainerPassword>
            {label && <CustomLabel htmlFor={name}>{label} {required && <span className="text-danger">*</span>}</CustomLabel>}

            <Controller
                name={name}
                control={control}
                defaultValue=""
                render={({ field }) => <CustomInput error={error} type={open ? 'text' : 'password'} className="form-control  form-control-sm" {...props} {...field} />}
            />

            <Button error={!error} onClick={() => setOpen(!open)}>
                {open ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </Button>

            {error && <InvalidFeedback>{error.message}</InvalidFeedback>}
        </ContainerPassword>
    )
}

export const TextArea = ({ name, control, label, required, error, props }) => {
    return (
        <Container>
            {label && <CustomLabel htmlFor={name}>{label} {required && <span className="text-danger">*</span>}</CustomLabel>}

            <Controller
                name={name}
                control={control}
                defaultValue=""
                render={({ field }) => <CustomTextArea error={error} className="form-control  form-control-sm" value={field.value || ''} onChange={field.onChange} {...props} ></CustomTextArea>}
            />

            {error && <InvalidFeedback>{error.message}</InvalidFeedback>}
        </Container>
    )
}