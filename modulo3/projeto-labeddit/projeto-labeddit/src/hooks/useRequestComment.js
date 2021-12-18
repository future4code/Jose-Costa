import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";

const useRequestComment = (token, id) => {
    const [comentarios, setComentarios] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`${BASE_URL}/posts/${id}/comments`, {
            headers: {
                Authorization: token
            }
        }).then((res) => {
            setComentarios(res.data)
            setLoading(res.data);
            console.log(res.data)
        }).catch((err) => {
             setLoading(false);
        });
     }, [])

     return [comentarios, loading]
    }

export default useRequestComment;