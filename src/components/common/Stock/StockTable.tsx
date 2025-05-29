import React, { useState } from "react";
import classNames from "classnames";
import style from "./stock.module.scss";
import type { InventoryType } from "../../../types/types";
import { useDispatch } from "react-redux";
import { changeInventor, deleteInventor } from "../../../store/slices/inventorySlice";
type StockTableProps = {
  item: InventoryType;
};
const StockTable = ({ item }: StockTableProps) => {
  const dispatch=useDispatch();
  const [isEdit, setIsEdit] = useState<boolean>(true);
  const [editValue,setEditValue]=useState<InventoryType>(item);
  const handleDelete=()=>{
    const confirmItem=confirm("Silmək İstədiyinə Əminsən?");
    if(confirmItem){
      dispatch(deleteInventor(item.id));
      return
    }
  }
  const handleSave=()=>{
    setIsEdit(prev=>!prev);
    const changeInventorItem:InventoryType={
      ...editValue,
      total:editValue.prices*editValue.count,
    };
    dispatch(changeInventor(changeInventorItem));
  }
  return (
    <ul className={style.stockComp_table_wrapper}>
      <li className={style.stockComp_table_wrapper_item}>
        {isEdit?<p className={style.stockComp_table_wrapper_item_text}>{item.name}</p>:
        <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEditValue({ ...editValue, name: e.target.value })} className={style.stockComp_table_wrapper_item_input} value={editValue.name}/>}
      </li>
      <li className={style.stockComp_table_wrapper_item}>
        {isEdit?<p className={style.stockComp_table_wrapper_item_text}>{item.category}</p>:
        <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEditValue({ ...editValue, category: e.target.value })} className={style.stockComp_table_wrapper_item_input} value={editValue.category}/>}
      </li>
      <li className={style.stockComp_table_wrapper_item}>
        {isEdit?<p className={style.stockComp_table_wrapper_item_text}>{item.count}</p>:
        <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEditValue({ ...editValue, count: Number(e.target.value) })} className={style.stockComp_table_wrapper_item_input} value={editValue.count}/>}
      </li>
      <li className={style.stockComp_table_wrapper_item}>
        {isEdit?<p className={style.stockComp_table_wrapper_item_text}>{item.prices}</p>:
        <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEditValue({ ...editValue, prices: Number(e.target.value) })} className={style.stockComp_table_wrapper_item_input} value={editValue.prices}/>}
      </li>
      <li className={style.stockComp_table_wrapper_item}>
        {isEdit?<p className={style.stockComp_table_wrapper_item_text}>{item.count*item.prices}</p>:
        <p className={style.stockComp_table_wrapper_item_input}>{editValue.count*editValue.prices}</p>}
      </li>
      <li className={classNames(style.stockComp_table_wrapper_item,style.stockComp_table_wrapper_buttons)}>
        <button onClick={handleDelete} className={style.stockComp_table_wrapper_buttons_item}>Sil</button>
        {isEdit?
        <button className={style.stockComp_table_wrapper_buttons_item} onClick={()=>setIsEdit(prev=>!prev)}>Dəyiş</button>:
        <button className={classNames(style.stockComp_table_wrapper_buttons_item,style.stockComp_table_wrapper_buttons_item_save)} onClick={handleSave}>Saxla</button>
        }
      </li>
    </ul>
  );
};

export default React.memo(StockTable);
