import React from "react";
import { useParams } from "react-router-dom";

function Monster() {
  const { title } = useParams();

  return (
    <div>
      <div>map</div>
      <div>{title}</div>
    </div>
  );
}

export default Monster;
