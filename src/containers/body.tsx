import * as React from "react";
import styled from "styled-components";

const Body = styled.div`
  padding: 1rem;
`;

export default class extends React.Component {
  render() {
    return (
      <Body className="bg-gray container text-center">
        {this.props.children}
      </Body>
    );
  }
}
