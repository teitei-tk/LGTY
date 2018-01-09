import * as React from "react";
import { FirebaseAuth } from "react-firebaseui";

import * as firebase from "firebase";

import { Configure } from "./firebase/configure";

interface UIConfig {
  signInSuccessUrl: string;
  signInFlow: "redirect" | "popup";
  signInOptions: Array<string>;
}

const signInSuccessUrl = `https://${
  Configure.authDomain
}/twitter/oauth/authroized`;

export default class extends React.Component {
  uiConfig = {
    signInSuccessUrl: signInSuccessUrl,
    signInFlow: "popup",
    signInOptions: [firebase.auth.TwitterAuthProvider.PROVIDER_ID]
  };

  render() {
    return (
      <div>
        <FirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
}
