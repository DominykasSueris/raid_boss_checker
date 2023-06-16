import { LevelRange } from "./levels";
export interface RaidsData {
  id: string;
  status: string;
  date: string;
}

export interface RaidsInfo extends RaidsData {
  name: string;
  level: number;
}

export interface Filters {
  status: string;
  level?: LevelRange;
}

export interface Column {
  key: "name" | "status" | "date" | "level";
  label: string;
  sortable: boolean;
  classes: string;
}
