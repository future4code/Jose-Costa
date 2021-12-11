import { Card, Heading, Button, TextInputField, SelectField, TextareaField, toaster } from "evergreen-ui"
import Paises from "../constants/lista-paises.json";
import { useForm } from "../hooks/useForm";
import axios from "axios";
import { url } from "../constants/url";
import { useState } from "react";

const ApplicationForm = (props) => {
    const [statusEnviar, setStatusEnviar] = useState("");
    const [buttonLoading, setButtonLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const { form, onChange, cleanFields } = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: "Brasil"
    })


    const enviarCardastro = (e) => {
        e.preventDefault();
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country,
        }
        setButtonLoading(true);
        axios.post(`${url}/trips/${props.id}/apply`, body)
            .then((res) => {
                setStatusEnviar("then");
                setStatusEnviar("");
                setButtonLoading(false);
                setButtonDisabled(true);
                cleanFields();
            }).catch(((err) => {
                setStatusEnviar("catch");
                setStatusEnviar("");
                setButtonLoading(false);
            }))
    }

    return (
        <Card backgroundColor="white" elevation={0} padding={10} display="flex" flexDirection="column" marginTop={16} >
            <Heading margin={10}>Inscreva-se para a viagem:</Heading>
            <form onSubmit={enviarCardastro}>
                <TextInputField label="Nome" name={"name"} onChange={onChange} value={form.name} pattern={"^.{3,}"} title="Nome deve ter no mínimo 3 letras" required />
                <TextInputField label="Idade" name={"age"} onChange={onChange} value={form.age} type="number" min={18} required />
                <TextInputField label="Profissão" name={"profession"} onChange={onChange} value={form.profession} required />
                <SelectField label="Nacionalidade" name={"country"} onChange={onChange} value={form.country} required>
                    {Paises.map((pais, id) => {
                        return <option key={id} value={pais.nome}>{pais.nome}</option>
                    })}
                </SelectField>
                <TextareaField label="Deixe uma mensagem para o administrador da viagem:" name={"applicationText"} onChange={onChange} value={form.applicationText} required />
                <Button isLoading={buttonLoading} disabled={buttonDisabled} intent="success">Enviar</Button>
            </form>
            {statusEnviar === "then" && toaster.success("Inscrição enviada com sucesso!")}
            {statusEnviar === "catch" && toaster.danger("Ocorreu um erro na solicitação. Tente novamente.")}
        </Card>
    )
}

export default ApplicationForm;