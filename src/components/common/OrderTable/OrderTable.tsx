import React from "react";
import classNames from "classnames";
import style from "./orderTable.module.scss"
import OrderTableItem from "./OrderTableItem";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import type { OrderType } from "../../../types/types";

const OrderTable = () => {
    const orders=useSelector((state:RootState)=>state.order.orders)
  return <div className={style.orderTable}>
        <h2 className={style.orderTable_title}>Satış</h2>
        <div className={style.orderTable_filter}>
            <input className={style.orderTable_filter_item} type="text" placeholder="Axtar..." />
            <select className={style.orderTable_filter_item} name="" id="">
                <option value="" disabled>Ödənişə görə</option>
                <option value="nağd">nağd</option>
                <option value="nağd">nisyə</option>
                <option value="nağd">bank</option>
            </select>
        </div>
        <div className={style.orderTable_parent}>

      <ul className={classNames(style.orderTable_head)}>
        <li className={style.orderTable_head_item}>Sıra</li>
        <li className={style.orderTable_head_item}>Sifariş №</li>
        <li className={style.orderTable_head_item}>Məhsul</li>
        <li className={style.orderTable_head_item}>Ödəniş növü</li>
        <li className={style.orderTable_head_item}>Tarix</li>
        <li className={style.orderTable_head_item}>Məbləğ</li>
        <li className={style.orderTable_head_item}>Əməliyyat</li>
      </ul>
      {orders&& orders.map((item:OrderType,index)=>(
          <OrderTableItem key={item.id} index={index+1} order={item}/>
      ))}
        </div>

      </div>;
};

export default OrderTable;
