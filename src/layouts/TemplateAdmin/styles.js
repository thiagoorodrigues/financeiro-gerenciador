import styled from "styled-components";

import { Link } from 'react-router-dom';
import { COLORS } from "../../themes/Colors";

export const Header = styled.div`
    background: ${COLORS.PRIMARY};
    background: -webkit-linear-gradient(to right, ${COLORS.SECONDARY}, ${COLORS.PRIMARY});
    background: linear-gradient(to right, ${COLORS.SECONDARY}, ${COLORS.PRIMARY}); 

    display: flex;
    justify-content: center;

    height: 200px;
`

export const Container = styled.div`
    width: 980px;

    display: flex;
    justify-content: space-between;
`;

export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    gap: 10px;
`

export const NavLink = styled(Link)`
    text-align: center;
    text-decoration: none;

    color: ${COLORS.WHITE};

    padding: 10px 0px;
    
    &:hover{
        color:${COLORS.WARNING};    
    }
`