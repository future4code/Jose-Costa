import styled from "styled-components";


export const Header = styled.header`
    width: 100%;
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;

    svg {
        font-size: 30px;
        cursor: pointer;
        padding-right: 4px;
    }

    svg:hover {
        color: #3e3e3e;
    }
`

export const Logo = styled.div`
        display: flex;
        font-size: 20px;
        padding-left: 4px;
        transition: all 8s;

        span {
            display: none;
        }
        
    &:hover {
        transform: translate(50px);

        p {
            transition: all 8s;
            padding-right: 30px;
        }
        
        span {
            transition: all 8s;
            display: inline;
        }
    }
`

export const ConfirmaReset = styled.div`
    width: 15vw;
    height: 14vh;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PopUp = styled.div`
    padding: 1vw 1vw 1vw 1vw;
    background-color: white;
    width: 25vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid gray;
    border-radius: 5px;

    div {
        width: 100px;
        display: flex;
        justify-content: space-around;
    }

    svg {
        font-size: 20px;
        cursor: pointer;
        margin: 7px;
    }

    svg:hover {
        color: #3e3e3e;
    }
`

export const Icones = styled.div`
    width: 100px;
    display: flex;
    justify-content: space-around;
    svg {
        font-size: 30px;
        cursor: pointer;
    }
`

export const ContainerMatch = styled.div`
    width: 100%;
    height: 510px;
    overflow-y: scroll;
`

export const CardMatches = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100px;

    div {
        display: flex;
        align-items: center;

        p {
            margin: 10px;
        }
    }

    svg {
        font-size: 25px;
    }

    svg:hover {
        color: gray;
        cursor: pointer;
    }

    &:hover {
        background-color:  #e5e5e5;

        div {
            filter: grayscale(0);
        }
    }

`

export const CardImagem = styled.div`
    height: 60px;
    width: 50px;
    border-radius: 5px;
    background-image: url(${props => props.imagem});
    background-size: cover;
    filter: grayscale(1);
`