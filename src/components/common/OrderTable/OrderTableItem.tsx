import style from "./orderTable.module.scss";
import type { OrderType } from "../../../types/types";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../../../store/slices/orderSlice";

type OrderPrompt = {
  order: OrderType;
  index: number;
};

const OrderTableItem = ({ order, index }: OrderPrompt) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{index}</td>
      <td>{order.ordernumber}</td>
      <td>{order.product}</td>
      <td>{order.method}</td>
      <td>{order.date}</td>
      <td>{order.total}</td>
      <td>
        <button
          onClick={() => dispatch(deleteOrder(order.id))}
          className={style.orderTable_sect_item_button}
        >
          Sil
        </button>
      </td>
    </tr>
    
  );
};

export default OrderTableItem;
