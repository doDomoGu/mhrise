import React from "react";

import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <Container>
      <footer>
        <Link to="/">home </Link>
        this is footer
      </footer>
    </Container>
  );
}

export default Footer;
