import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Title(props) {
  let image = null;
  if (props.data.image != null) {
    image = require(`@{data/images}/` + props.data.image).default;
  }

  return (
    <Card className="border-0">
      <Card.Body className="p-0">
        <Card.Title className="bg-dark text-light p-2">怪物详情</Card.Title>
        <Row>
          <Col className="text-center align-self-center">
            <Image src={image} rounded />
          </Col>
          <Col>
            <Table striped bordered>
              <tbody>
                <tr>
                  <td>怪物名称</td>
                  <td>{props.data.name}</td>
                </tr>
                <tr>
                  <td>英文名</td>
                  <td>{props.data.en}</td>
                </tr>
                <tr>
                  <td>种类</td>
                  <td>{props.data.category}</td>
                </tr>
                <tr>
                  <td>素材前缀</td>
                  <td>{props.data.material}</td>
                </tr>
                <tr>
                  <td>读法</td>
                  <td>{props.data.pronunciation}</td>
                </tr>
                <tr>
                  <td>最终登场</td>
                  <td>{props.data.laststage}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Title;
