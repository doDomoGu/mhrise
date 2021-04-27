import React, { useState } from "react";

import useHooks from "../hooks/index";

import { getMonster } from "../data/monster";

function Home() {
  let [id, setId] = useState(1);

  const data = useHooks(getMonster, id);

  return (
    <div>
      <div
        onClick={() => {
          setId(id);
        }}
      >
        home
      </div>
      <div>{data}</div>
    </div>
  );
}

export default Home;
