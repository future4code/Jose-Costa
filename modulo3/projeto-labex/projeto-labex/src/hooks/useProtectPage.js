import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useProtectPage = () => {
    const history = useHistory("");

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token === null) {
            console.log("Não está logado. Redirecionando para o Login...")
            history.push("/login")
        }

    }, [])
}
