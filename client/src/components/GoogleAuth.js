import React from "react";

class GoogleAuth extends React.Component {
  state = { isSigendIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "365497735201-4a89uq96iisab6c2df5ejvovmc8voi1b.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          //this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({
            isSigendIn: this.window.gapi.auth2
              .getAuthInstance()
              .isSigendIn.get(),
          });
        });
    });
  }

  renderAuthButton() {
    if (this.state.isSigendIn === null) {
      return <div>I dunno if I'm signed in</div>;
    }
    if (this.state.isSigendIn) {
      return <div>I'm signed in</div>;
    } else return <div>I'm not signed in</div>;
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
