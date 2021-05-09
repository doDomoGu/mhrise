import React from "react";

import Container from "react-bootstrap/Container";

import Header from "./Header";

function Main(props) {
  return (
    <>
      <Header></Header>
      <div className="bg-secondary p-3">
        <Container className="bg-white py-2">{props.children}</Container>
      </div>
    </>
  );
}

export default Main;
