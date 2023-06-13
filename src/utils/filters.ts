import NpcList from "../NpcList";
import { LevelRange } from "./levels";
import { RaidsData } from "./spec";

export const filterByStatus = (raids: RaidsData[], status: string) => {
  if (!status) return raids;
  return [...raids].filter((raid) => raid.status === status);
};

export const filterByLevel = (raids: RaidsData[], levelValue?: LevelRange) => {
  if (!levelValue) return raids;
  return raids.filter(
    (raid) =>
      levelValue.min <= NpcList.getById(raid.id).level &&
      levelValue.max >= NpcList.getById(raid.id).level
  );
};
