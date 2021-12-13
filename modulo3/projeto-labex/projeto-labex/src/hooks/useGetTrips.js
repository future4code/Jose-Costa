import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../constants/url";

export const useGetTrips = (primeiroState, segundoState) => {
    const [trips, setTrips] = useState(undefined);
    const [loadingTrips, setLoadingTrips] = useState(false);
    const [errorTrips, setErrorTrips] = useState("");

    const getTrips = () => {
        setLoadingTrips(true);
        axios.get(`${url}/trips`)
            .then((res) => {
                setTrips(res.data.trips);
                setLoadingTrips(false);
            })
            .catch((err) => {
                console.log(err);
                setErrorTrips(err)
                setLoadingTrips(false);
            })
    }

    useEffect(() => {
        getTrips();
    }, [primeiroState, segundoState]);

    return [trips, loadingTrips, errorTrips];
}