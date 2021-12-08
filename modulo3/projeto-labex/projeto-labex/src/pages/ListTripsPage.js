import { useGetTrips } from "../services/useGetTrips";
import { Spinner, Text, Table, Strong } from "evergreen-ui";

const ListTripPages = () => {
    const [trips, loadingTrips, errorTrips] = useGetTrips();

    const listaTrips = trips && trips.map((profile, id) => {
        return (
            <Table.Row key={profile.id} isSelectable onSelect={() => alert(profile.name)}>
                <Table.TextCell>{profile.name}</Table.TextCell>
                <Table.TextCell>{profile.id}</Table.TextCell>
                <Table.TextCell isNumber>{profile.name}</Table.TextCell>
            </Table.Row>
        )
    });

    return (
        <div>
            {loadingTrips && <Spinner />}
            {!loadingTrips && trips && trips.length === 0 && <p>Sem trips adicionadas.</p>}
            {!loadingTrips && errorTrips && <p>Ocorreu um erro inesperado! Reinicie a página.</p>}
            {!loadingTrips && trips && trips.length > 0 && listaTrips &&
                <Table width="50vw">
                    <Table.Head>
                        <Table.SearchHeaderCell />
                        <Table.TextHeaderCell>Last Activity</Table.TextHeaderCell>
                        <Table.TextHeaderCell>ltv</Table.TextHeaderCell>
                    </Table.Head>
                    <Table.VirtualBody height={240}>
                        {listaTrips}
                    </Table.VirtualBody>
                </Table>
            }
        </div >
    );
}

export default ListTripPages;
