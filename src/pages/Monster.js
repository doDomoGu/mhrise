import React from "react";
import { useParams } from "react-router-dom";

function Map() {
  const { title } = useParams();

  return (
    <div>
      <div>monster</div>
      <div>{title}</div>
    </div>
  );
}

export default Map;
