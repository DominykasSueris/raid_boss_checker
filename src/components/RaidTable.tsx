import { useEffect, useState } from "react";
import RaidTableBody from "./RaidTableBody";
import RaidTableHeader from "./RaidTableHeader";
import { currentDate } from "../utils/date";
import { Column, RaidsInfo } from "../utils/spec";
import { sortByBothStatus, sortByLevel } from "../utils/sortArray";

export interface RaidsTable {
  raids: RaidsInfo[];
}

export type Sorting = typeof columnSorting;

const columnSorting = { column: "status", order: "desc" };

const RaidTable = ({ raids }: RaidsTable) => {
  const [sorting, setSorting] = useState<Sorting>(columnSorting);
  const [raidsToShow, setRaidsToShow] = useState<RaidsInfo[]>(raids);

  const columns: Column[] = [
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

  const sortTable = (newSorting: Sorting) => {
    setSorting(newSorting);
    if (newSorting.column === "name")
      setRaidsToShow(
        newSorting.order === "asc"
          ? [...raids].sort((a, b) => {
              return a.name.localeCompare(b.name);
            })
          : [...raids].sort((a, b) => {
              return b.name.localeCompare(a.name);
            })
      );
    if (newSorting.column === "level")
      setRaidsToShow(sortByLevel(raids, newSorting.order === "asc"));
    if (newSorting.column === "status")
      setRaidsToShow(sortByBothStatus(raids, newSorting.order === "asc"));
  };

  useEffect(() => {
    sortTable(sorting);
  }, [raids]);

  return (
    <>
      <h2 className="d-flex justify-content-center p-3">
        L2 Reborn x30 server Raid boss checker
      </h2>
      <h4 className="d-flex justify-content-end p-3">
        Current Date:{currentDate}
      </h4>
      <table className="table table-striped table-hover table-bordered w-75 mx-auto">
        <RaidTableHeader
          columns={columns}
          sorting={sorting}
          sortTable={sortTable}
        />
        <RaidTableBody raids={raidsToShow} columns={columns} />
      </table>
    </>
  );
};

export default RaidTable;
