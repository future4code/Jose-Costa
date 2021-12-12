import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { Pane, TextInputField, Heading, Card, Button, toaster } from "evergreen-ui";

const LoginPage = () => {
    const history = useHistory("");
    const [buttonLoading, setButtonLoading] = useState(false);
    const [errorLoading, setErrorLoading] = useState(false);
    const { form, onChange, cleanFields } = useForm({
        email: "",
        password: "",
    })
  
    // Requisição: envia as informações do usuário para API verificar autenticação.
    const onSubmitLogin = (e) => {
        e.preventDefault();
        const body = {
            email: form.email,
            password: form.password
        }
        setButtonLoading(true)
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/jose-rodolfo/login", body)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                history.push("/admin/trips/list")
                cleanFields();
                setButtonLoading(false)
            })
            .catch((err) => {
                console.log(err.response);
                setErrorLoading(true);
                setErrorLoading(false);
                setButtonLoading(false)
            })
    }

    return (
        <Pane background="tint1" width="100%" height="90vh" display="flex" flexDirection="column" alignItems="center">

            <Pane textAlign="center" marginBottom={10}>
                <Heading size={500} marginTop={30}>Acesso a área administrativa:</Heading>
            </Pane>
            <Card backgroundColor="white" elevation={2} padding={20} display="flex" flexDirection="column" marginTop={16} width={300}>
                <form onSubmit={onSubmitLogin}>
                    <TextInputField label="E-mail" name={"email"} type="email" onChange={onChange} value={form.email} required />
                    <TextInputField label="Senha" name={"password"} type="password" onChange={onChange} value={form.password} required />
                    <Button isLoading={buttonLoading}>Enviar</Button>
                </form>
                {errorLoading === true && toaster.danger("Ocorreu um erro. Verifique os dados e tente novamente.")}
            </Card>
        </Pane>
    )
}

export default LoginPage;
