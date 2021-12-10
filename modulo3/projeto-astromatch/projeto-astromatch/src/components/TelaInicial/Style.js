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

export const ContainerMatch = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerTexto = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    span {
        margin: 10px;
        align-self: center;
    }

    p {
        margin: 10px;
        text-align: justify;
    }
`

export const ImagemPerfil = styled.div`
    margin-top: 15px;
    position: relative;
    width: 90%;
    height: 430px;
    background-image: url(${props => props.imagem});
    background-size: cover;
    background-position: top;
    filter: grayscale(${props => props.grayscale === false ? "1" : "none"});
    border-radius: 10px;
    transition: all 1s;
`

export const InfosPerfil = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: end;
`

export const PerfilTitulo = styled.span`
    font-size: 25px;
    text-align: center;
    background-color: rgba(1, 5, 5, 0.5);
`

export const PerfilBio = styled.span`
    font-size: 15px;
    background-color: rgba(1, 5, 5, 0.5);
    padding: 10px;
    border-radius: 0px 0px 15px 15px;
`

export const ContainerBotoes = styled.div`
    margin: 13px;
    width: 100%;
    display: flex;
    color: ${props => props.status ? "black" : "#d1d1d1"};
    justify-content: space-evenly;

    svg {
        font-size: 40px;
        cursor: ${props => props.status ? "pointer" : "auto"};
        transition: all 2s;
        transform: ${props => props.status ? "none" : "rotate(360deg)"};
    }

    svg:hover {
        color: #3e3e3e;
    }
`