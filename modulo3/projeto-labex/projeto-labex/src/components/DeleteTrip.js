import { Pane, Dialog, toaster } from "evergreen-ui";
import { useState } from "react";
import axios from "axios";
import { url } from "../constants/url";

const DeleteTrip = (props) => {
    const [statusEnviar, setStatusEnviar] = useState("");
    const [buttonLoading, setButtonLoading] = useState(false);

    const deletarTrip = () => {
           const token = localStorage.getItem("token");
        setButtonLoading(true);
        axios.delete(`${url}/trips/${props.deletarViagem.info.id}`, {
            headers: {
                auth: token,
            }
        })
            .then((res) => {
                setStatusEnviar("then");
                setStatusEnviar("");
                setButtonLoading(false);
                props.abrirDeletar(false, "");
            }).catch(((err) => {
                console.log(err)
                setStatusEnviar("catch");
                setStatusEnviar("");
                setButtonLoading(false);
            }))
    }

    return (
        <Pane>
            <Dialog
                isShown={props.deletarViagem.status}
                title={props.deletarViagem.info.name}
                intent="danger"
                onCloseComplete={() => props.abrirDeletar(false, "")}
                isConfirmLoading={buttonLoading}
                confirmLabel="Deletar"
                onConfirm={deletarTrip} 
                height={200}>
                Tem certeza que deseja excluir esta viagem?
            </Dialog>
            {statusEnviar === "then" && toaster.success("Viagem deletada com sucesso!")}
            {statusEnviar === "catch" && toaster.danger("Ocorreu um erro na solicitação. Tente novamente.")}
        </Pane>
    )
}

export default DeleteTrip;