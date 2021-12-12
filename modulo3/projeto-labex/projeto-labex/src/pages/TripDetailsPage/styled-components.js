import styled from "styled-components";

export const ContainerMobile = styled.div`  
    display: flex;
    
       @media (max-width: 600px) {
        width: 90vw;

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

export const ContainerTableHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
 
     @media (max-width: 1103px) {
        div {
     display: none;
    }
}
`

export const ContainerTable = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 5vw;
    margin-right: 20px;
 
     @media (max-width: 1103px) {
        div {
     display: none;
    }
}
`

export const ContainerTabMobile = styled.div`
     @media (max-width: 1103px) {
        width: 80vw;
     }
`