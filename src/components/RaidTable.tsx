import { useEffect, useState } from "react";
import RaidTableBody from "./RaidTableBody";
import { currentDate, date } from "../utils/date";
import { RaidsData } from "../utils/spec";
import { levels, LevelRange } from "../utils/levels";
import {
  sortByStatus,
  sortByBothStatus,
  sortByLevel,
} from "../utils/sortArray";
import "../App.css";

const RaidTable = () => {
  const [raids, setRaids] = useState<RaidsData[]>([]);
  const [levelValue, setLevelValue] = useState<LevelRange>();
  const [isSortedByLevel, setSortedByLevel] = useState<boolean>();
  const [isSortedByStatus, setSortedByStatus] = useState<boolean>();

  const fetchUserData = () => {
    fetch(
      `https://seasons.l2reborn.org/wp-content/uploads/raids/raids.json?${date}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRaids(sortByStatus(data));
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const filterByStatus = (raids: RaidsData[]) => {
    setRaids(raids.filter((raid) => raid.status === "1"));
  };

  return (
    <>
      <h1>Raid Boss Checker</h1>
      <h4>Current Date: {currentDate}</h4>
      <h3>Available raids:</h3>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => filterByStatus(raids)}
      >
        Update List
      </button>
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
                  onClick={() => {
                    setRaids(sortByLevel(raids, isSortedByLevel));
                    setSortedByLevel(!isSortedByLevel);
                  }}
                ></i>
              </td>
              <td className="raid-status">
                Status
                <i
                  className={`bi bi-arrow-${isSortedByStatus ? "up" : "down"}`}
                  onClick={() => {
                    setRaids(sortByBothStatus(raids, isSortedByStatus));
                    setSortedByStatus(!isSortedByStatus);
                  }}
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
