import * as S from "../../../constants/styled";
import * as C from "./styled"
import useRequestPost from "../../../hooks/useRequestPost";
import { UserOutlined } from "@ant-design/icons";
import { Divider, Typography } from "antd";
import { verificarData, verificarHora } from "../../../constants/verificarDataHora";

const ListaPosts = () => {
    const token = localStorage.getItem('token');
    const [posts, loading] = useRequestPost(token);

    const listarPosts = posts.length > 0 && posts.map((item) => {
        return <div>
            <S.Card>
                <C.PostInfo>
                    <C.PostHeader>
                        <Typography.Text strong>
                            <UserOutlined style={{ color: "#acacac", marginRight: "5px" }} />
                            {item.username}
                        </Typography.Text>
                        <div>
                            <Typography.Text> {verificarHora(item.createdAt)} </Typography.Text>
                            <Divider type="vertical" />
                            <Typography.Text> {verificarData(item.createdAt)} </Typography.Text>
                        </div>
                    </C.PostHeader>

                    <Divider orientation="left" plain>{item.title}</Divider>
                    <p>Teste</p>
                </C.PostInfo >
            </S.Card >
            <S.CardBottom>
                aew
            </S.CardBottom>
        </div>
    })

    console.log(posts)

    return (
        <>
            {posts && listarPosts}
        </>
    )
}

export default ListaPosts;