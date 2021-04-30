import React from "react";
import { useParams } from "react-router-dom";

function Item() {
  const { title } = useParams();

  return (
    <div>
      <div>item</div>
      <div>{title}</div>
    </div>
  );
}

export default Item;
