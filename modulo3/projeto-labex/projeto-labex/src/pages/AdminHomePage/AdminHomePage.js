import { useProtectPage } from "../../hooks/useProtectPage";
import { useGetTrips } from "../../hooks/useGetTrips";
import { Pane, Spinner, Text, Table, Heading, IconButton, EditIcon, TrashIcon, majorScale, Button } from "evergreen-ui";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import CreateTrip from "../../components/CreateTrip/CreateTrip";
import DeleteTrip from "../../components/DeleteTrip/DeleteTrip";
import { ContainerMobile} from "./styled-components";

const AdminHomePage = () => {
    const history = useHistory("");
    const [criarViagem, setCriarViagem] = useState(false);
    const [deletarViagem, setDeletarViagem] = useState({ status: false, id: "" });
    const [busca, setBusca] = useState("");
    const [trips, loadingTrips, errorTrips] = useGetTrips(criarViagem, deletarViagem);

    useProtectPage();

    // Função de logout e redireceiona para página de início:
    const logout = () => {
        localStorage.removeItem("token");
        history.push(`/`);
    }

    // Funções para abertura de popups e páginas auxiliares:
    const abrirDetalhes = (id) => {
        history.push(`/admin/trips/${id}`);
    }

    const abrirCriar = (status) => {
        setCriarViagem(status);
    }

    const abrirDeletar = (infoStatus, id) => {
        setDeletarViagem({ status: infoStatus, info: id });
    }

    // Renderiza a lista de viagens na tela:
    const listaTrips = trips && trips.filter((elemento) => {
        return elemento.name.toUpperCase().includes(busca.toUpperCase());
    }).map((elemento) => {
        return (
            <Table.Row key={elemento.id} isSelectable>
                <Table.TextCell flexBasis={0} flexShrink={0} flexGrow={4}>{elemento.name}</Table.TextCell>
                <Table.TextCell minWidth="100px">
                    <IconButton icon={EditIcon} marginRight={majorScale(1)} onClick={() => abrirDetalhes(elemento.id)} />
                    <IconButton icon={TrashIcon} intent="danger" marginLeft={1} onClick={() => abrirDeletar(true, elemento)} />
                </Table.TextCell>
            </Table.Row>
        )
    });

    return (
        <Pane>
            <Pane background="tint1" width="100%" height="90vh" display="flex" flexDirection="column" alignItems="center">

                <Pane textAlign="center" marginBottom={10}>
                    <Heading size={500} marginTop={30}>Boas vindas! :)</Heading>
                </Pane>

                <Pane marginTop={10} display="flex" flexDirection="column" alignItems="center">
                    <Pane display="flex" padding={10} justifyContent="center" alignItems="center" marginBottom={30}>

                        <Button intent="success" marginRight={majorScale(2)} onClick={() => abrirCriar(true)}>Criar viagem</Button>
                        <Button marginRight={majorScale(2)} onClick={logout}>Logout</Button>

                    </Pane>
                    {loadingTrips && <Spinner />}
                    {!loadingTrips && trips && trips.length === 0 && <Text>Sem trips adicionadas.</Text>}
                    {!loadingTrips && errorTrips && <Text>Ocorreu um erro inesperado! Reinicie a página.</Text>}
                    {!loadingTrips && trips && trips.length > 0 && listaTrips &&
                        <ContainerMobile>
                            <Table width="100%">
                                <Table.Head>
                                    <Table.SearchHeaderCell onChange={(value) => setBusca(value)} placeholder="Busca" />
                                </Table.Head>
                                <Table.VirtualBody height={48 * trips.length}>
                                    {listaTrips}
                                </Table.VirtualBody>
                            </Table>
                        </ContainerMobile>
                    }
                </Pane>
            </Pane>
            {criarViagem === true && <CreateTrip criarViagem={criarViagem} abrirCriar={abrirCriar} />}
            {deletarViagem.status === true && <DeleteTrip deletarViagem={deletarViagem} abrirDeletar={abrirDeletar} />}
        </Pane>
    )
}

export default AdminHomePage;