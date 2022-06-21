import styled from "styled-components";
import { COLORS } from "../../themes/Colors";

export const Container = styled.div`
    margin-bottom: 1rem;

    display: flex;
    flex-direction: column;
`;

export const ContainerPassword = styled.div`
    margin-bottom: 1rem;

    display: flex;
    flex-direction: column;

    position: relative;
`;

export const InvalidFeedback = styled.div`
    display: flex;

    font-size: .8rem;
    color: ${COLORS.DANGER};
`;

export const Button = styled.div`
    position: absolute;
    right: 10px;
    bottom:${props => props.error ? '5px' : '25px'};

    width: 2rem;

    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;

    font-size: 1.2rem;

    cursor: pointer;

    &:hover{
        color: ${COLORS.PRIMARY};
    }
`;