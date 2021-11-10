import React from "react";

class InputControlado extends React.Component {
    state = {
        input: "",
    }

    onChangeInput = (event) => {
        this.setState({
            input: event.target.value,
        })
        this.props.onChangeInput(event);
    }

    onClickAdicionar = () => {
        this.setState({
            input: "",
        })
        this.props.onClickAdicionar();
    }

    render() {
        return (
            <div>
                <input value={this.state.input} onChange={this.onChangeInput} required="required" />
                <button onClick={this.onClickAdicionar}>Adicionar</button>
            </div>
        )
    }
}

export default InputControlado;