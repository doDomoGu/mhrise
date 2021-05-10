import Card from "react-bootstrap/Card";

function Title(props) {
  return (
    <Card>
      <Card.Body className="p-0">
        <Card.Title className="bg-dark text-light p-2">怪物详情</Card.Title>
        <Card.Text className="p-2">{props.data.name}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Title;
