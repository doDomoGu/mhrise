import React, { useState, useEffect } from "react";

// import useHooks from "@/hooks/index";

import { getMonsterList, getMonsterByName } from "@/data/monster";

function Home() {
  let list = getMonsterList();

  let [name, setName] = useState("青熊兽");

  let [item, setItem] = useState({});

  useEffect(() => {
    setItem(getMonsterByName(name));
    // });
  }, [name]);

  // const data = useHooks(getMonster, id);

  let clickList = [];
  for (let item of list) {
    clickList.push(
      <span
        key={item.name}
        onClick={() => {
          setName(item.name);
        }}
      >
        {item.name}
      </span>
    );
  }

  return (
    <div>
      <div>home</div>
      <div>{clickList}</div>
      <div>{item.name}</div>
    </div>
  );
}

export default Home;
