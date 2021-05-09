// import React, { useState, useEffect } from "react";

// import { getMonsterList } from "@/data/monster";

// import Button from "react-bootstrap/Button";
// import Jumbotron from "react-bootstrap/Jumbotron";
// import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MonsterList from "@/pages/home/MonsterList";

function Home() {
  return (
    <Row>
      <Col>
        <MonsterList></MonsterList>
      </Col>
      <Col>2 of 3</Col>
      <Col>3 of 3</Col>
    </Row>
  );
}

export default Home;
