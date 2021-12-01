import { useState } from "react";

const TelaInicial = (props) => {
    const [statusProfile, setStatusProfile] = useState(false);
    
    const alterarProfile = () => {
        setStatusProfile(!statusProfile);
    }

    return (
        <div>
            <button onClick={props.selecionarPessoa}>Trocar</button>
            <p>{props.pessoa.name}</p>
            <img src={props.pessoa.photo} alt="Foto do Profile" />
            <p>{props.pessoa.bio}</p>
        </div>
    )
}

export default TelaInicial;