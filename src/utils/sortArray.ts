import { RaidsData } from "../utils/spec";

export const sortByStatus = (raids: RaidsData[]) => {
  return raids.sort((a, b) => {
    return a.date < b.date ? -1 : 1 || parseInt(a.status) - parseInt(b.status);
  });
};
