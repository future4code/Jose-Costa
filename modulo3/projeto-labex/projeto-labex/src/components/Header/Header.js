import { Pane, Heading, Button, LockIcon, Menu, Popover, Position } from "evergreen-ui";
import logo from "../../assets/logo.png";
import { useHistory } from "react-router-dom";
import { MenuDesktop, MenuMobile } from "./styled-components";

const Header = () => {
    const history = useHistory();

    const goTo = (page) => {
        history.push(page);
    }

    return (
        <Pane display="flex" padding={7} background="gray200" borderRadius={3} borderBottom="1px solid #EBF0FF">
            <Pane flex={2} paddingLeft={20} alignItems="center" display="flex" width={200} >
                <Heading onClick={() => goTo("/")} cursor="pointer">Labe</Heading>
                <img src={logo} alt="Logo LabeX" width={15} onClick={() => goTo("/")} cursor="pointer" />
            </Pane>

            <Pane>
                <MenuDesktop>
                    <Button marginRight={16} onClick={() => goTo("/")}>Início</Button>
                    <Button marginRight={16} onClick={() => goTo("/trips/list")}>Viagens</Button>
                    <Button marginRight={16} onClick={() => goTo("/admin/trips/list")} iconBefore={LockIcon}>Painel</Button>
                </MenuDesktop>
                <MenuMobile>
                    <Popover
                        position={Position.BOTTOM_LEFT}
                        content={
                            <Menu >
                                <Menu.Group>
                                    <Menu.Item onSelect={() => goTo("/")}>Início</Menu.Item>
                                    <Menu.Item onSelect={() => goTo("/trips/list")}>Viagens</Menu.Item>
                                    <Menu.Item onSelect={() => goTo("/admin/trips/list")}>Painel</Menu.Item>
                                </Menu.Group>
                            </Menu>
                        }
                    >
                        <Button marginRight={16}>Menu</Button>
                    </Popover>      
                </MenuMobile>
            </Pane>
        </Pane>
    )
}

export default Header;