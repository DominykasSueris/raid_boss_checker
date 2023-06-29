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
  const futureSortingOrder = isDescSorting ? "asc" : "desc";
  const statusFilter = column.key === "status" && filters.status !== "";
  const sortable =
    (column.sortable || statusFilter) && !(column.sortable && statusFilter);

  return (
    <th
      className={column.classes}
      key={column.key}
      onClick={() =>
        sortable &&
        sortTable({
          column: column.key,
          order: futureSortingOrder,
        })
      }
    >
      {column.label}
      {sortable && (
        <i className={isDescSorting ? "bi bi-arrow-down" : "bi bi-arrow-up"} />
      )}
    </th>
  );
};

export default RaidTableHeaderCell;
