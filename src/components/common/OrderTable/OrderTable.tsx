import React from "react";
import classNames from "classnames";
import style from "./orderTable.module.scss";

const OrderTable = () => {
  return (
    <div className={style.orderTableComp}>
      <h2 className={style.orderTableComp_title}>Satış Sifarişləri</h2>
      <div className={style.orderTableComp_search}>
        <input className={style.orderTableComp_search_input} type="text" placeholder="Sifariş axtar"/>
        <select className={style.orderTableComp_search_select} name="" id="">
            <option value="">laqonda</option>
            <option value="">direl</option>
            <option value="">preparatur</option>
        </select>
      </div>
      <table className={style.orderTableComp_table}>
        <thead>
            <tr className={style.orderTableComp_table_thead_row}>
                <th className={style.orderTableComp_table_number}>Sıra</th>
                <th>Sifariş №</th>
                <th>Müştəri</th>
                <th>Məhsul</th>
                <th>Tarix</th>
                <th>Məbləğ</th>
                <th>Əməliyyatlar</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className={style.orderTableComp_table_number}>1</td>
                <td>1234567</td>
                <td>AzərFloatdskjfhdskj</td>
                <td>Laqonda</td>
                <td>14-05-2025</td>
                <td>2300 Azn</td>
                <td className={style.orderTableComp_table_tbody_rowButtons}>
                    <button className={classNames(style.orderTableComp_table_tbody_rowButtons_item,style.changeBtn)}>dəyiş</button>
                    <button className={classNames(style.orderTableComp_table_tbody_rowButtons_item,style.deleteBtn)}>sil</button>
                </td>
            </tr>
            <tr>
                <td className={style.orderTableComp_table_number}>1</td>
                <td>1234567</td>
                <td>AzərFloatdskjfhdskj</td>
                <td>Laqonda</td>
                <td>14-05-2025</td>
                <td>2300 Azn</td>
                <td className={style.orderTableComp_table_tbody_rowButtons}>
                    <button className={classNames(style.orderTableComp_table_tbody_rowButtons_item,style.changeBtn)}>dəyiş</button>
                    <button className={classNames(style.orderTableComp_table_tbody_rowButtons_item,style.deleteBtn)}>sil</button>
                </td>
            </tr>
            <tr>
                <td className={style.orderTableComp_table_number}>1</td>
                <td>1234567</td>
                <td>AzərFloatdskjfhdskj</td>
                <td>Laqonda</td>
                <td>14-05-2025</td>
                <td>2300 Azn</td>
                <td className={style.orderTableComp_table_tbody_rowButtons}>
                    <button className={classNames(style.orderTableComp_table_tbody_rowButtons_item,style.changeBtn)}>dəyiş</button>
                    <button className={classNames(style.orderTableComp_table_tbody_rowButtons_item,style.deleteBtn)}>sil</button>
                </td>
            </tr>
            <tr>
                <td className={style.orderTableComp_table_number}>1</td>
                <td>1234567</td>
                <td>AzərFloatdskjfhdskj</td>
                <td>Laqonda</td>
                <td>14-05-2025</td>
                <td>2300 Azn</td>
                <td className={style.orderTableComp_table_tbody_rowButtons}>
                    <button className={classNames(style.orderTableComp_table_tbody_rowButtons_item,style.changeBtn)}>dəyiş</button>
                    <button className={classNames(style.orderTableComp_table_tbody_rowButtons_item,style.deleteBtn)}>sil</button>
                </td>
            </tr>
        </tbody>

      </table>
    </div>
  );
};

export default OrderTable;
