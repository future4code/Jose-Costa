import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory("")

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onSubmitLogin = () => {
        console.log(email, password)
        const body = {
            email: email,
            password: password
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/jose-rodolfo/login", body)
        .then((res) => {
            console.log(res.data);
            console.log(res.data.token)
            localStorage.setItem("token", res.data.token)
            history.push("/admin/trips/list")
        })
        .catch((err) => {
            console.log(err.response);
        })
    }

    return (
        <div>
            <p>Login:</p>
            <input placeholder="E-mail" onChange={onChangeEmail} value={email}></input>
            <input type="password" placeholder="Senha" onChange={onChangePassword} value={password}></input>
            <button onClick={onSubmitLogin}>Enviar</button>
        </div>
    )
}

export default LoginPage;
