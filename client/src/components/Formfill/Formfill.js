import React from "react";
import "./Formfill.css";
import axios from "axios";
import { Modal, Button, ButtonToolbar } from "react-bootstrap";
import Scoreboard from "../Scoreboard";

class Formfill extends React.Component {
  state = {
    name: "",
    state: "",
    email: ""
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    axios
      .post("/winner", {
        name: this.state.name,
        state: this.state.state,
        email: this.state.email,
        score: this.props.score,
        time: this.props.time
      })
      .then(response => {
        console.log("Winner Saved! :", response);
        // Reload the page to get the updated list
        this.setState({
          name: "",
          state: "",
          email: ""
        });
        this.props.dataSave();
        // this.props.reset();
      });
  };

  makeMongoCall = event => {
    event.preventDefault();
    axios
      .get("/scoreboard")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log("Heya");
  };

  render() {
    return (
      <div>
        <form className="form-inline" action="/action_page.php">
          <label htmlFor="name" style={{ marginLeft: 50 }}>
            NAME:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            style={{ width: 300 }}
          />
          <label htmlFor="state">STATE:</label>
          <input
            type="text"
            id="state"
            placeholder=""
            name="state"
            value={this.state.state}
            onChange={this.handleInputChange}
            style={{ width: 100 }}
          />
          <label htmlFor="email">EMAIL:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            style={{ width: 300 }}
          />
          <button
            type="submit"
            style={{ marginRight: 50 }}
            onClick={this.handleFormSubmit}
          >
            Submit
          </button>
        </form>
        <button onClick={this.makeMongoCall}>GET DATA</button>
      </div>
    );
  }
}

export default Formfill;
