import React from "react";
import "./Footer.css";

const Footer = props => (
  <div className="footer">
    <h5>
      LAST WINNER: <span>{props.name || "JASON DERULO, NSW"}</span>
    </h5>
  </div>
);

export default Footer;
