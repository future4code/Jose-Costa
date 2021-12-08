import { useState, useEffect } from "react";
import axios from "axios";
import { useProtectPage } from "../hooks/useProtectPage";
import { useParams } from "react-router";

const TripDetailsPage = () => {
    const params = useParams();
    
    const id = params.id;

    const [trips, setTrips] = useState("");

    useProtectPage();
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/jose-rodolfo/trip/${id}`, {
            headers: {
                auth: token,
            }
        })
            .then((res) => {
                console.log("a", res.data.trip.name);
                setTrips(res.data.trip.name)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }, [])

    return (
        <div>
            Detalhes da viagem:
           {trips}
        </div>
    )
}

export default TripDetailsPage;