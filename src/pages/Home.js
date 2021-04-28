import React, { useState } from "react";

import useHooks from "@/hooks/index";

import { getMonster } from "@/data/monster";

function Home() {
  let [id, setId] = useState(1);

  const data = useHooks(getMonster, id);
  return (
    <div>
      <div>home</div>
      <div>
        <span
          onClick={() => {
            setId(1);
          }}
        >
          {" "}
          1{" "}
        </span>{" "}
        <span
          onClick={() => {
            setId(2);
          }}
        >
          {" "}
          2{" "}
        </span>
      </div>
      <div>
        {id} - {data.name}
      </div>
    </div>
  );
}

export default Home;
