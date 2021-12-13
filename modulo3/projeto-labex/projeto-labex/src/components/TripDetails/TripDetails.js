import React from "react";
import { Pane, Card, Heading, Text, SideSheet, Strong, IconButton, SmallCrossIcon } from "evergreen-ui";
import ApplicationForm from "../ApplicationForm/ApplicationForm";
import { corrigeData } from "../../constants/corrigeData";
import { ContainerMobile, ButtonMobile } from "./styled-components";

const TripDetails = (props) => {
    return (
        <React.Fragment>
            <SideSheet isShown={props.status.detalhes} onCloseComplete={() => props.exibirDetalhes(false, "")} containerProps={{ display: 'flex', flex: '1', flexDirection: 'column' }} >

                <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="#D6E0FF">
                    <ContainerMobile>
                        <Pane padding={15} display="flex" justifyContent="space-between" alignItems="center" height={45}>
                            <Heading size={600}>{props.status.infos.name}</Heading>
                            <ButtonMobile>
                                <IconButton icon={SmallCrossIcon} onClick={() => props.exibirDetalhes(false, "")}>Voltar</IconButton>
                            </ButtonMobile>
                        </Pane>
                    </ContainerMobile>
                </Pane>
                <ContainerMobile>
                    <Pane flex="1" overflowY="scroll" backgroundColor="#EBF0FF" padding={16}>
                        <Card backgroundColor="white" elevation={0} padding={10} display="flex" flexDirection="column" >
                            <Heading margin={10}>{props.status.infos.description}</Heading>
                            <Text size={400} margin={10}><Strong size={400}>Destino</Strong>: {props.status.infos.planet}</Text>
                            <Text size={400} margin={10}><Strong size={400}>Data da viagem</Strong>: {corrigeData(props.status.infos.date)} </Text>
                            <Text size={400} margin={10}><Strong size={400}>Duração da viagem</Strong>: {props.status.infos.durationInDays} dias</Text>
                            <Text></Text>
                            <button style={{ background: "white", border: "none" }}></button>
                        </Card>
                        <ApplicationForm id={props.status.infos.id} />
                    </Pane>
                </ContainerMobile>

            </SideSheet>

        </React.Fragment >
    )
}

export default TripDetails;