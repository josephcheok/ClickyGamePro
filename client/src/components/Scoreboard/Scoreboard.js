import React from "react";
import "./Scoreboard.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Scoreboard = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={() => props.reset()}>
        <Modal.Title id="contained-modal-title-vcenter">SCOREBOARD</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <span className="scorer">Name: {props.name}</span>
          <span className="scorer">Score: {props.score}</span>
          <span className="scorer">Time: {props.time}</span>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            props.reset();
            props.onHide();
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Scoreboard;
