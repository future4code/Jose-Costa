import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";

export const useGetTrips = () => {
    const [trips, setTrips] = useState(undefined);
    const [loadingTrips, setLoadingTrips] = useState(false);
    const [errorTrips, setErrorTrips] = useState("");

    const getTrips = () => {
        setLoadingTrips(true);
        axios.get(`${BASE_URL}/trips`)
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
    }, [BASE_URL]);

    return [trips, loadingTrips, errorTrips];
}