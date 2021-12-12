import { useGetTrips } from "../../hooks/useGetTrips";
import { Pane, Spinner, Text, Table, Heading } from "evergreen-ui";
import TripDetails from "../../components/TripDetails/TripDetails";
import { useState } from "react";
import { corrigeData } from "../../constants/corrigeData";
import { ContainerMobile } from "./styled-components";

const ListTripPages = () => {
    const [trips, loadingTrips, errorTrips] = useGetTrips();
    const [status, setStatus] = useState({ detalhes: false, infos: "" });
    const [busca, setBusca] = useState("");

    // Renderiza a lista de viagens na tela:
    const listaTrips = trips && trips.filter((elemento, id) => {
        return elemento.name.toUpperCase().includes(busca.toUpperCase());
    }).map((elemento, id) => {
        return (
            <Table.Row key={elemento.id} isSelectable onSelect={() => exibirDetalhes(true, elemento)}>
                <Table.TextCell flex={7}>{elemento.name}</Table.TextCell>
                <ContainerMobile>
                    <Table.TextCell>{elemento.planet}</Table.TextCell>
                </ContainerMobile>
                <ContainerMobile>
                    <Table.TextCell isNumber flexBasis={40}> {corrigeData(elemento.date)} </Table.TextCell>
                </ContainerMobile>
            </Table.Row>
        )
    });

    // Função para acionar(true ou false) o popup de exibir os detalhes da viagem;
    const exibirDetalhes = (status, info) => {
        setStatus({ detalhes: status, infos: info })
    }

    return (
        <Pane>
            <Pane background="tint1" width="100%" height="90vh" display="flex" flexDirection="column" alignItems="center">

                <Pane textAlign="center" marginBottom={10}>
                    <Heading size={500} marginTop={30}>Clique na viagem para mais detalhes:</Heading>
                </Pane>

                <Pane margin={20}>

                    {loadingTrips && <Spinner />}
                    {!loadingTrips && trips && trips.length === 0 && <Text>Sem trips adicionadas.</Text>}
                    {!loadingTrips && errorTrips && <Text>Ocorreu um erro inesperado! Reinicie a página.</Text>}
                    {!loadingTrips && trips && trips.length > 0 && listaTrips &&
                        <Table width="55vw">
                            <Table.Head>

                                <Table.SearchHeaderCell onChange={(value) => setBusca(value)} placeholder="Busca" flex={7} />
                                <ContainerMobile>
                                    <Table.TextHeaderCell>Destino</Table.TextHeaderCell>
                                </ContainerMobile>
                                <ContainerMobile>
                                    <Table.TextHeaderCell>Data</Table.TextHeaderCell>
                                </ContainerMobile>
                            </Table.Head>
                            <Table.VirtualBody height={48 * trips.length}>
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
