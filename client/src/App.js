import React from "react";
import "./App.css";

import axios from "axios";

import Modal from "react-bootstrap/Modal";

import ButtonToolbar from "react-bootstrap/ButtonToolbar";

import Headlines from "./components/Headlines";
import Panel from "./components/Panel";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Scoreboard from "./components/Scoreboard";

import superbats from "./superbats.json";
import poster from "./poster.json";

function shuffle(array) {
  // Make a shuffled copy of an array using Fisher-Yates

  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle, auto decrement index by 1 before comparing...
  while (--currentIndex > 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * (currentIndex + 1));

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class App extends React.Component {
  state = {
    superbats: shuffle(superbats),
    poster: poster,
    score: 0,
    topScore: 0,
    startTime: 0,
    endTime: 0,
    completionTime: 0,
    actor: "",
    show: "",
    released: "",
    endGame: false,
    dataSaved: false,
    modalShow: false,
    scorelist: [],
    topScorerName: "",
    topScorerComp: ""
  };

  reset = () => {
    this.state.superbats.forEach(superbat => {
      superbat.clicked = false;
    });
    this.setState({
      score: 0,
      endGame: false,
      startTime: 0,
      endTime: 0,
      dataSaved: false
    });
  };

  dataSave = () => {
    this.setState({ dataSaved: true });
  };

  showModal = () => {
    this.setState({ modalShow: true });
  };

  hideModal = () => {
    this.setState({ modalShow: false });
  };

  onMouseEnter = id => {
    console.log(id);
    this.state.superbats.forEach(superbat => {
      if (superbat.id === id) {
        this.setState({
          actor: superbat.actor,
          show: superbat.show,
          released: superbat.released
        });
      }
    });
  };

  onMouseLeave = () => {
    this.setState({ actor: "", show: "", released: "" });
  };

  handleClick = id => {
    let newScore = this.state.score + 1; //this doesn't alter state.score

    this.state.superbats.forEach(superbat => {
      if (superbat.id === id) {
        if (superbat.clicked) {
          let finishTime = new Date();
          let endTime = finishTime.getTime();
          this.setState(
            {
              endTime: endTime
            },
            () => {
              this.setState({
                completionTime: Math.round(
                  (this.state.endTime - this.state.startTime) / 1000
                ),
                endGame: true
              });
            }
          );
          if (this.state.score > this.state.topScore) {
            this.setState({ topScore: this.state.score }); //intentionally altered so that topScore remains
          }
        } else {
          superbat.clicked = true;
          this.setState({ score: newScore }, () => {
            if (this.state.score === 1) {
              let beginTime = new Date();
              let startTime = beginTime.getTime();

              this.setState({ startTime: startTime });
            }
          });
          if (newScore > this.state.topScore) {
            this.setState({ topScore: newScore }); //intentionally altered so that topScore remains
          }
          if (newScore === 18) {
            let finishTime = new Date();
            let endTime = finishTime.getTime();
            this.setState(
              {
                endTime: endTime
              },
              () => {
                this.setState({
                  completionTime: Math.round(
                    (this.state.endTime - this.state.startTime) / 1000
                  ),
                  endGame: true
                });
              }
            );
          }
        }
      }
    });

    this.setState({
      superbats: shuffle(superbats)
    });
  };

  makeMongoCall = () => {
    axios
      .get("/scoreboard")
      .then(response => {
        console.log(response);
        this.setState({ scorelist: response.data });
      })
      .then(() => {
        this.showModal();
        this.setState({
          topScorerName: this.state.scorelist[0].name,
          topScorerComp: this.state.scorelist[0].company
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log("Heya");
  };

  render() {
    return (
      <div className="App">
        <header className="custom-header"></header>
        <div className="App-header">
          <Headlines
            modalShow={this.showModal}
            modalHide={this.hideModal}
            reset={this.reset}
            callback={this.makeMongoCall}
            arrayName={this.state.scorelist}
            isModalShown={this.state.modalShow}
            score={this.state.score}
          />
          <Panel newState={this.state} />
          <br></br>
          <Card
            arrayName={
              this.state.endGame ? this.state.poster : this.state.superbats
            }
            handleClick={this.handleClick}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          />

          <Footer
            score={this.state.score}
            time={this.state.completionTime}
            ended={this.state.endGame}
            reset={this.reset}
            dataSave={this.dataSave}
            callData={this.makeMongoCall}
            showModal={this.showModal}
            topScorerName={this.state.topScorerName}
            topScorerComp={this.state.topScorerComp}
          />
        </div>
      </div>
    );
  }
}

export default App;
