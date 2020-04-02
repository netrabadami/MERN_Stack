import React from "react";
import shortid from "short-id";

export default class TodoForm extends React.Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // this.props.onSubmit({
    //   id: shortid.generate(),
    //   text: this.state.text,
    //   complete: false
    // });
    console.log(this.state);
    this.setState({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="todo..."
        />
        <button onClick={this.handleSubmit}>add todo</button>
      </form>
    );
  }
}