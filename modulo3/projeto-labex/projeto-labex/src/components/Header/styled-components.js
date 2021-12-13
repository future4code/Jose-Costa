import styled from "styled-components";

export const MenuDesktop = styled.span`
        @media (max-width: 800px) {
        button {
     display: none;
    }
}
`

export const MenuMobile = styled.span`
    display: none;

    @media (max-width: 800px) {
     display: block;
}
`