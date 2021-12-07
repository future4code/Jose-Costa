import { useHistory } from "react-router";

import { Pane, Heading, Text, Button, TextInput, TextInputField } from "evergreen-ui";

const Home = () => {
    const history = useHistory();

    const irListTrip = () => {
        history.push("/trips")
    }

    return (
        <Pane>
            <Pane display="flex" padding={12} background="gray200" borderRadius={3} borderBottom="1px solid #EBF0FF">
                <Pane flex={1} alignItems="center" display="flex">
                    <Heading size={500}>LabeX</Heading>
                </Pane>
                <Pane>
                    <Button marginRight={16}>Área restrita</Button>
                </Pane>
            </Pane>
            <Pane background="gray50" width="100%" height="90vh" display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center">
                <Pane textAlign="center" margin={30}>
                    <Heading size={800} marginBottom={10}>Explore os planetas e navegue pelo espaço</Heading>
                    <Heading size={500}>Encontre a sua viagem espacial perfeita</Heading>
                </Pane>

                <Pane>
                    <TextInputField width="500px"
                        required
                        label="A required text input field"
                        description="This is a description."
                        validationMessage="This field is required"
                    />
                </Pane>
            </Pane>
        </Pane>
    )
}

export default Home;