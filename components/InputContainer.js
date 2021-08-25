import React, { Component } from "react";

const defaultText = "";
class InputContainer extends Component {
  constructor(props) {
    super(props);
    //this.state = { input: defaultText };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    //this.setState({ input: e.target.value });
    this.props.onChange(e.target.value);
  }

  //TODO: Have this send somewhere, need data to propagate upwards.
  handleClick() {
    //this.setState({ input: defaultText });
    this.props.onClick();
  }

  render() {
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.props.input}
          placeholder="What are you thinking about?"
          style={{
            width: 500,
            height: 390,
            border: 1,
            solid: "#999999",
          }}
        >
          {}
        </textarea>
        <button type="button" onClick={this.handleClick}>
          Send
        </button>
      </div>
    );
  }
}

export default InputContainer;
