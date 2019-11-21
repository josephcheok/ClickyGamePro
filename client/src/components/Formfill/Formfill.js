import React from "react";
import "./Formfill.css";
import axios from "axios";
import { Modal, Button, ButtonToolbar } from "react-bootstrap";
import Scoreboard from "../Scoreboard";

class Formfill extends React.Component {
  state = {
    name: "",
    company: "",
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
        company: this.state.company,
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
        this.props.callData();
      });
  };

  render() {
    return (
      <div className="formFill">
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
          <label htmlFor="state">COMPANY:</label>
          <input
            type="text"
            id="company"
            placeholder=""
            name="company"
            placeholder="Enter Company"
            value={this.state.company}
            onChange={this.handleInputChange}
            style={{ width: 200 }}
          />
          <label htmlFor="email">EMAIL:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            style={{ width: 300 }}
          />
          <button
            type="submit"
            className="formSubmit"
            style={{ marginRight: 50 }}
            onClick={this.handleFormSubmit}
          >
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

export default Formfill;
