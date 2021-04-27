import axios from "../utils/axios";

let exports = {};

exports.getMonster = async (params) => {
  return (await axios.get("/monster/list", { params })).data;
};

export default exports;
