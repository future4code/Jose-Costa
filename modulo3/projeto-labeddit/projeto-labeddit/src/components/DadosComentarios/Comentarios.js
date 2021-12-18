import { useParams } from "react-router-dom";

const Comentarios = () => {
    const params = useParams();
    const id = params.id;

    return (
        <div>{id}</div>
    )

}

export default Comentarios;