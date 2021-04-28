import { isLocalData } from "./config";
import ApiMonster from "../api/monster";
import localDataMonster from "@/data/monster.json";

function getMonster(id) {
  if (isLocalData) {
    return localDataMonster[id];
  } else {
    return ApiMonster.getMonster({ id });
  }
}

export { getMonster };
