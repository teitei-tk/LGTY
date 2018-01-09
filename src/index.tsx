import * as React from "react";
import * as ReactDOM from "react-dom";
import * as firebase from "firebase";

import { Configure } from "./lib/firebase/configure";

import "spectre.css";

firebase.initializeApp(Configure);

import App from "./components/Content";

ReactDOM.render(<App />, document.querySelector("#root"));
