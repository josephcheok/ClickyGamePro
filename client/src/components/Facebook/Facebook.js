import React, { Component } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

export default class Facebook extends Component {
  state = { isLoggedIn: false, userID: "", name: "", email: "", picture: "" };

  responseFacebook = response => {
    if (response.status === "unknown") {
      console.log(response);
    } else {
      this.setState({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url
      });
    }
  };

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;
    console.log("IsLoggedIn?:", this.state.isLoggedIn);

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="971239003231359"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.responseFacebook}
          render={renderProps => (
            <button onClick={renderProps.onClick}>PLAY</button>
          )}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}
