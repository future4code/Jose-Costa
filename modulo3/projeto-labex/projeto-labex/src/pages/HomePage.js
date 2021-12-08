import { useState } from "react"
import { Pane, Heading, Text, Button, TextInput } from "evergreen-ui";
import Header from "../components/Header";

import ListTripPages from "./ListTripsPage";

import planets from "../assets/planets.png"
import styled from "styled-components";

const ImagemTop = styled.img`
        height: ${props => props.hide ? "0px" : "300px"};
        margin-bottom: ${props => props.hide ? "10px" : "0px"};
        transform: ${props => props.rotate ? "none" : "rotate(360deg)"};
        transition: all 5s;
`

const Home = () => {
    const [rotate, setRotate] = useState(false);
    const [hide, setHide] = useState(false);
    const [optionButton, setOptionButton] = useState("buscar")

    const alterarButton = (e) => {
        setOptionButton(e.target.value)
        if (optionButton === "buscar") {
            setHide(true);
            setRotate(!rotate)
        } else if (optionButton === "viagens") {
            setHide(false);
            setRotate(!rotate);
        }
    }

    return (
        <Pane>
            <Header />

            <Pane background="tint1" width="100%" height="90vh" display="flex" flexDirection="column" alignItems="center">
                <ImagemTop rotate={rotate} hide={hide} src={planets} />

                <Pane textAlign="center" marginBottom={10}>
                    <Heading size={800} marginBottom={10}>Explore os planetas e navegue pelo espaço</Heading>
                    <Heading size={500}>Encontre a sua viagem espacial perfeita</Heading>
                </Pane>
                <Pane>
                    <Button intent="none" width={100} value="buscar" onClick={alterarButton}>Buscar</Button>
                    <Button intent="none" width={100} value="viagens" onClick={alterarButton}>Viagens</Button>
                </Pane>
                <Pane margin={20}>
                    {optionButton === "buscar" && <TextInput flex="2" width="30vw" required placeholder="Qual o destino?" />}
                    {optionButton === "viagens" && <ListTripPages />}
                </Pane>
            </Pane>
        </Pane>
    )
}

export default Home;