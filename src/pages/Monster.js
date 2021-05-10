// import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
// import Card from "react-bootstrap/Card";

import dataMonster from "@/data/monster";

function Monster() {
  const { name } = useParams();

  const monster = dataMonster.getOne(name);

  let history = useHistory();

  if (typeof monster === "undefined") {
    history.push("/404");
    history.go();
  }

  return (
    <div>
      <div>monster</div>
      <div>{monster.name}</div>
    </div>
  );
}

export default Monster;
