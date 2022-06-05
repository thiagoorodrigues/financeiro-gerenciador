import styled from "styled-components";

import { Link } from 'react-router-dom';
import { COLORS } from "../../themes/Colors";


export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const NavLink = styled(Link)`
    text-align: center;
    text-decoration: none;

    width: 100%;

    padding: 10px 0px;

    font-size: 1rem;
`