import { Column, Filters } from "../utils/spec";
import { Sorting } from "./RaidTable";

interface RaidTableHeader {
  column: Column;
  sorting: Sorting;
  filters: Filters;
  sortTable: (sorting: Sorting) => void;
}

const RaidTableHeaderCell = ({
  column,
  sorting,
  filters,
  sortTable,
}: RaidTableHeader) => {
  const isDescSorting =
    sorting.column === column.key && sorting.order === "desc";
  const isAscSorting = sorting.column === column.key && sorting.order === "asc";
  const futureSortingOrder = isDescSorting ? "asc" : "desc";

  console.log(filters.status);

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
      {isDescSorting && (
        <i className={filters.status ? "" : "bi bi-arrow-down"}></i>
      )}
      {isAscSorting && (
        <i className={filters.status ? "" : "bi bi-arrow-up"}></i>
      )}
    </th>
  );
};

export default RaidTableHeaderCell;
