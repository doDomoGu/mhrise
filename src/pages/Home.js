import React, { useState, useEffect } from "react";

// import useHooks from "@/hooks/index";

import { getMonster } from "@/data/monster";

function Home() {
  let [id, setId] = useState(1);
  let [data, setData] = useState({});

  useEffect(() => {
    setData(getMonster(id));
    // });
  }, [id]);

  // const data = useHooks(getMonster, id);
  return (
    <div>
      <div>home</div>
      <div>
        <span
          onClick={() => {
            setId(1);
          }}
        >
          1
        </span>
        <span
          onClick={() => {
            setId(2);
          }}
        >
          2
        </span>
      </div>
      <div>
        {id} - {data.name}
      </div>
    </div>
  );
}

export default Home;
