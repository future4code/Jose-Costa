import React from "react";
import { useState } from "react";
import * as S from "../../constants/styled";
import ListaPosts from "./ListaPosts/ListaPosts";

import Header from "../../components/Header/Header";
import { Input, Button, Divider } from "antd";
import useForm from "../../hooks/useForm";
import { createPost } from "../../services/criacao";

const Feed = () => {
    const [form, onChange, clear] = useForm({ tittle: "", body: "" })
    const [loading, setLoading] = useState(false);
    const [postar, setPostar] = useState(false);
    const token = localStorage.getItem('token');
    const [atualizar, setAtualizar] = useState(false);

    const criarPost = (event) => {
        event.preventDefault();
        const body = {
            title: form.title,
            body: form.body
        }
        createPost(token, body, clear, setLoading, atualizar, setAtualizar)
    }

    return (
        <S.Container>
            <S.Main>
                <Header postar={postar} setPostar={setPostar} />
                {postar &&
                    <form onSubmit={criarPost}>
                        <S.Card>
                            <Input
                                name="title"
                                value={form.title}
                                onChange={onChange}
                                placeholder="Título"
                                bordered={false} 
                                required 
                                pattern={"^.{3,30}"} title={"Mín. de caractes: 3, máximo: 70."}
                                />

                            <Divider style={{ margin: "0px" }} />
                            <Input.TextArea
                                name="body"
                                value={form.body}
                                onChange={onChange}
                                bordered={false}
                                placeholder="O que você não está pensando?"
                                autoSize={{ minRows: 3, maxRows: 5 }}

                                required
                            />
                        </S.Card>
                        <S.CardBottom>
                            <Button size="small" htmlType="submit" loading={loading}>Postar</Button>
                        </S.CardBottom>
                    </form>
                }
                <ListaPosts atualizar={atualizar}/>
            </S.Main>
        </S.Container>
    )
}

export default Feed;