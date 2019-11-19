import React from "react";
import Formfill from "../Formfill";
import "./Footer.css";
import "../Formfill/Formfill.css";

const Footer = props =>
  props.ended ? (
    <div className="footer">
      <Formfill
        score={props.score}
        time={props.time}
        reset={props.reset}
        modal={props.modal}
        dataSave={props.dataSave}
        callData={props.callData}
        showModal={props.showModal}
      />
    </div>
  ) : (
    <div className="footer">
      <h5>
        LAST WINNER: <span>{props.name || "JASON DERULO, NSW"}</span>
      </h5>
    </div>
  );

export default Footer;
