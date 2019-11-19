import React from "react";
import "./Headlines.css";
import Facebook from "../Facebook";
import "../Facebook/Facebook.css";
import axios from "axios";

const Headlines = props => (
  <div className="flexContainer">
    <div className="headlines">
      <h5>
        CLICK ALL IMAGES ONCE TO WIN A DISCOUNT VOUCHER TO SEE THE NEW BATMAN v
        SUPERMAN
      </h5>
    </div>
    <Facebook />
  </div>
);

export default Headlines;
