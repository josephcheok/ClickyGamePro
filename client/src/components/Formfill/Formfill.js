import React from "react";
import "./Formfill.css";
import axios from "axios";

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
        email: this.state.email
      })
      .then(response => {
        console.log("Winner Saved! :", response);
        // Reload the page to get the updated list
        this.setState({
          name: "",
          state: "",
          email: ""
        });
      });
  };

  render() {
    return (
      <form className="form-inline" action="/action_page.php">
        <label for="name" style={{ "margin-left": 50 }}>
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
        <label for="state">STATE:</label>
        <input
          type="text"
          id="state"
          placeholder=""
          name="state"
          value={this.state.state}
          onChange={this.handleInputChange}
          style={{ width: 100 }}
        />
        <label for="email">EMAIL:</label>
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
          style={{ "margin-right": 50 }}
          onClick={this.handleFormSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Formfill;
