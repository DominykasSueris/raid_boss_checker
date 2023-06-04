import { useState, useEffect } from "react";
import RaidTable from "./components/RaidTable";
import NpcList from "./NpcList";

export interface RaidsData {
  id: string;
  status: string;
  date: string;
}

export interface LevelRange {
  min: number;
  max: number;
}

const App = () => {
  const [raids, setRaids] = useState<RaidsData[]>([]);
  const [levelValue, setLevelValue] = useState<LevelRange>();
  const [isSortedByLevel, setSortedByLevel] = useState<boolean>();
  const [isSortedByStatus, setSortedByStatus] = useState<boolean>();

  const date = Date.now();

  const formatter = Intl.DateTimeFormat("en-Ca", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
  const currentDate = formatter.format(date);

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

  const sortByStatus = (raids: RaidsData[]) => {
    return raids.sort((a, b) => {
      return a.date < b.date
        ? -1
        : 1 || parseInt(a.status) - parseInt(b.status);
    });
  };

  const sortByLevel = (raids: RaidsData[]) => {
    const sorting = !isSortedByLevel;
    setSortedByLevel(sorting);
    return [...raids].sort((a, b) => {
      return sorting
        ? NpcList.getById(a.id).level < NpcList.getById(b.id).level
          ? -1
          : 1
        : NpcList.getById(b.id).level < NpcList.getById(a.id).level
        ? -1
        : 1;
    });
  };

  const sortByBothStatus = (raids: RaidsData[]) => {
    const sorting = !isSortedByStatus;
    setSortedByStatus(sorting);
    return raids.sort((a, b) => {
      return sorting
        ? a.status < b.status
          ? -1
          : 1 || parseInt(a.status) - parseInt(b.status)
        : a.status > b.status
        ? -1
        : 1 || parseInt(a.status) - parseInt(b.status);
    });
  };

  const filterByStatus = (raids: RaidsData[]) => {
    setRaids(raids.filter((raid) => raid.status === "1"));
  };

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
      <RaidTable
        raids={raids}
        setRaids={setRaids}
        levelValue={levelValue}
        sortByLevel={sortByLevel}
        sortByBothStatus={sortByBothStatus}
        isSortedByLevel={isSortedByLevel}
        isSortedByStatus={isSortedByStatus}
      />
    </>
  );
};

export default App;
