import styled from "styled-components";

export const ContainerMobile = styled.div`  
     @media (max-width: 600px) {
         width: 100vw; 

        h2 {
            font-size: 15px;
        }

        strong {
            font-size: 13px;
        }
        span {
            font-size: 13px;
        }
    }
`

export const ButtonMobile = styled.span`
    display: none;

    @media (max-width: 600px) {
         display: inline; 
    }
`
