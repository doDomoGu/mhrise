import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import dataMonster from "@/data/monster";

function Monster() {
  const { name } = useParams();

  let [monster, setMonster] = useState({});

  useEffect(() => {
    setMonster(dataMonster.getOne(name));
  }, [name]);

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
