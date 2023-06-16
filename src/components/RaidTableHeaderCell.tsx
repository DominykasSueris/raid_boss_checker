import { Column } from "../utils/spec";
import { Sorting } from "./RaidTable";

interface RaidTableHeader {
  column: Column;
  sorting: Sorting;
  sortTable: (sorting: Sorting) => void;
}

const RaidTableHeaderCell = ({
  column,
  sorting,
  sortTable,
}: RaidTableHeader) => {
  const isDescSorting =
    sorting.column === column.key && sorting.order === "desc";
  const isAscSorting = sorting.column === column.key && sorting.order === "asc";
  const futureSortingOrder = isDescSorting ? "asc" : "desc";

  return (
    <th
      className={column.classes}
      key={column.key}
      onClick={() =>
        column.sortable &&
        sortTable({ column: column.key, order: futureSortingOrder })
      }
    >
      {column.label}
      {!isDescSorting && !isAscSorting && (
        <i className={column.key === "date" ? "null" : "bi bi-arrow-up"}></i>
      )}
      {isDescSorting && <i className={"bi bi-arrow-down"}></i>}
      {isAscSorting && <i className={"bi bi-arrow-up"}></i>}
    </th>
  );
};

export default RaidTableHeaderCell;
