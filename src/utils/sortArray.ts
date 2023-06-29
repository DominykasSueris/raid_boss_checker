import NpcList from "../utils/npcList";
import { RaidsInfo } from "../utils/spec";

export const sortByStatus = (raids: RaidsInfo[]) => {
  return raids.sort((a, b) => {
    return a.date < b.date ? -1 : 1 || parseInt(a.status) - parseInt(b.status);
  });
};

export const sortByLevel = (raids: RaidsInfo[], isAscending?: boolean) => {
  return raids.sort((a, b) => {
    return isAscending
      ? NpcList.getById(a.id).level < NpcList.getById(b.id).level
        ? -1
        : 1
      : NpcList.getById(b.id).level < NpcList.getById(a.id).level
      ? -1
      : 1;
  });
};

export const sortByBothStatus = (raids: RaidsInfo[], isAscending?: boolean) => {
  return raids.sort((a, b) => {
    return isAscending
      ? a.status < b.status
        ? -1
        : 1 || parseInt(a.status) - parseInt(b.status)
      : a.status > b.status
      ? -1
      : 1 || parseInt(a.status) - parseInt(b.status);
  });
};
