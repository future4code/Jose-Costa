import { Pane, Heading, Button} from "evergreen-ui";
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <Pane display="flex" padding={7} background="gray200" borderRadius={3} borderBottom="1px solid #EBF0FF">
            <Pane flex={2} paddingLeft={20} alignItems="center" display="flex" width={200}>
                {/* <Heading>Labe</Heading> */}
                <img src={logo} width={35} />
            </Pane>

            <Pane>
                <Button marginRight={16}>Área restrita</Button>
            </Pane>
        </Pane>
    )
}

export default Header;