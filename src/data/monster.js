import { isLocalData } from "./config";
import ApiMonster from "../api/monster";

function getMonster(id) {
  if (isLocalData) {
    return "localData: monster - " + id;
  } else {
    return ApiMonster.getMonster({ id });
  }
}

export { getMonster };
