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
    return raids;
  };

  return (
    <>
      <h1>Raid Boss Checker</h1>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => filterByStatus(raids)}
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
            {raids.map((raid) => (
              <tr key={raid.id}>
                {raid.status === "1" ? (
                  <>
                    <td className="raid-id">{raid.id}</td>
                    <td className="raid-status">ON</td>
                    <td
                      className="raid-date"
                      style={{ backgroundColor: "green" }}
                    >
                      Alive
                    </td>
                  </>
                ) : (
                  <tr key={raid.id}>
                    <td className="raid-id">{raid.id} </td>
                    <td className="raid-status">OFF</td>
                    <td className="raid-date">{raid.date}</td>
                  </tr>
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
