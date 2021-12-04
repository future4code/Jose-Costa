import { useState } from "react";
import { choosePerson } from "../../services/Services";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { IoHeartCircleOutline, IoHeartDislikeCircleOutline } from "react-icons/io5";
import * as C from "./Style";

const TelaInicial = (props) => {
    const [statusMatch, setStatusMatch] = useState(false);
    const [statusBotoes, setStatusBotoes] = useState(true);

    const escolherPessoa = (id, escolha) => {
        setStatusBotoes(false);
        if (escolha === true) {
            setStatusMatch(true);
            setTimeout(() => { setStatusMatch(false); props.selecionarPessoa(); }, 5000);
            setTimeout(() => { setStatusBotoes(true) }, 6000);
            choosePerson(id, escolha).then((res) => {
            })
        } else if (escolha === false) {
            setStatusMatch(false);
            props.selecionarPessoa();
            setTimeout(() => { setStatusBotoes(true) }, 3000);
            choosePerson(id, escolha).then((res) => {
            })
        }
    }

    const exibirInfos = () => {
        if (props.pessoa === null) {
            return (
                <C.ContainerTexto>
                    <span>Sem pessoa disponível no momento. Você pode <i>resetar</i> os matchs ou <b>ler</b> um pouco: :)</span>
                    <span></span>
                    <p><b>·</b> “Aprenda a lidar com a solidão. Aprenda a conhecer a solidão. Acostume-se a ela, pela primeira vez na sua vida. Bem-vinda à experiência humana. Mas nunca mais use o corpo ou as emoções de outra pessoa como um modo de satisfazer seus próprios anseios não realizados.“ (Livro: Comer, Rezar e Amar)</p>
                    <p><b>·</b> A verdade é que o amor é uma decisão e não apenas um sentimento. Ele não busca os seus próprios interesses, é sofredor e transformador. E quando o amor é demonstrado verdadeiramente, como foi planejado para ser, tudo é possível. (Livro: Desafio de Amar)</p>
                    <p><b>·</b> "Quando chorares pelo término do livro, anime-se, seque suas lágrimas e lembre-se de que a estante é composta por muitos outros!" (Reinaldo Ribeiro)</p>
                </C.ContainerTexto>
            )
        } else {
            return (
                <C.ContainerMatch>
                    {statusMatch === false ?
                        <C.ImagemPerfil imagem={props.pessoa.photo} grayscale={false}>
                            <C.InfosPerfil>
                                <C.PerfilTitulo>{props.pessoa.name}<span style={{ color: "black" }}>,</span> {props.pessoa.age}</C.PerfilTitulo>
                                <C.PerfilBio>{props.pessoa.bio}</C.PerfilBio>
                            </C.InfosPerfil>
                        </C.ImagemPerfil>
                        : <C.ImagemPerfil imagem={props.pessoa.photo} grayscale={true}>
                            <C.InfosPerfil>
                                <C.PerfilTitulo>{props.pessoa.name}<span style={{ color: "black" }}>,</span> {props.pessoa.age}</C.PerfilTitulo>
                                <C.PerfilBio>{props.pessoa.bio}</C.PerfilBio>
                            </C.InfosPerfil>
                        </C.ImagemPerfil>}
                    <C.ContainerBotoes status={statusBotoes}>
                        {statusBotoes === false ? <IoHeartCircleOutline /> : <IoHeartCircleOutline onClick={() => escolherPessoa(props.pessoa.id, true)} />}
                        {statusBotoes === false ? <IoHeartDislikeCircleOutline /> : <IoHeartDislikeCircleOutline onClick={() => escolherPessoa(props.pessoa.id, false)} />}
                    </C.ContainerBotoes>
                </C.ContainerMatch>
            )
        }
    }

    return (
        <div>
            <C.Header>
                <C.Logo><p>astro·<strong>match</strong></p><span>❤</span></C.Logo>
                <BsFillPersonCheckFill onClick={() => props.alterarTela("matches")} />
            </C.Header>
            {exibirInfos()}
        </div>
    )
}

export default TelaInicial;