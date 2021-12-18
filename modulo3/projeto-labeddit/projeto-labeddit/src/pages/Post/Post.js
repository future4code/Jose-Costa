import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import useRequestComment from "../../hooks/useRequestComment";

const Posts = () => {
    const params = useParams();
    const id = params.id;
    const token = localStorage.getItem('token');
    const [comentarios, loading] = useRequestComment(token, id);

    return (
        <div>{id}</div>
    )

}

export default Posts;