import { useState, useEffect } from "react";
import "./App.css";

interface RaidsData {
  id: string;
  status: string;
  date: string;
}

const App = () => {
  const [raids, setRaids] = useState<RaidsData[]>([
    {
      id: "",
      status: "",
      date: "",
    },
  ]);
  const [aliveRaids, setAliveRaids] = useState<RaidsData[]>([
    {
      id: "",
      status: "",
      date: "",
    },
  ]);

  const fetchUserData = () => {
    fetch(
      "https://seasons.l2reborn.org/wp-content/uploads/raids/raids.json?1681824818000"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRaids(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  let raidsData = [...raids];

  const filterByStatus = (raidsData: RaidsData[]) => {
    setAliveRaids(raidsData.filter((raid) => raid.status === "1"));
    return aliveRaids;
  };

  console.log(aliveRaids);

  useEffect(() => {
    filterByStatus(raidsData);
  }, []);

  return (
    <>
      <h1>Raid Boss Checker</h1>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => filterByStatus(raidsData)}
      >
        Update
      </button>
      <div className="table">
        <table>
          <thead>
            <tr className="raid-id">Raid Boss ID</tr>
            <tr className="raid-status">Status</tr>
            <tr className="raid-date">Spawn Window</tr>
          </thead>
          <tbody>
            <>
              {raids.map((raid) => (
                <tr>
                  <td className="raid-id">{raid.id} </td>
                  <td className="raid-status">
                    {raid.status === "1" ? "ON" : "OFF"}
                  </td>
                  <td className="raid-date">{raid.date}</td>
                </tr>
              ))}
              {aliveRaids.map((raid) => (
                <tr>
                  <td className="raid-id">{raid.id} </td>
                  <td className="raid-status">ON</td>
                  <td
                    style={{ backgroundColor: "green" }}
                    className="raid-date"
                  >
                    Alive
                  </td>
                </tr>
              ))}
            </>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
