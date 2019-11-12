import React from "react";
import "./Card.css";

const Card = props => (
  <div className="clicky-container">
    {props.arrayName.map(n => (
      <div
        key={n.id}
        id={n.id}
        className="clicky-target"
        onClick={() => props.handleClick(n.id)}
        onMouseEnter={() => props.onMouseEnter(n.id)}
        onMouseLeave={() => props.onMouseLeave()}
      >
        <img src={n.image} width={180} height={180} alt={n.actor} />
      </div>
    ))}
  </div>
);

export default Card;
