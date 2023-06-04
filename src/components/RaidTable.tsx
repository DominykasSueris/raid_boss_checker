import { useState } from "react";
import RaidTableBody from "./RaidTableBody";
import { RaidsData } from "../App";
import "../App.css";

interface RaidTable {
  raids: RaidsData[];
  setRaids: (raids: RaidsData[]) => void;
  sortByLevel: (raids: RaidsData[]) => RaidsData[];
  isSortedByLevel?: boolean;
  sortByBothStatus: (raids: RaidsData[]) => RaidsData[];
  isSortedByStatus?: boolean;
}

export interface LevelRange {
  min: number;
  max: number;
}

const RaidTable = ({
  raids,
  setRaids,
  sortByLevel,
  isSortedByLevel,
  sortByBothStatus,
  isSortedByStatus,
}: RaidTable) => {
  const [levelValue, setLevelValue] = useState<LevelRange>();

  const levels: LevelRange[] = [
    { min: 20, max: 30 },
    { min: 31, max: 40 },
    { min: 41, max: 50 },
    { min: 51, max: 60 },
    { min: 61, max: 70 },
    { min: 71, max: 90 },
  ];

  return (
    <>
      <label>Level select: </label>
      <select
        className="form-select form-select-lg mb-3 h-75"
        aria-label=".form-select-lg example"
        onChange={(e) => setLevelValue(levels[parseInt(e.target.value)])}
      >
        <option value="">All</option>
        {levels.map((level, idx) => (
          <option value={idx}>
            {level.min} - {level.max}
          </option>
        ))}
      </select>
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
    </>
  );
};

export default RaidTable;
