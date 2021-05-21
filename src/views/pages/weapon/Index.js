import React from "react";
import { useParams } from "react-router-dom";

function Weapon() {
  const { title } = useParams();

  return (
    <div>
      <div>wepon</div>
      <div>{title}</div>
    </div>
  );
}

export default Weapon;
