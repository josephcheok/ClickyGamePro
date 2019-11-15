import React from "react";
import "./Formfill.css";

const Formfill = props => (
  <form className="form-inline" action="/action_page.php">
    <label for="name" style={{ "margin-left": 50 }}>
      NAME:
    </label>
    <input
      type="text"
      id="name"
      placeholder="Enter Name"
      name="name"
      style={{ width: 300 }}
    />
    <label for="state">STATE:</label>
    <input
      type="text"
      id="state"
      placeholder=""
      name="state"
      style={{ width: 100 }}
    />
    <label for="email">EMAIL:</label>
    <input
      type="email"
      id="email"
      placeholder="Enter email"
      name="email"
      style={{ width: 300 }}
    />
    <button type="submit" style={{ "margin-right": 50 }}>
      Submit
    </button>
  </form>
);

export default Formfill;
