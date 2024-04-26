/** @format */

import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      isToggleOn: true,
    };
    this.handleClick = this.handleClick.bind(this);

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }
  handleClick() {
    this.setState((prevState) => ({ isToggleOn: !prevState.isToggleOn }));
  }

  componentDidMount() {
    console.log("Componente montado");
  }

  componentDidUpdate() {
    console.log("Componente atualizado");
  }
  render() {
    return (
      <div className="Form">
        <p>
          <button onClick={this.decrement}>Diminuir</button>
          <input value={this.state.counter} />
          <button onClick={this.increment}>Aumentar</button>
        </p>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "Ligado" : "Desligado"}
        </button>
      </div>
    );
  }
}
