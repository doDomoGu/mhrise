import data from "@data|json/map";

let _ = {};

_.getList = () => {
  return data;
};

_.getOne = (title) => {
  return data.find((e) => {
    return e.title === title;
  });
};

export default _;
