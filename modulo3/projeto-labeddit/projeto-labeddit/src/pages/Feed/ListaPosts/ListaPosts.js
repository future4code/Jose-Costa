import React from "react";
import { useState, useEffect } from "react";
import * as S from "../../../constants/styled";
import * as C from "./styled"
import useRequestPost from "../../../hooks/useRequestPost";
import DadosPosts from "../../../components/DadosPosts/DadosPost";
import { UserOutlined, LoadingOutlined } from "@ant-design/icons";
import { Divider, Typography, Spin, Pagination } from "antd";
import { verificarData, verificarHora } from "../../../constants/verificarDataHora";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const ListaPosts = (props) => {
    const token = localStorage.getItem('token');
    const [pagina, setPagina] = useState(1);
    const [posts, loading] = useRequestPost(token, props.atualizar, pagina);

    const onChange = (page) => {
        setPagina(page)
        window.scrollTo(0, 0)
    }

    const listarPosts = posts.length > 0 && posts.map((item, id) => {
        return <div key={id}>
            <S.Card>
                <C.PostInfo>
                    <C.PostHeader>
                        <Typography.Text strong style={{ color: "gray" }}>
                            <UserOutlined style={{ color: "#acacac", marginRight: "5px" }} />
                            {item.username}
                        </Typography.Text>
                        <div style={{ fontSize: "12px" }}>
                            <Typography.Text> {verificarHora(item.createdAt)} </Typography.Text>
                            <Divider type="vertical" />
                            <Typography.Text> {verificarData(item.createdAt)} </Typography.Text>
                        </div>
                    </C.PostHeader>
                    <C.Divisao>
                        <p><Typography.Text strong style={{ marginRight: "10px", marginLeft: "10px" }}>{item.title}</Typography.Text></p>
                    </C.Divisao>
                    <p>{item.body}</p>
                </C.PostInfo >
            </S.Card>
            <DadosPosts item={item} />
        </div >
    })

    return (
        <>
            {loading === true &&
                <S.Loading>
                    <Spin indicator={antIcon} />
                </S.Loading>
            }
            {posts && listarPosts}

            {loading !== true && (
                <C.Paginas>
                    <Pagination current={pagina} onChange={onChange} total={50} size="small" />
                </C.Paginas>
            )}

        </>
    )
}

export default ListaPosts;