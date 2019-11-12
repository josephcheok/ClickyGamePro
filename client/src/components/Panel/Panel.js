import React from "react";
import "./Panel.css";

const Panel = props => (
  <div className="container">
    <ul>
      <li className="released">
        Released: <span>{props.newState.released}</span>{" "}
      </li>
      <li className="actor">
        Actor:<span>{props.newState.actor}</span>{" "}
      </li>
      <li className="show">
        Show: <span>{props.newState.show}</span>{" "}
      </li>
      <li className="score">
        Score: <span className="points">{props.newState.score}</span>{" "}
      </li>
      <li className="topScore">
        Top Score: <span className="points">{props.newState.topScore}</span>{" "}
      </li>
    </ul>
  </div>
);

export default Panel;
