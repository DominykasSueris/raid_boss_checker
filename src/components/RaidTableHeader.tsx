import { Column, Filters } from "../utils/spec";
import { Sorting } from "./RaidTable";
import RaidTableHeaderCell from "./RaidTableHeaderCell";

interface RaidTableHeader {
  columns: Column[];
  sorting: Sorting;
  filters: Filters;
  sortTable: (sorting: Sorting) => void;
}

const RaidTableHeader = ({
  columns,
  sorting,
  filters,
  sortTable,
}: RaidTableHeader) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <RaidTableHeaderCell
            key={column.key}
            column={column}
            sorting={sorting}
            filters={filters}
            sortTable={sortTable}
          />
        ))}
      </tr>
    </thead>
  );
};

export default RaidTableHeader;
