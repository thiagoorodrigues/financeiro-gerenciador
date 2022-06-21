import styled from "styled-components";
import { COLORS } from "../../themes/Colors";

export const ContainerLogin = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100vw;
    height: 100vh;
`;

export const ContainerContent = styled.div`
    width: 550px;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerEmpty = styled.div`
    width: calc(100% - 550px);
    height: 100vh;

    background: ${COLORS.PRIMARY};
    background: -webkit-linear-gradient(279deg, ${COLORS.PRIMARY} 0%, ${COLORS.SECONDARY} 100%);
    background: linear-gradient(279deg,${COLORS.PRIMARY} 0%, ${COLORS.SECONDARY} 100%);
`;