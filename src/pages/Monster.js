import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { getMonsterByName } from "@/data/monster";

function Map() {
  const { title } = useParams();

  let [monster, setMonster] = useState({});

  useEffect(() => {
    setMonster(getMonsterByName(title));
  }, [title]);

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

export default Map;
