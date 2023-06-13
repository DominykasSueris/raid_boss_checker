import { useEffect, useState } from "react";
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
      <label>Status select:</label>
      <select
        onChange={(e) => {
          setStatus(e.target.value);
        }}
      >
        <option value="">All</option>
        <option value="1">ON</option>
        <option value="0">OFF</option>
      </select>
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
    </>
  );
};

export default RaidLevelFiltering;
