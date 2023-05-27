import NpcList from "../NpcList";
import { RaidsData } from "../App";

interface RaidTableProps {
  raids: RaidsData[];
  levelValue?: Number;
}

const RaidTableBody = ({ raids, levelValue }: RaidTableProps) => {
  const filterByLevel = (raids: RaidsData[]) => {
    if (!levelValue) return raids;
    return raids.filter(
      (raid) => NpcList.getById(raid.id).level === levelValue
    );
  };

  const filterRaids = () => {
    return filterByLevel(raids);
  };
  return (
    <tbody>
      {filterRaids().map((raid) => (
        <tr key={raid.id}>
          <td className="raid-id">{NpcList.getById(raid.id).name}</td>
          <td className="raid-lvl">{NpcList.getById(raid.id).level}</td>
          {raid.status === "1" ? (
            <>
              <td className="raid-status">On</td>
              <td className="raid-date" style={{ backgroundColor: "green" }}>
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
  );
};

export default RaidTableBody;
