import React, { useState, useEffect } from "react";

// import useHooks from "@/hooks/index";

import { getMonsterList, getMonsterById } from "@/data/monster";

function Home() {
  let list = getMonsterList();

  let [id, setId] = useState(1);

  let [item, setItem] = useState({});

  useEffect(() => {
    setItem(getMonsterById(id));
    // });
  }, [id]);

  // const data = useHooks(getMonster, id);

  let clickList = [];
  for (let item of list) {
    clickList.push(
      <span
        key={item.id}
        onClick={() => {
          setId(item.id);
        }}
      >
        {item.id}
      </span>
    );
  }

  return (
    <div>
      <div>home</div>
      <div>{clickList}</div>
      <div>
        {item.id} - {item.name}
      </div>
    </div>
  );
}

export default Home;
