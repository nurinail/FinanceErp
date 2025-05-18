import React from "react";
import classNames from "classnames";
import style from "./stock.module.scss";
const Stock = () => {
  return (
    <div className={style.stockComp}>
      <h2 className={style.stockComp_title}>Anbar İdarəçiliyi</h2>
      <form className={style.stockComp_form} action="">
        <h2 className={style.stockComp_form_title}>Yeni Məhsul</h2>
        <div className={style.stockComp_form_item}>
          <label className={style.stockComp_form_item_label} htmlFor="productName">Məhsul adı</label>
          <input className={style.stockComp_form_item_input} id="productName" type="text" />
        </div>
        <div className={style.stockComp_form_item}>
          <label className={style.stockComp_form_item_label} htmlFor="productCount">Miqdar</label>
          <input className={style.stockComp_form_item_input} id="productCount" type="number" />
        </div>
        <div className={style.stockComp_form_item}>
          <label className={style.stockComp_form_item_label} htmlFor="productPrice">Qiymət</label>
          <input className={style.stockComp_form_item_input} id="productPrice" type="text" />
        </div>
        <div className={style.stockComp_form_item}>
            <label className={style.stockComp_form_item_label} htmlFor="category">Kateqoriya</label>
            <select className={style.stockComp_form_item_select} name="" id="category">
                <option value="">Elektronik</option>
                <option value="">Elektronik</option>
                <option value="">Elektronik</option>
                <option value="">Elektronik</option>
                <option value="">Elektronik</option>
            </select>
        </div>
        <button className={style.stockComp_form_submitBtn} type="submit">Əlavə et</button>
      </form>
      <table className={style.stockComp_table}>
        <thead>
            <tr className={style.stockComp_table_thead_row}>
                <th>Məhsul</th>
                <th>Kateqoriya</th>
                <th>Miqdar</th>
                <th>Qiymət</th>
                <th>Cəmi</th>
                <th>Əməliyyat</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>laqonda</td>
                <td>Elektronik</td>
                <td>113</td>
                <td>20</td>
                <td>2260 AZN</td>
                <td><button className={style.changeBtn}>dəyiş</button></td>
            </tr>
            <tr>
                <td>laqonda</td>
                <td>Elektronik</td>
                <td>113</td>
                <td>20</td>
                <td>2260 AZN</td>
                <td><button className={style.changeBtn}>dəyiş</button></td>
            </tr>
            <tr>
                <td>laqonda</td>
                <td>Elektronik</td>
                <td>113</td>
                <td>20</td>
                <td>2260 AZN</td>
                <td><button className={style.changeBtn}>dəyiş</button></td>
            </tr>
            <tr>
                <td>laqonda</td>
                <td>Elektronik</td>
                <td>113</td>
                <td>20</td>
                <td>2260 AZN</td>
                <td><button className={style.changeBtn}>dəyiş</button></td>
            </tr>
            <tr>
                <td>laqonda</td>
                <td>Elektronik</td>
                <td>113</td>
                <td>20</td>
                <td>2260 AZN</td>
                <td><button className={style.changeBtn}>dəyiş</button></td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Stock;
