import styled from "styled-components";

import { Link } from "react-router-dom";
import { COLORS } from "../../../themes/Colors";

export const ContainerLogin = styled.div`
    width: 400px;
`;

export const LinkForgot = styled(Link)`
    font-size: .8rem;
    text-decoration: none;
    margin-bottom: 1rem !important;
    display: block;

    color:${COLORS.PRIMARY};

    &:hover{
        color:${COLORS.SECONDARY};
    }
`;