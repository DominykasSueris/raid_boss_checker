import { Column } from "../utils/spec";
import { Sorting } from "./RaidTable";
import RaidTableHeaderCell from "./RaidTableHeaderCell";

interface RaidTableHeader {
  columns: Column[];
  sorting: Sorting;
  sortTable: (sorting: Sorting) => void;
}

const RaidTableHeader = ({ columns, sorting, sortTable }: RaidTableHeader) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <RaidTableHeaderCell
            key={column.key}
            column={column}
            sorting={sorting}
            sortTable={sortTable}
          />
        ))}
      </tr>
    </thead>
  );
};

export default RaidTableHeader;
