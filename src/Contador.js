import { Button } from "@mui/material";
import React from "react";

class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          valor: null,
        };
    }

    handleClick(count) {
        const valor = this.state.valor;
        this.setState({valor: valor += count});
    }

    render() {
        return (
        <div>
            <div>
                {this.value}
            </div>
            <Button value={"+1"} onClick={() => this.handleClick(1)} />
        </div>
        );
    }

}

export default Contador;