import data from "@/json/monster";

let _ = {};

_.getList = () => {
  return data;
};

_.getOne = (name) => {
  return data.find((e) => {
    return e.name === name;
  });
};

export default _;
