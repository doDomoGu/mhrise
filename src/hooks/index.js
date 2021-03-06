import { useState, useEffect } from "react";

function useHooks(func, params) {
  const [data, setData] = useState({});

  useEffect(() => {
    // console.log(7);
    // console.log("use effect");
    // console.log(func);
    // console.log(params);
    (async () => {
      let _data;
      if (params !== null) {
        _data = await func(params);
      } else {
        _data = await func();
      }
      setData(_data);
      //22
    })();
    // });
  }, [func, params]);

  return data;
}

export default useHooks;
