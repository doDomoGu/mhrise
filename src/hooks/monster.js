import { useState, useEffect } from "react";

import { getMonster } from "../data/monster";

function useGetMonster() {
  const [monster, setMonster] = useState(null);

  useEffect(() => {
    (async () => {
      setMonster(await getMonster());
    })();
  }, []);

  return monster;
}

export { useGetMonster };
