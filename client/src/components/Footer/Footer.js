import React from "react";
import Formfill from "../Formfill";
import "./Footer.css";
import "../Formfill/Formfill.css";

const Footer = props =>
  props.score === 2 ? (
    <div className="footer">
      <Formfill score={props.score} time={props.time} />
    </div>
  ) : (
    <div className="footer">
      <h5>
        LAST WINNER: <span>{props.name || "JASON DERULO, NSW"}</span>
      </h5>
    </div>
  );

export default Footer;
