import * as React from "react";
import * as ReactDOM from "react-dom";

import "spectre.css";

import Header from "./containers/header";
import Body from "./containers/body";
import Content from "./containers/content";

class App extends React.Component {
  render() {
    return (
      <Body>
        <Header />
        <Content />
      </Body>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
