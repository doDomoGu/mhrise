import Card from "react-bootstrap/Card";

import dataMonster from "@/data/monster";

function Monster() {
  const list = dataMonster.getList();

  let links = [];
  list.forEach((v) => {
    links.push(
      <Card.Link key={v.name} href={"/monster/" + v.name}>
        {v.name}
      </Card.Link>
    );
  });

  return (
    <Card>
      <Card.Body className="p-0">
        <Card.Title className="bg-dark text-light p-2">怪物列表</Card.Title>
        <Card.Text className="p-2">{links}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Monster;
