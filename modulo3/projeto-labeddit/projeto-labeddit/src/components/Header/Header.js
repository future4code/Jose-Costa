import LabeTitulo from "../LabeTitulo/LabeTitulo";
import * as C from "./styled";
import { useState } from "react";
import { Tooltip, Button } from "antd";
import { SearchOutlined, EditOutlined } from '@ant-design/icons';

const Header = (props) => {
    const [scroll, setScroll] = useState(false);

    window.addEventListener("scroll", function (event) {
        const scroll = window.scrollY;
        if (scroll < 10) {
            setScroll(false)
        } else {
            setScroll(true);
        }
    });

    const abrirPostar = () => {
        window.scrollTo(0, 0);
        props.setPostar(!props.postar)
    }

    return (
        <C.Header border={scroll}>
            <LabeTitulo />
            <div>
                <Tooltip title="Postar" >
                    <Button type="primary" shape="circle" icon={<EditOutlined />} style={{ marginRight: "5px" }} onClick={abrirPostar} />
                </Tooltip>

                <Tooltip title="Busca">
                    <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                </Tooltip>

            </div>

        </C.Header>
    )
}

export default Header;