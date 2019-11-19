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
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {props.arrayName.map(n => {
              return (
                <tr key={n.id} id={n.id}>
                  <td>{n.name}</td>
                  <td>{n.score}</td>
                  <td>{n.time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
