import { isLocalData } from "./config";
// import ApiMonster from "../api/monster";
import localDataMonster from "@/data/monster.json";

function getMonsterList() {
  return localDataMonster;
}

function getMonsterById(id) {
  if (isLocalData) {
    return localDataMonster.find((e) => {
      return e.id === id;
    });
  } else {
    // return ApiMonster.getMonster({ id });
  }
}

export { getMonsterList, getMonsterById };
