import  { useState } from "react";
import classNames from "classnames";
import style from "./history.module.scss";
import HistoryTableItem from "./HistoryTableItem";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import type { HistoryType } from "../../../types/types";
const tabs: string[] = ["Hamısı", "Saving", "Gəlirlər", "Xərclər"];

const HistoryTable = () => {
    const historyData=useSelector((state:RootState)=>state.history.history)
  const [isTabs, setIsTabs] = useState<string>("Hamısı");


  return (
    <div className={style.historyTableComp}>
      <div className={style.historyTableComp_tabs}>
        <ul className={style.historyTableComp_tabs_menu}>
          {tabs.map((item) => (
            <li key={item} className={style.historyTableComp_tabs_menu_item}>
              <button
                onClick={() => setIsTabs(item)}
                className={classNames(
                  style.historyTableComp_tabs_menu_item_btn,
                  { [style.active]: isTabs === item }
                )}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        <div className={style.historyTableComp_tabs_notife}>
          <span className={style.historyTableComp_tabs_notife_item}>Status: </span>
          <span className={style.historyTableComp_tabs_notife_item}>{isTabs} ↓</span>
        </div>
      </div>
      <div className={style.historyTableComp_tableWrapper}>
      <table className={style.historyTableComp_table}>
        <thead>
            <tr>
                <th>Ref ID</th>
                <th>Tarix</th>
                <th>Tipi</th>
                <th>Təsvir</th>
                <th>Məbləğ</th>
            </tr>
        </thead>
        <tbody>
            {
                historyData.map((item:HistoryType)=>(
                    <HistoryTableItem key={item.id} item={item}/>
                ))
            }
        </tbody>
        
      </table>

      </div>
    </div>
  );
};

export default HistoryTable;
