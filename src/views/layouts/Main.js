import React from "react";

import Container from "react-bootstrap/Container";

import Header from "./Header";
import Footer from "./Footer";

function Main(props) {
  return (
    <>
      <Header></Header>
      <section className="bg-secondary">
        <Container>
          <section className="py-3 bg-secondary">{props.children}</section>
        </Container>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Main;
