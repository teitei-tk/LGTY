import * as React from "react";
import * as firebase from "firebase";

import Body from "./body";
import Header from "./header";
import Content from "./content";

export default class extends React.Component {
  render() {
    return (
      <Body>
        <Header />
        <Content />
      </Body>
    );
  }
}
