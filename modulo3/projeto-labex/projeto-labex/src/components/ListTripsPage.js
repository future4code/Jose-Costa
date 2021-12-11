import { useGetTrips } from "../services/useGetTrips";
import { Pane, Spinner, Text, Table, Heading, Button } from "evergreen-ui";
import TripDetails from "./TripDetails";
import { useState } from "react";

const ListTripPages = () => {
    const [trips, loadingTrips, errorTrips] = useGetTrips();
    const [status, setStatus] = useState({ detalhes: false, infos: "" });
    const [busca, setBusca] = useState("");

    const listaTrips = trips && trips.filter((elemento, id) => {
        return elemento.name.toUpperCase().includes(busca.toUpperCase());
    }).map((elemento, id) => {
        return (
            <Table.Row key={elemento.id} isSelectable onSelect={() => exibirDetalhes(true, elemento)}>
                <Table.TextCell flexBasis={560} flexShrink={0} flexGrow={0}>{elemento.name}</Table.TextCell>
                <Table.TextCell>{elemento.planet}</Table.TextCell>
                <Table.TextCell isNumber flexBasis={40}>{elemento.date}</Table.TextCell>
            </Table.Row>
        )
    });

    const exibirDetalhes = (status, info) => {
        setStatus({ detalhes: status, infos: info })
    }

    return (
        <Pane>
            <Pane background="tint1" width="100%" height="90vh" display="flex" flexDirection="column" alignItems="center">

                <Pane textAlign="center" marginBottom={10}>
                    {/* <Heading size={800} marginBottom={10}>Explore os planetas e navegue pelo espaço</Heading> */}
                    <Heading size={500} marginTop={30}>Encontre as melhores viagens espaciais:</Heading>
                </Pane>
                <Pane>
                    {/* <Button intent="none" width={100} value="buscar" onClick={alterarButton}>Buscar</Button>
                    <Button intent="none" width={100} value="viagens" onClick={alterarPagina}>Viagens</Button> */}
                </Pane>
                <Pane margin={20}>

                    {loadingTrips && <Spinner />}
                    {!loadingTrips && trips && trips.length === 0 && <Text>Sem trips adicionadas.</Text>}
                    {!loadingTrips && errorTrips && <Text>Ocorreu um erro inesperado! Reinicie a página.</Text>}
                    {!loadingTrips && trips && trips.length > 0 && listaTrips &&
                        <Table width="60vw">
                            <Table.Head>
                                <Table.SearchHeaderCell onChange={(value) => setBusca(value)} placeholder="Busca" flexBasis={560} flexShrink={0} flexGrow={0} />
                                <Table.TextHeaderCell>Destino</Table.TextHeaderCell>
                                <Table.TextHeaderCell>Data</Table.TextHeaderCell>
                            </Table.Head>
                            <Table.VirtualBody height={200}>
                                {listaTrips}
                            </Table.VirtualBody>
                        </Table>
                    }
                    {status.detalhes === true && <TripDetails exibirDetalhes={exibirDetalhes} status={status} />}

                </Pane>
            </Pane>
        </Pane>
    );
}

export default ListTripPages;
