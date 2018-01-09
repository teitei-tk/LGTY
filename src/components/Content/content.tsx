import * as React from "react";

import Authenticator from "../../lib/authenticator";

export default class extends React.Component {
  render() {
    return (
      <div>
        <h1>Looks Good To Your</h1>
        <Authenticator />
      </div>
    );
  }
}
