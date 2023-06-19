import { useEffect, useState } from "react";
import { currentDate } from "../utils/date";
import { LevelRange, levels } from "../utils/levels";
import { Filters } from "../utils/spec";

interface RaidLevelFiltering {
  updateFilters: (filters: Filters) => void;
}

const RaidLevelFiltering = ({ updateFilters }: RaidLevelFiltering) => {
  const [levelValue, setLevelValue] = useState<LevelRange>();
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    updateFilters({ status: status, level: levelValue });
  }, [status, levelValue]);

  return (
    <>
      <div className="m-4">
        <h2 className="d-flex justify-content-center p-3">
          L2 Reborn x30 server Raid boss checker
        </h2>
      </div>
      <div className="d-flex m-2">
        <div className="col-6 ">
          <h4 className="d-flex justify-content-center">
            Current Date:{currentDate}
          </h4>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-center">
            <b>
              <label className="ms-3">Status select:</label>
            </b>
            <select
              className="ms-1"
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            >
              <option value="">All</option>
              <option value="ON">ON</option>
              <option value="OFF">OFF</option>
            </select>
            <b>
              <label className="ms-3">Level select: </label>
            </b>
            <select
              className="ms-1"
              onChange={(e) => setLevelValue(levels[parseInt(e.target.value)])}
            >
              <option value="">All</option>
              {levels.map((level, idx) => (
                <option key={idx} value={idx}>
                  {level.min} - {level.max}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default RaidLevelFiltering;
