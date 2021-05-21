// import React, { useState, useEffect } from "react";

// import { getMonsterList } from "@/data/monster";

// import Button from "react-bootstrap/Button";
// import Jumbotron from "react-bootstrap/Jumbotron";
// import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Monster from "./Monster";
import Map from "./Map";
import Weapon from "./Weapon";

function Home() {
  return (
    <Row>
      <Col>
        <Monster></Monster>
      </Col>
      <Col>
        <Map></Map>
      </Col>
      <Col>
        <Weapon></Weapon>
      </Col>
    </Row>
  );
}

export default Home;
