import { useParams } from "react-router-dom";
import turnTo404 from "@/utils/turnTo404";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import dataMonster from "@/data/monster";

import Title from "./monster/Title";
import Weakness from "./monster/Weakness";
import Sider from "./monster/Sider";

function Monster() {
  const { name } = useParams();

  const monster = dataMonster.getOne(name);

  if (typeof monster === "undefined") {
    turnTo404();
  }

  return (
    <Row>
      <Col md={8}>
        <Title data={monster}></Title>
        <Weakness data={monster}></Weakness>
      </Col>
      <Col md={4}>
        <Sider></Sider>
      </Col>
    </Row>
  );
}

export default Monster;
