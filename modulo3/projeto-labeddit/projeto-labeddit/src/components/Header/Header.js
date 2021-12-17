import LabeTitulo from "../LabeTitulo/LabeTitulo";
import * as C from "./styled";
import { Tooltip, Button } from "antd";
import { SearchOutlined } from '@ant-design/icons';

const Header = () => {
    return (
        <C.Header>
            <LabeTitulo />
            <Tooltip title="Busca">
                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
        </C.Header>
    )
}

export default Header;