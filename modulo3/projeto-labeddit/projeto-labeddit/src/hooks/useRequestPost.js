import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import { enviarNotificacao } from "../constants/enviarNotificacao";

const useRequestPost = (token) => {
    const [posts, setPosts] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`${BASE_URL}/posts`, {
            headers: {
                Authorization: token
            }
        }).then((res) => {
            setPosts(res.data)
            setLoading(res.data);
        }).catch((err) => {
             setLoading(false);
            enviarNotificacao("error", err.response.data)
        });
     }, [BASE_URL])

     return [posts, loading]
    }

export default useRequestPost;