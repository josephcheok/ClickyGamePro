import React from "react";
import "./Formfill.css";

const Formfill = props => (
  <form class="form-inline" action="/action_page.php">
    <label for="name">Name:</label>
    <input type="text" id="name" placeholder="Enter Name" name="name" />
    <label for="state">State:</label>
    <input type="text" id="state" placeholder="" name="state" />
    <label for="email">Email:</label>
    <input type="email" id="email" placeholder="Enter email" name="email" />
    <button type="submit">Submit</button>
  </form>
);

export default Formfill;
