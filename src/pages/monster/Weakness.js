import Card from "react-bootstrap/Card";

function Weakness(props) {
  return (
    <Card className="border-0">
      <Card.Body className="p-0">
        <Card.Title className="bg-dark text-light p-2">
          怪物弱点部位及属性
        </Card.Title>
        <Card.Text className="p-2">
          {JSON.stringify(props.data.weakness)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Weakness;
