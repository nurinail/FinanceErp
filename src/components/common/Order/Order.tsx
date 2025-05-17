import React from "react";
import classNames from "classnames";
import style from "./order.module.scss";

const Order = () => {
  return <div className={style.orderComp}>
    <h2 className={style.orderComp_title}>Yeni Sifariş</h2>
    <form className={style.orderComp_form}>
        <div className={style.orderComp_form_item}>
            <label className={style.orderComp_form_item_label} htmlFor="customer">Müştəri</label>
            <select className={style.orderComp_form_item_select} name="" id="customer">
                <option value="">Big Four</option>
                <option value="">Big Four</option>
                <option value="">Big Four</option>
            </select>
        </div>
        <div className={style.orderComp_form_item}>
            <label className={style.orderComp_form_item_label} htmlFor="">Sifariş Tarixi</label>
            <input className={style.orderComp_form_item_input_date} type="date" />
        </div>
        <div className={style.orderComp_form_item}>
            <label className={style.orderComp_form_item_label} htmlFor="">Çatdırılma Tarixi</label>
            <input className={style.orderComp_form_item_input_date} type="date" />
        </div >
        <div className={classNames(style.orderComp_form_itemPr)}>
            <h2 className={style.orderComp_form_itemPr_title}>Sifariş Məhsulları</h2>
            <div className={style.orderComp_form_itemPr_info}>
                <select className={style.orderComp_form_itemPr_info_product} name="" id="">
                    <option value="">komputer</option>
                    <option value="">qələm</option>
                </select>
                <input className={style.orderComp_form_itemPr_info_product_input_quantity} type="number" placeholder="Miqdar"/>
                <input className={style.orderComp_form_itemPr_info_product_input_price} type="number" placeholder="Qiymət"/>
                <button className={style.orderComp_form_itemPr_info_product_btn_delete}>Sil</button>
            </div>
            <button className={style.orderComp_form_itemPr_addProduct_btn}>Məhsul Əlavə Et</button>
        </div>
        <div className={style.orderComp_form_item}>
            <label className={style.orderComp_form_item_label} htmlFor="payment">Ödəniş Metodu</label>
            <select className={style.orderComp_form_item_select} name="" id="payment">
                <option value="">Nağd</option>
                <option value="">Nisyə</option>
                <option value="">Bank hesabı</option>
            </select>
        </div>
        <div className={style.orderComp_form_item}>
            <label className={style.orderComp_form_item_label} htmlFor="notes">Qeydlər</label>
            <textarea className={style.orderComp_form_item_notes} name="" id="notes"></textarea>
        </div>
    </form>
  </div>;
};

export default Order;
