import React from "react";
import "./App.css";

import Headlines from "./components/Headlines";
import Panel from "./components/Panel";
import Card from "./components/Card";
import Footer from "./components/Footer";

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
    actor: "",
    show: "",
    released: ""
  };

  reset = () => {
    this.state.superbats.forEach(superbat => {
      superbat.clicked = false;
    });
    this.setState({ score: 0 });
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
    let doubleClicked = false;
    let newScore = this.state.score + 1; //this doesn't alter state.score

    this.state.superbats.forEach(superbat => {
      if (superbat.id === id) {
        if (superbat.clicked) {
          doubleClicked = true;
          this.reset();
        } else {
          superbat.clicked = true;
          this.setState({ score: newScore });
          if (newScore > this.state.topScore) {
            this.setState({ topScore: newScore }); //intentionally altered so that topScore remains
          }
        }
      }
    });

    this.setState({
      superbats: shuffle(superbats)
    });
  };

  render() {
    return (
      <div className="App">
        <header className="custom-header"></header>
        <div className="App-header">
          <Headlines />
          <Panel newState={this.state} />
          <br></br>
          <Card
            arrayName={
              this.state.score === 2 ? this.state.poster : this.state.superbats
            }
            handleClick={this.handleClick}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
