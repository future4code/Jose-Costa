import React from "react";

import * as S from "../../constants/styled";
import ListaPosts from "./ListaPosts/ListaPosts";

import Header from "../../components/Header/Header";
import { Input, Button } from "antd";

const Feed = () => {
    return (
        <S.Container>
            <S.Main>
                <Header />
                <S.Card>
                    <Input.TextArea
                        // // value=""
                        // onChange=""
                        bordered={false}
                        placeholder="O que você não está pensando?"
                        autoSize={{ minRows: 3, maxRows: 5 }}
                    />
                </S.Card>
                <S.CardBottom>
                    <Button size="small">Postar</Button>
                </S.CardBottom>

                <ListaPosts />
            </S.Main>
        </S.Container>
    )
}

export default Feed;