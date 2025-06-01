import type { HistoryType } from "../../../types/types";

type HistoryProps={
    item:HistoryType
}
const HistoryTableItem = ({item}:HistoryProps) => {
  return <tr>
                <td>{item.id}</td>
                <td>{item.date}</td>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td>{item.total} $</td>
            </tr>;
};

export default HistoryTableItem;
