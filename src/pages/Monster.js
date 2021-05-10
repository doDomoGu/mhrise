import { useParams } from "react-router-dom";
import turnTo404 from "@/utils/turnTo404";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import dataMonster from "@/data/monster";

import Title from "./monster/Title";
import Sider from "./monster/Sider";

function Monster() {
  const { name } = useParams();

  const monster = dataMonster.getOne(name);

  if (typeof monster === "undefined") {
    turnTo404();
  }

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Title data={monster}></Title>
        </Col>
        <Col md={4}>
          <Sider></Sider>
        </Col>
      </Row>
    </Container>
  );
}

export default Monster;
