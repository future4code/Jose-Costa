import { useParams } from "react-router";

const TripDetailsPage = () => {
    const params = useParams();
    
    const id = params.id;

    return (
        <div>
            Detalhes da viagem:
           {id && id === "1" && <p>1</p>}
        </div>
    )
}

export default TripDetailsPage;