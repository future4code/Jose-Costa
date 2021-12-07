import { useGetTrips } from "../services/useGetTrips"

const ListTripPages = () => {
    const [trips, loadingTrips, errorTrips] = useGetTrips();

    return (
        <div>
            {loadingTrips && <p>Carregando...</p>}
            {!loadingTrips && trips && trips.length === 0 && <p>Sem trips adicionadas.</p>}
            {!loadingTrips && errorTrips && <p>Ocorreu um erro inesperado! Reinicie a página.</p>}
            {!loadingTrips && trips && trips.length > 0 && <p>Lista de trips:</p>}
        </div>
    );
}

export default ListTripPages;
