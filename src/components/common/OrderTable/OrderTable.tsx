import style from "./orderTable.module.scss";
import OrderTableItem from "./OrderTableItem";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import type { OrderType } from "../../../types/types";

const OrderTable = () => {
  const orders = useSelector((state: RootState) => state.order.orders);
  return (
    <div className={style.orderTable}>
      <h2 className={style.orderTable_title}>Satış</h2>
      <div className={style.orderTable_filter}>
        <input
          className={style.orderTable_filter_item}
          type="text" 
          placeholder="Axtar..."
        />
        <select className={style.orderTable_filter_item} name="" id="">
          <option value="" disabled>
            Ödənişə görə
          </option>
          <option value="cash-in">nağd</option>
          <option value="debitor-in">nisyə</option>
          <option value="bank-in">bank</option>
        </select>
      </div>
      <div className={style.orderTable_container}>
        <table className={style.orderTable_container_table}>
          <thead className={style.orderTable_container_table_head}>
            <tr>
              <th>Sıra</th>
              <th>Sifariş №</th>
              <th>Məhsul</th>
              <th>Ödəniş növü</th>
              <th>Tarix</th>
              <th>Məbləğ</th>
              <th>Əməliyyat</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((item: OrderType, index) => (
                <OrderTableItem key={item.id} index={index + 1} order={item} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
