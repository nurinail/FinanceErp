import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import classNames from "classnames";
import style from "./stock.module.scss";
import type { InventoryType } from "../../../types/types";
const Stock = () => {
  const [stockData,setStockData]=useState([])
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InventoryType>({
    defaultValues:{
      name:"",
      count:0,
      prices:0,
      category:""
    }
  });

  const onSubmit=(data:InventoryType)=>{
    console.log(data)
  }
  return (
    <div className={style.stockComp}>
      <h2 className={style.stockComp_title}>Anbar İdarəçiliyi</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={style.stockComp_form} action="">
        <h2 className={style.stockComp_form_title}>Yeni Məhsul</h2>
        <div className={style.stockComp_form_item}>
          <label
            className={style.stockComp_form_item_label}
            htmlFor="productname"
          >
            Məhsul adı
          </label>
          <input
            className={style.stockComp_form_item_input}
            id="productname"
            type="text"
            {...register("name")}
          />
        </div>
        <div className={style.stockComp_form_item}>
          <label
            className={style.stockComp_form_item_label}
            htmlFor="productcount"
          >
            Miqdar
          </label>
          <input
            className={style.stockComp_form_item_input}
            id="productcount"
            type="number"
            {...register("count")}
          />
        </div>
        <div className={style.stockComp_form_item}>
          <label
            className={style.stockComp_form_item_label}
            htmlFor="productPrice"
          >
            Qiymət
          </label>
          <input
            className={style.stockComp_form_item_input}
            id="productPrice"
            type="text"
            {...register("prices")}
          />
        </div>
        <div className={style.stockComp_form_item}>
          <label className={style.stockComp_form_item_label} htmlFor="category">
            Kateqoriya
          </label>
          <select
            className={style.stockComp_form_item_select}
            id="category"
            {...register("category")}
          >
            <option value="">Elektronik</option>
            <option value="">Məişət</option>
            <option value="">Mobil</option>
          </select>
        </div>
        <button className={style.stockComp_form_submitBtn} type="submit">
          Əlavə et
        </button>
      </form>
      <div className={style.stockComp_table}>
        <ul className={style.stockComp_table_wrapper}>
          <li className={style.stockComp_table_wrapper_item}>Məhsul</li>
          <li className={style.stockComp_table_wrapper_item}>Kateqoriya</li>
          <li className={style.stockComp_table_wrapper_item}>Miqdar</li>
          <li className={style.stockComp_table_wrapper_item}>Qiymət</li>
          <li className={style.stockComp_table_wrapper_item}>Cəmi</li>
          <li className={style.stockComp_table_wrapper_item}>Əməliyyat</li>
        </ul>
        <ul className={style.stockComp_table_wrapper}>
          <li className={style.stockComp_table_wrapper_item}><input type="text" value={"laqonda"}/></li>
          <li className={style.stockComp_table_wrapper_item}><input type="text" value={"Elektronik"}/></li>
          <li className={style.stockComp_table_wrapper_item}><input type="text" value={"113"}/></li>
          <li className={style.stockComp_table_wrapper_item}><input type="text" value={"20"}/></li>
          <li className={style.stockComp_table_wrapper_item}><input type="text" value={"2260"}/></li>
          <li className={style.stockComp_table_wrapper_item}><button className={style.changeBtn}>dəyiş</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Stock;
