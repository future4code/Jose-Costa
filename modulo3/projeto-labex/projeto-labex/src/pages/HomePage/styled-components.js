import styled from "styled-components";

export const ImagemTop = styled.img`
        height: ${props => props.hide ? "0px" : "300px"};
        animation: rotate 60s linear infinite; 

        @keyframes rotate {
        to {transform: rotate(180deg);}
        }
`