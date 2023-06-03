import RaidTableBody from "./RaidTableBody";
import { RaidsData } from "../App";
import "../App.css";

interface RaidTable {
  raids: RaidsData[];
  setRaids: (raids: RaidsData[]) => void;
  levelValue?: Number;
  sortByLevel: (raids: RaidsData[]) => void;
  isSortedByLevel?: boolean;
  sortByBothStatus: (raids: RaidsData[]) => void;
  isSortedByStatus?: boolean;
}

const RaidTable = ({
  raids,
  setRaids,
  levelValue,
  sortByLevel,
  isSortedByLevel,
  sortByBothStatus,
  isSortedByStatus,
}: RaidTable) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <td className="raid-id">Raid Boss ID</td>
            <td className="raid-lvl">
              Raid Boss Level
              <i
                className={`bi bi-arrow-${isSortedByLevel ? "up" : "down"}`}
                onClick={() => setRaids(sortByLevel(raids))}
              ></i>
            </td>
            <td className="raid-status">
              Status
              <i
                className={`bi bi-arrow-${isSortedByStatus ? "up" : "down"}`}
                onClick={() => sortByBothStatus(raids)}
              ></i>
            </td>
            <td className="raid-date">Spawn Window</td>
          </tr>
        </thead>
        <RaidTableBody raids={raids} levelValue={levelValue} />
      </table>
    </div>
  );
};

export default RaidTable;
