import { LevelRange } from "./levels";
export interface RaidsData {
  id: string;
  status: string;
  date: string;
}

export interface Filters {
  status: string;
  level?: LevelRange;
}
