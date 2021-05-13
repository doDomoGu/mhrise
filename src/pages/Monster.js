import { useParams } from "react-router-dom";
import turnTo404 from "@/utils/turnTo404";

// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MonsterModel from "@model/monster";

import Title from "./monster/Title";
import Weakness from "./monster/Weakness";
import Sider from "./monster/Sider";

function Monster() {
  const { name } = useParams();

  const monster = MonsterModel.getOne(name);

  if (typeof monster === "undefined") {
    turnTo404();
  }

  return (
    <Row>
      <Col md={8}>
        <div className="pb-3">
          <Title data={monster}></Title>
        </div>
        <div className="pb-3">
          <Weakness data={monster}></Weakness>
        </div>
      </Col>
      <Col md={4}>
        <Sider></Sider>
      </Col>
    </Row>
  );
}

export default Monster;
