import { Column } from "./spec";

export const columns: Column[] = [
  {
    key: "name",
    label: "Raid Boss ID",
    sortable: true,
    classes: "col-lg-6",
  },
  {
    key: "level",
    label: "Raid Boss Level",
    sortable: true,
    classes: "col-lg-2 text-center",
  },
  {
    key: "status",
    label: "Status",
    sortable: true,
    classes: "col-lg-1 text-center",
  },
  {
    key: "date",
    label: "Spawn Window",
    sortable: false,
    classes: "col-lg-3 text-center",
  },
];
