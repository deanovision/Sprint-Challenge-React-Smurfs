import React, { Component } from "react";
import { SmurfFormWrapper } from "./StyledComponents";
class UpdateSmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: "",
      id: this.props.match.params.id
    };
  }

  updateSmurf = event => {
    event.preventDefault();
    this.props.updateSmurf(this.state);
    // add code to create the smurf using the api

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <SmurfFormWrapper>
          <form onSubmit={this.updateSmurf}>
            <h2>Update Smurfs</h2>
            <input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="height"
              value={this.state.height}
              name="height"
            />
            <button type="submit">Update Smurf</button>
          </form>
        </SmurfFormWrapper>
      </div>
    );
  }
}

export default UpdateSmurfForm;
