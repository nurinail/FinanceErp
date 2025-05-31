import classNames from "classnames";
import { useForm } from "react-hook-form";
import style from "./stock.module.scss";
import StockTable from "./StockTable";
import type { HistoryType, InventoryType } from "../../../types/types";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addNewInventor } from "../../../store/slices/inventorySlice";
import type { RootState } from "../../../store/store";
import { addHistory } from "../../../store/slices/history";

const Stock = () => {
  const dispatch = useDispatch(); 
 
  const inventorData=useSelector((state:RootState)=>state.inventory.inventory,
shallowEqual);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InventoryType>({
    mode:"onSubmit",
    defaultValues: {
    category: "",  
    balance: "",   
  },
  });
  const onSubmit = (data: Omit<InventoryType, "id" | "desc">) => {
    const timeId=Date.now();
    const newInventory: InventoryType = {
      ...data,
      count:Number(data.count),
      prices:Number(data.prices),
      total:Number(data.total),
      id: timeId,
      desc: "Məhsul Alışı",
    };
    const historyItem: HistoryType = {
    id: timeId,
    desc: "Məhsul Alışı",
    date: data.date,
    name: data.name,
    balance: data.balance,
    total: Number(data.count) * Number(data.prices),
  };
    dispatch(addHistory(historyItem))
    dispatch(addNewInventor(newInventory));

    // reset();
  };
  
// console.log(inventorData)
  return (
    <div className={style.stockComp}>
      <h2 className={style.stockComp_title}>Anbar İdarəçiliyi</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={style.stockComp_form}>
        <h2 className={style.stockComp_form_title}>Yeni Məhsul</h2>

        <div className={style.stockComp_form_item}>
          <label className={style.stockComp_form_item_label} htmlFor="name">
            Məhsul adı
          </label>
          <input
            className={style.stockComp_form_item_input}
            id="name"
            type="text"
            {...register("name", { required: {
              value:true,
              message:"Məhsul adı vacibdir!"
            } })}
            />
            <span style={{color:"red"}}>{errors.name?.message}</span>
        </div>

        <div className={style.stockComp_form_item}>
          <label className={style.stockComp_form_item_label} htmlFor="count">
            Miqdar
          </label>
          <input
            className={style.stockComp_form_item_input}
            id="count"
            type="number"
            {...register("count", { required: {
              value:true,
              message:"Məhsulun sayını qeyd edin!"
            }, min: 1 })}
          />
           <span style={{color:"red"}}>{errors.count?.message}</span>
        </div>

        <div className={style.stockComp_form_item}>
          <label className={style.stockComp_form_item_label} htmlFor="prices">
            Qiymət
          </label>
          <input
            className={style.stockComp_form_item_input}
            id="prices"
            type="number"
            step="0.01"
            {...register("prices", { required: {
              value:true,
              message:"Qiymət daxil edin!"
            }, min: 1 })}
          />
         <span style={{color:"red"}}>{errors.prices?.message}</span>
        </div>
        <div className={style.stockComp_form_item}>
          <label className={style.stockComp_form_item_label} htmlFor="date">
            Tarix
          </label>
          <input
            className={style.stockComp_form_item_input}
            id="date"
            type="date"
            {...register("date", { required: {
              value:true,
              message:"Alış tarixini qeyd edin!"
            } })}
          />
           <span style={{color:"red"}}>{errors.date?.message}</span>
        </div>

        <div className={style.stockComp_form_item}>
          <label className={style.stockComp_form_item_label} htmlFor="category">
            Kateqoriya
          </label>
          <select
            className={style.stockComp_form_item_select}
            id="category"
            {...register("category", { required: {
              value:true,
              message:"Kateqoriyanı seçin!",
            } })}
          >
            <option value="" disabled>---</option>
            <option value="Elektronik">Elektronik</option>
            <option value="Məişət">Məişət</option>
            <option value="Mobil">Mobil</option>
          </select>
           <span style={{color:"red"}}>{errors.category?.message}</span>
        </div>
        <div className={style.stockComp_form_item}>
          <label className={style.stockComp_form_item_label} htmlFor="category">
            Məxaric forması
          </label>
          <select
            className={style.stockComp_form_item_select}
            id="balance"
            {...register("balance", { required: {
              value:true,
              message:"Məxaric formasını seçin!"
            } })}
          >
            <option value="" disabled>---</option>
            <option value="nağd">nağd məxaric</option>
            <option value="bank hesabı">bank hesabı</option>
            <option value="borc">borc</option>
          </select>
           <span style={{color:"red"}}>{errors.balance?.message}</span>
        </div>

        <button className={style.stockComp_form_submitBtn} type="submit">
          Əlavə et
        </button>
      </form>
          {
      inventorData.length===0?
      <p style={{width:"100%",textAlign:"center",fontSize:"2.6rem"}}>Data Yoxdur</p>:
      <div className={style.stockComp_table}>
        <ul
          className={classNames(
            style.stockComp_table_wrapper,
            style.stockComp_table_wrapper_head
          )}
        >
          <li className={style.stockComp_table_wrapper_item}>Məhsul</li>
          <li className={style.stockComp_table_wrapper_item}>Kateqoriya</li>
          <li className={style.stockComp_table_wrapper_item}>Miqdar</li>
          <li className={style.stockComp_table_wrapper_item}>Qiymət</li>
          <li className={style.stockComp_table_wrapper_item}>Cəmi</li>
          <li className={style.stockComp_table_wrapper_item}>Əməliyyat</li>
        </ul>
        {inventorData && inventorData.map((item:InventoryType)=>(
          <StockTable key={item.id} item={item} />
        ))}
      </div>
      
    }
    </div>
  );
};

export default Stock;
