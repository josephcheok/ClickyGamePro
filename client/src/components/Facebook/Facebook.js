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
        <img src={this.state.picture} alt={this.state.name} align="right" />
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="971239003231359"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.responseFacebook}
          render={renderProps => (
            <button onClick={renderProps.onClick}>
              <img className="FBlogo" src="./images/FBlogo.png" />
            </button>
          )}
        />
      );
    }
    return <div className="FBlogin">{fbContent}</div>;
  }
}
