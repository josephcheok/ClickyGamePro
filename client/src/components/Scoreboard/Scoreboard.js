import React from "react";
import "./Scoreboard.css";
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
              <th className="t-rank">Rank </th>
              <th className="t-name">Name</th>
              <th className="t-comp">Company</th>
              <th className="t-score">Score</th>
              <th className="t-time">Time&#40;s&#41;</th>
            </tr>
          </thead>
          <tbody>
            {props.arrayName.map((n, i) => {
              return (
                <tr key={n.id} id={n.id}>
                  <td className="t-data">{i + 1}</td>
                  <td>{n.name}</td>
                  <td className="t-comp">{n.company}</td>
                  <td className="t-data">{n.score}</td>
                  <td className="t-data">{n.time}</td>
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
