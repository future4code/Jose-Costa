import { Pane, SideSheet, Card, Heading, Button, TextInputField, SelectField, toaster, IconButton, SmallCrossIcon } from "evergreen-ui"
import Planetas from "../../constants/lista-planetas.json"
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { url } from "../../constants/url";
import { useState } from "react";
import React from "react";
import { ContainerMobileHeader, ButtonMobile, ContainerMobile } from "./styled-components";

const CreateTrip = (props) => {
    const [statusEnviar, setStatusEnviar] = useState("");
    const [buttonLoading, setButtonLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const { form, onChange, cleanFields } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: "",
    })

    const enviarViagem = (e) => {
        e.preventDefault();
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: Number(form.durationInDays),
        }
        const token = localStorage.getItem("token");
        setButtonLoading(true);
        axios.post(`${url}/trips`, body, {
            headers: {
                auth: token,
            }
        })
            .then((res) => {
                setStatusEnviar("then");
                setStatusEnviar("");
                setButtonLoading(false);
                cleanFields();
            }).catch(((err) => {
                setStatusEnviar("catch");
                setStatusEnviar("");
                setButtonLoading(false);
            }))
    }

    const dataLimite = () => {
        const dataAtual = new Date();
        const dia = dataAtual.getDate();
        const mes = dataAtual.getMonth() + 1;
        const ano = dataAtual.getFullYear();
        return `${ano}-${mes}-${dia}`;
    };

    return (
        <React.Fragment>
            <SideSheet isShown={props.criarViagem} onCloseComplete={() => props.abrirCriar(false, "")} containerProps={{ display: 'flex', flex: '1', flexDirection: 'column' }} >

                <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="#75CAAA">
                    <ContainerMobileHeader>
                        <Pane display="flex" justifyContent="space-between" alignItems="center" height={45} padding={15}>

                            <Heading size={600}>Nova viagem</Heading>
                            <ButtonMobile>
                                <IconButton icon={SmallCrossIcon} onClick={() => props.abrirCriar(false, "")}>Voltar</IconButton>
                            </ButtonMobile>

                        </Pane>
                    </ContainerMobileHeader>
                </Pane>
                <ContainerMobile>
                    <Pane flex="1" overflowY="scroll" backgroundColor="#DCF2EA" padding={16} height="100%">
                        <Card backgroundColor="white" elevation={0} padding={10} display="flex" flexDirection="column" >
                            <form onSubmit={enviarViagem} >
                                <TextInputField label="Título da viagem" name={"name"} onChange={onChange} value={form.name} pattern={"^.{3,}"} title="Nome deve ter no mínimo 3 letras" required />
                                <TextInputField label="Escreva uma breve descrição" name={"description"} onChange={onChange} value={form.description} pattern={"^.{10,}"} title="Mínimo de 10 caracteres" required />
                                <TextInputField label="Data" name={"date"} type="date" min={dataLimite()} onChange={onChange} value={form.date} required />
                                <TextInputField label="Duração (em dias)" type="number" min={1} name={"durationInDays"} onChange={onChange} value={form.durationInDays} required />
                                <SelectField label="Planeta" name={"planet"} onChange={onChange} value={form.planet} required>
                                    <option value="" selected disabled>Selecione um planeta</option>
                                    {Planetas.map((planeta, id) => {
                                        return <option key={id} value={planeta} required>{planeta}</option>
                                    })}
                                </SelectField>
                                <Button isLoading={buttonLoading} disabled={buttonDisabled} intent="success">Enviar</Button>
                            </form>
                            {statusEnviar === "then" && toaster.success("Inscrição enviada com sucesso!")}
                            {statusEnviar === "catch" && toaster.danger("Ocorreu um erro na solicitação. Tente novamente.")}
                        </Card>
                    </Pane>
                </ContainerMobile>
            </SideSheet>
        </React.Fragment>
    )
}

export default CreateTrip;