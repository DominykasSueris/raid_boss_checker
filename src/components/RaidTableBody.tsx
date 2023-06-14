import { Column, RaidsInfo } from "../utils/spec";
interface RaidTableProps {
  raids: RaidsInfo[];
  columns: Column[];
}

const RaidTableBody = ({ raids, columns }: RaidTableProps) => {
  return (
    <tbody>
      {raids.map((raid) => (
        <tr key={raid.id}>
          {columns.map((col) => (
            <td key={col.key}>{raid[col.key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default RaidTableBody;
