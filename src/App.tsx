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

  const fetchUserData = () => {
    fetch(
      "https://seasons.l2reborn.org/wp-content/uploads/raids/raids.json?1680276444083"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRaids(data);
      });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  console.log(raids);

  return (
    <>
      <h1>Raid Boss Checker</h1>
      <div className="table">
        <table>
          <thead>
            <tr className="raid-id">Raid Boss ID</tr>
            <tr className="raid-status">Status</tr>
            <tr className="raid-date">Spawn Window</tr>
          </thead>
          <tbody>
            {raids.map((raid) => (
              <tr>
                <td className="raid-id">{raid.id} </td>
                <td className="raid-status">{raid.status}</td>
                <td className="raid-date">{raid.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
