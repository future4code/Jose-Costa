import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../constants/url";
import { useProtectPage } from "../../hooks/useProtectPage";
import { useParams, useHistory } from "react-router";
import { Pane, Heading, Spinner, Text, Button, Tablist, Tab, Paragraph, Strong, Table, toaster, IconButton, SmallTickIcon, SmallCrossIcon, Badge } from "evergreen-ui";
import { corrigeData } from "../../constants/corrigeData";
import { ContainerMobile, ContainerTableHead, ContainerTable, ContainerTabMobile } from "./styled-components";

const TripDetailsPage = () => {
    const params = useParams();
    const id = params.id;
    const history = useHistory();
    const [trips, setTrips] = useState("");
    const [loadingTrips, setLoadingTrips] = useState(false);
    const [errorTrips, setErrorTrips] = useState("");
    const [busca, setBusca] = useState("");
    const [buscaAprovados, setBuscaAprovados] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [tabs] = useState(["Detalhes", "Candidatos pendentes", "Candidatos aprovados"])
    const [statusDecide, setStatusDecide] = useState("");

    useProtectPage();

    const goBack = () => {
        history.goBack();
    }

    // Requisição: busca a lista de candidatos para a viagem específica.
    useEffect(() => {
        setLoadingTrips(true);
        const token = localStorage.getItem("token");
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/jose-rodolfo/trip/${id}`, {
            headers: {
                auth: token,
            }
        })
            .then((res) => {
                setTrips(res.data.trip)
                setLoadingTrips(false);
            })
            .catch((err) => {
                setErrorTrips(true);
            })
    }, [statusDecide])

    // Requisição: define true ou false para a inscrição de um candidato.
    const decideCandidate = (candidateID, decide) => {
        const token = localStorage.getItem("token");

        const body = {
            "approve": decide
        }

        axios.put(`${url}/trips/${trips.id}/candidates/${candidateID}/decide`, body, {
            headers: {
                auth: token,
            }
        })
            .then((res) => {
                setStatusDecide("then");
                setStatusDecide("");
            })
            .catch((err) => {
                setStatusDecide("catch");
                setStatusDecide("");
            })
    }

    // Renderiza todos os candidatos na tela:
    const listaCandidates = trips && trips.candidates.filter((elemento) => {
        return elemento.name.toUpperCase().includes(busca.toUpperCase());
    }).map((elemento) => {
        return (
            <Table.Row key={elemento.id} isSelectable>
                <Table.TextCell flexBasis={0} flexShrink={0} flexGrow={3}>{elemento.name}</Table.TextCell>
                <Table.TextCell minWidth="100px">
                    <IconButton icon={SmallTickIcon} intent="success" marginRight={10} onClick={() => decideCandidate(elemento.id, true)} />
                    <IconButton icon={SmallCrossIcon} intent="danger" onClick={() => decideCandidate(elemento.id, false)} />
                </Table.TextCell>
            </Table.Row>
        )
    });

    // Renderiza todos os candidatos aprovados na tela:
    const listaAprovados = trips && trips.approved.filter((elemento) => {
        return elemento.name.toUpperCase().includes(buscaAprovados.toUpperCase());
    }).map((elemento) => {
        return (
            <Table.Row key={elemento.id} isSelectable>
                <Table.TextCell flex={7}>{elemento.name}</Table.TextCell>
                <ContainerTable><Table.TextCell>{elemento.profession}</Table.TextCell></ContainerTable>
                <ContainerTable><Table.TextCell isNumber>{elemento.age}</Table.TextCell></ContainerTable>
                <ContainerTable><Table.TextCell>{elemento.country}</Table.TextCell></ContainerTable>
                <Table.TextCell minWidth="50px">
                    <Badge color="green">OK</Badge>
                </Table.TextCell>
            </Table.Row>
        )
    });

    return (
        <Pane>
            <Pane background="tint1" width="100%" height="90vh" display="flex" flexDirection="column" alignItems="center" padding={10}>
                {loadingTrips && !errorTrips && <Spinner />}
                {errorTrips && <Text>Ocorreu um erro inesperado! Reinicie a página.</Text>}
                {!loadingTrips && trips && trips.length === 0 && <Text>Viagem inexistente.</Text>}
                {!loadingTrips && !errorTrips && trips &&
                    <Pane>
                        <Pane textAlign="center" marginTop={30} marginBottom={20}>
                            <Heading size={500}>{trips.name}</Heading>
                        </Pane>
                        <Pane display="flex" justifyContent="center" alignItems="center">
                            <Button onClick={goBack}>Voltar</Button>
                        </Pane>

                        <Pane height={120} padding={10}>
                            <ContainerTabMobile>
                                <Tablist margin={16} flexBasis={240}>
                                    {tabs.map((tab, index) => (
                                        <Tab size={8} key={tab} id={tab} onSelect={() => setSelectedIndex(index)} isSelected={index === selectedIndex} aria-controls={`panel-${tab}`}>
                                            {tab}
                                        </Tab>
                                    ))}
                                </Tablist>
                            </ContainerTabMobile>
                            <ContainerMobile>
                                <Pane padding={16} background="white" flex="1" width="50vw">
                                    {tabs.map((tab, index) => (
                                        <Pane key={tab} id={`panel-${tab}`} role="tabpanel" aria-labelledby={tab} aria-hidden={index !== selectedIndex} display={index === selectedIndex ? 'block' : 'none'}>
                                            {tab === "Detalhes" &&
                                                <Pane>
                                                    <Paragraph><Strong>Descrição</Strong>: {trips.description}</Paragraph>
                                                    <Paragraph><Strong>Destino</Strong>: {trips.planet}</Paragraph>
                                                    <Paragraph><Strong>Duração</Strong>: {trips.durationInDays} dias.</Paragraph>
                                                    <Paragraph><Strong>Data da viagem</Strong>: {corrigeData(trips.date)}</Paragraph>
                                                </Pane>}
                                            {tab === `Candidatos pendentes` &&
                                                <Table flexBasis={240}>
                                                    <Table.Head>
                                                        <Table.SearchHeaderCell onChange={(value) => setBusca(value)} placeholder="Busca" />
                                                        <Table.TextHeaderCell>Total: {trips.candidates.length}</Table.TextHeaderCell>
                                                    </Table.Head>
                                                    <Table.VirtualBody height={48 * listaCandidates.length}>
                                                        {listaCandidates}
                                                    </Table.VirtualBody>
                                                    {statusDecide === "then" && toaster.notify("Decisão realizada com sucesso!")}
                                                    {statusDecide === "catch" && toaster.danger("Ocorreu um erro na solicitação. Tente novamente.")}
                                                </Table>
                                            }
                                            {tab === "Candidatos aprovados" &&
                                                <Table flexBasis={240}>
                                                    <Table.Head>
                                                        <Table.SearchHeaderCell onChange={(value) => setBuscaAprovados(value)} placeholder="Busca" flex={7} />
                                                        <ContainerTableHead><Table.TextHeaderCell>Profissão</Table.TextHeaderCell></ContainerTableHead>
                                                        <ContainerTableHead><Table.TextHeaderCell>Idade</Table.TextHeaderCell></ContainerTableHead>
                                                        <ContainerTableHead><Table.TextHeaderCell>Nacionalidade</Table.TextHeaderCell></ContainerTableHead>
                                                        <ContainerTableHead><Table.TextHeaderCell>Status</Table.TextHeaderCell></ContainerTableHead>
                                                    </Table.Head>
                                                    <Table.VirtualBody height={48 * listaAprovados.length}>
                                                        {listaAprovados}
                                                    </Table.VirtualBody>
                                                    {statusDecide === "then" && toaster.notify("Decisão realizada com sucesso!")}
                                                    {statusDecide === "catch" && toaster.danger("Ocorreu um erro na solicitação. Tente novamente.")}
                                                </Table>
                                            }
                                        </Pane>
                                    ))}
                                </Pane>
                            </ContainerMobile>
                        </Pane>
                    </Pane>

                }
            </Pane>
        </Pane >

    );
}

export default TripDetailsPage;