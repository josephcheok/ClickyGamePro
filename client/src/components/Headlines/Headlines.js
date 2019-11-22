import React from "react";
import "./Headlines.css";
import Facebook from "../Facebook";
import "../Facebook/Facebook.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Scoreboard from "../Scoreboard";

const Headlines = props => (
  <div className="flexContainer">
    <Button variant="primary" className="leaderButton" onClick={props.callback}>
      Leaderboard
    </Button>
    {props.arrayName.length ? (
      <Scoreboard
        show={props.isModalShown}
        onHide={() => {
          console.log("calling props.modalHide");
          props.modalHide();
        }}
        reset={props.reset}
        arrayName={props.arrayName}
      />
    ) : null}

    <div className="headlines">
      {props.score === 18 ? (
        <h5>WELL DONE YOU BLOODY CHAMPION!!</h5>
      ) : (
        <h5>
          CLICK ALL IMAGES ONCE TO WIN A DISCOUNT VOUCHER TO SEE THE NEW BATMAN
          v SUPERMAN
        </h5>
      )}
    </div>
    <Facebook />
  </div>
);

export default Headlines;
