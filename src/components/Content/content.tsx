import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Authenticator from "../../lib/authenticator";

export default class extends React.Component {
  render() {
    return (
      <Router>
        <h1>Looks Good To Your</h1>
        <Authenticator />
      </Router>
    );
  }
}
