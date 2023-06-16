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
    <div className="m-4">
      <label>Status select:</label>
      <select
        onChange={(e) => {
          setStatus(e.target.value);
        }}
      >
        <option value="">All</option>
        <option value="On">ON</option>
        <option value="Off">OFF</option>
      </select>
      <label>Level select: </label>
      <select
        aria-label=".form-select-lg example"
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
  );
};

export default RaidLevelFiltering;
