import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import { NavBar } from "./components/StyledComponents";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import UpdateSmurfForm from "./components/UpdateSmufForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  addNewSmurf = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  removeSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  updateSmurf = smurf => {
    axios
      .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
      .then(res => {
        console.log(res);
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavBar>
          <ul>
            <li>
              <NavLink activeClassName="active" exact to="/">
                Smurf Village
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/smurf-form">
                Add New Smurf
              </NavLink>
            </li>
          </ul>
        </NavBar>
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm {...props} addNewSmurf={this.addNewSmurf} />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              removeSmurf={this.removeSmurf}
              {...props}
              smurfs={this.state.smurfs}
            />
          )}
        />
        <Route
          path="/update/:id"
          render={props => (
            <UpdateSmurfForm updateSmurf={this.updateSmurf} {...props} />
          )}
        />
      </div>
    );
  }
}

export default App;
