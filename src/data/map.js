import data from "@/json/map";

let _ = {};

_.getList = () => {
  return data;
};

_.getOneByTitle = (title) => {
  return data.find((e) => {
    return e.title === title;
  });
};

export default _;
