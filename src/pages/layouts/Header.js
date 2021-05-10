import React from "react";

import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <Container>
      <div className="header">
        <Link to="/">home </Link>
        this is header
      </div>
    </Container>
  );
}

export default Header;
