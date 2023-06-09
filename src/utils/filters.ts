import NpcList from "../utils/npcList";
import { LevelRange } from "./levels";
import { RaidsInfo } from "./spec";

export const filterByStatus = (raids: RaidsInfo[], status: string) => {
  if (!status) return raids;
  return [...raids].filter((raid) => raid.status === status);
};

export const filterByLevel = (raids: RaidsInfo[], levelValue?: LevelRange) => {
  if (!levelValue) return raids;
  return raids.filter(
    (raid) =>
      levelValue.min <= NpcList.getById(raid.id).level &&
      levelValue.max >= NpcList.getById(raid.id).level
  );
};
