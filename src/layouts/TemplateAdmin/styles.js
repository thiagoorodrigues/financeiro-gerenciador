import styled from "styled-components";
import { COLORS } from "../../themes/Colors";

export const ContainerAdmin = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px;

    background: ${COLORS.PRIMARY};
    background: -webkit-linear-gradient(to right, ${COLORS.SECONDARY}, ${COLORS.PRIMARY});
    background: linear-gradient(to right, ${COLORS.SECONDARY}, ${COLORS.PRIMARY}); 

    width: 100vw;
    height: 100vh;
`;

export const Sidebar = styled.div`
    height: 100vh;
`;

export const Content = styled.div`
    background-color: ${COLORS.WHITE};
    height: 100vh;
`;