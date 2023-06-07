import RaidTable from "./components/RaidTable";
import { useFetchRaids } from "./utils/fetchRaids";

const App = () => {
  const { raids } = useFetchRaids();
  return <RaidTable raids={raids} />;
};

export default App;
