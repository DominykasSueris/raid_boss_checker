import RaidTable from "./components/RaidTable";
import RaidLevelFiltering from "./components/RaidLevelFiltering";
import { useFetchRaids } from "./utils/fetchRaids";
import { Filters } from "./utils/spec";
import { filterByLevel, filterByStatus } from "./utils/filters";
import { useState } from "react";

const App = () => {
  const { raids } = useFetchRaids();
  const [filters, setFilters] = useState<Filters>({ status: "" });

  const filterData = (filters: Filters) => {
    return filterByLevel(filterByStatus(raids, filters.status), filters.level);
  };

  return (
    <>
      <RaidLevelFiltering updateFilters={setFilters} />
      <RaidTable raids={filterData(filters)} />
    </>
  );
};

export default App;
