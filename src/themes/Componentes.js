import styled from "styled-components";
import { COLORS } from "./Colors";

export const CustomLabel = styled.label`
    font-size: .9rem;
`;

export const CustomInput = styled.input`
    border-color: ${props => props.error ? COLORS.DANGER : ''};

    width: 100%;

    ::placeholder{
        font-size: .9rem;
    }

    &:focus{
        outline: none;
        box-shadow: none;
    }
`;

export const CustomSelect = styled.select`
    border-color: ${props => props.error ? COLORS.DANGER : ''};

    ::placeholder{
        font-size: .9rem;
    }

    &:focus{
        outline: none;
        box-shadow: none;
    }
`;

export const CustomTextArea = styled.textarea`
    border-color: ${props => props.error ? COLORS.DANGER : ''};

    width: 100%;

    ::placeholder{
        font-size: .9rem;
    }

    &:focus{
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    border: 0;

    display:flex;
    align-items: center;
    justify-content: center;
    gap: .3rem;

    background: ${props => props.secondary ? COLORS.GRAY : 'linear-gradient(45deg, rgba(48,73,217,1) 0%, rgba(130,32,171,1) 100%)'};

    color: ${props => props.secondary ? COLORS.DARKGRAY : COLORS.WHITE};

    padding: .5rem 1rem;

    width: ${props => props.fullsize ? '100%' : 'auto'};

    &:hover{
        color: ${props => props.secondary ? COLORS.WHITE : COLORS.DARKGRAY};
        background: ${props => props.secondary ? COLORS.DARKGRAY : 'linear-gradient(45deg, rgba(48,73,217,.9) 0%, rgba(130,32,171,.9) 100%)'};
    }
`