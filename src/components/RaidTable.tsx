import { useEffect, useState } from "react";
import RaidTableBody from "./RaidTableBody";
import RaidTableHeader from "./RaidTableHeader";
import { currentDate } from "../utils/date";
import { Filters, RaidsInfo } from "../utils/spec";
import { sortByBothStatus, sortByLevel } from "../utils/sortArray";
import { columns } from "../utils/columns";

export interface RaidsTable {
  raids: RaidsInfo[];
  filters: Filters;
}

export type Sorting = typeof columnSorting;
const columnSorting = { column: "status", order: "desc" };

const RaidTable = ({ raids, filters }: RaidsTable) => {
  const [sorting, setSorting] = useState<Sorting>(columnSorting);
  const [raidsToShow, setRaidsToShow] = useState<RaidsInfo[]>(raids);

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
          filters={filters}
          sortTable={sortTable}
        />
        <RaidTableBody raids={raidsToShow} columns={columns} />
      </table>
    </>
  );
};

export default RaidTable;
