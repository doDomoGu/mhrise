import Card from "react-bootstrap/Card";

import WeaponModel from "@{model}/weapon";

function Weapon() {
  const list = WeaponModel.getList();

  let links = [];
  list.forEach((v) => {
    links.push(
      <Card.Link key={v.title} href={"/weapon/" + v.title}>
        {v.title}
      </Card.Link>
    );
  });

  return (
    <Card className="border-0">
      <Card.Body className="p-0">
        <Card.Title className="bg-dark text-light p-2">武器列表</Card.Title>
        <Card.Text className="p-2">{links}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Weapon;
