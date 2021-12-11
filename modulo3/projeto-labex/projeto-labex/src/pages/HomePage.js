import { Pane, Heading } from "evergreen-ui";
import planets from "../assets/planets.png"
import styled from "styled-components";

const ImagemTop = styled.img`
        height: ${props => props.hide ? "0px" : "300px"};
        animation: rotate 60s linear infinite; 

        @keyframes rotate {
        to {transform: rotate(180deg);}
        }
`

const Home = () => {
    return (
        <Pane>
            <Pane background="tint1" width="100%" height="90vh" display="flex" flexDirection="column" alignItems="center">
                <ImagemTop src={planets} />

                <Pane textAlign="center" marginBottom={10}>
                    <Heading size={800} marginBottom={10}>Explore os planetas e navegue pelo espaço.</Heading>
                    <Heading size={500} marginTop={20}>Encontre as melhores viagens espaciais.</Heading>
                </Pane>
            </Pane>
        </Pane>
    )
}

export default Home;