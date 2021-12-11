import { Pane, Heading, Button } from "evergreen-ui";
import logo from "../assets/logo.png";
import { useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();

    const goTo = (page) => {
        history.push(page);
    }

    return (
        <Pane display="flex" padding={7} background="gray200" borderRadius={3} borderBottom="1px solid #EBF0FF">
            <Pane flex={2} paddingLeft={20} alignItems="center" display="flex" width={200} >
                <Heading onClick={() => goTo("/")} cursor="pointer">Labe</Heading>
                <img src={logo} width={15} onClick={() => goTo("/")} cursor="pointer" />
            </Pane>

            <Pane>
                <Button marginRight={16} onClick={() => goTo("/")}>Início</Button>
                <Button marginRight={16} onClick={() => goTo("/trips/list")}>Viagens</Button>
                <Button marginRight={16} onClick={() => goTo("/login")}>Área restrita</Button>
            </Pane>
        </Pane>
    )
}

export default Header;