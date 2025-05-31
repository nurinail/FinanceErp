import classNames from "classnames";
import style from "./finance.module.scss";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { useEffect } from "react";

const Finance = () => {
  const inventorPurchases=useSelector((state:RootState)=>state.inventory.inventory);
  let totalPurchases:number=0;
  console.log(inventorPurchases)
  useEffect(()=>{
    for (let index = 0; index < inventorPurchases.length-1; index++) {
      totalPurchases+= inventorPurchases[index].total;
    }
    console.log(totalPurchases)
  },[inventorPurchases.length]);
  return (
    <div className={style.financeComp}>
      <h2 className={style.financeComp_title}>Maliyyə Məlumatları</h2>
      <div className={style.financeComp_info}>
        <div className={style.financeComp_info_item}>
          <h3 className={style.financeComp_info_item_title}>Nağd pul</h3>
          <h2 className={style.financeComp_info_item_amount}>14440.00 AZN</h2>
        </div>
        <div className={style.financeComp_info_item}>
          <h3 className={style.financeComp_info_item_title}>Banks Hesabı</h3>
          <h2 className={style.financeComp_info_item_amount}>14440.00 AZN</h2>
        </div>
        <div className={style.financeComp_info_item}>
          <h3 className={style.financeComp_info_item_title}>Debitor</h3>
          <h2 className={style.financeComp_info_item_amount}>14440.00 AZN</h2>
        </div>
        <div className={style.financeComp_info_item}>
          <h3 className={style.financeComp_info_item_title}>Alış</h3>
          <h2 className={style.financeComp_info_item_amount}>{totalPurchases} AZN</h2>
        </div>
        <div className={style.financeComp_info_item}>
          <h3
            className={classNames(
              style.financeComp_info_item_title,
              style.liability
            )}
          >
            Borc
          </h3>
          <h2
            className={classNames(
              style.financeComp_info_item_amount,
              style.liability
            )}
          >
            14440.00 AZN
          </h2>
        </div>
      </div>
      <div className={style.financeComp_history}>
        <h2 className={style.financeComp_history_title}>Son Əməliyyatlar</h2>
        <div className={style.financeComp_history_filter}>
          <select
            className={style.financeComp_history_filter_select}
            name=""
            id=""
          >
            <option value="">Hamısı</option>
            <option value="">Nağd pul</option>
            <option value="">Nisyə</option>
            <option value="">Borc</option>
          </select>
          <select
            className={style.financeComp_history_filter_select}
            name=""
            id=""
          >
            <option value="">Tarix</option>
            <option value="">Ən Yeni</option>
            <option value="">Ən Köhnə</option>
          </select>
          <select
            className={style.financeComp_history_filter_select}
            name=""
            id=""
          >
            <option value="">Məbləğ</option>
            <option value="">Ən Çox</option>
            <option value="">Ən Az</option>
          </select>
          <button className={style.financeComp_history_filter_btn}>
            Sırala
          </button>
        </div>
        <table className={style.financeComp_history_table}>
          <thead>
            <tr className={style.thead_row}>
              <th>Tarix</th>
              <th>Təsvir</th>
              <th>Məbləğ</th>
              <th>Növ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>25-05-2025</td>
              <td>Nağd gəlir</td>
              <td>1000 AZN</td>
              <td>Gəlir</td>
            </tr>
            <tr>
              <td>25-05-2025</td>
              <td>Nağd gəlir</td>
              <td>1000 AZN</td>
              <td>Gəlir</td>
            </tr>
            <tr>
              <td>25-05-2025</td>
              <td>Nağd gəlir</td>
              <td>1000 AZN</td>
              <td>Gəlir</td>
            </tr>
            <tr>
              <td>25-05-2025</td>
              <td>Nağd gəlir</td>
              <td>1000 AZN</td>
              <td>Gəlir</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Finance;
