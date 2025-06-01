import React from "react";
import type { HistoryType } from "../../../types/types";

type HistoryProps={
    item:HistoryType,
}

const FinanceHistoryItem = ({item}:HistoryProps) => {
  return <tr>
              <td>{item.date}</td>
              <td>{item.name}</td>
              <td>{item.desc}</td>
              <td>{item.total} AZN</td>
            </tr>;
};

export default FinanceHistoryItem;
