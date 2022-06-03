import styled from "styled-components";
import { COLORS } from "../../themes/Colors";

export const ButtonContainer = styled.button`
    background: ${COLORS.PRIMARY};
    background: -webkit-linear-gradient(to right, ${COLORS.SECONDARY}, ${COLORS.PRIMARY});
    background: linear-gradient(to right, ${COLORS.SECONDARY}, ${COLORS.PRIMARY}); 
    
    border:0;    
`;