import { useState, useEffect } from "react";
import NpcList from "./NpcList";
import "./App.css";

interface RaidsData {
  id: string;
  status: string;
  date: string;
}
const App = () => {
  const [raids, setRaids] = useState<RaidsData[]>([]);

  const date = Date.now().toString();

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

  const filterByStatus = (raids: RaidsData[]) => {
    setRaids(raids.filter((raid) => raid.status === "1"));
  };

  return (
    <>
      <h1>Raid Boss Checker</h1>
      <h3>Available raids:</h3>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => filterByStatus(raids)}
      >
        Update List
      </button>
      <div className="table">
        <table>
          <thead>
            <tr>
              <td className="raid-id">Raid Boss ID</td>
              <td className="raid-status">Status</td>
              <td className="raid-date">Spawn Window</td>
            </tr>
          </thead>
          <tbody>
            {raids.map((raid) => (
              <tr key={raid.id}>
                <td className="raid-id">{NpcList.getById(raid.id).name}</td>
                {raid.status === "1" ? (
                  <>
                    <td className="raid-status">On</td>
                    <td
                      className="raid-date"
                      style={{ backgroundColor: "green" }}
                    >
                      Alive
                    </td>
                  </>
                ) : (
                  <>
                    <td className="raid-status">OFF</td>
                    <td className="raid-date">{raid.date}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
