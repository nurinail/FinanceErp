import { useState } from "react";
import classNames from "classnames";
import style from "./order.module.scss";
import NewCustomer from "./../newCustomer/NewCustomer";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { useForm } from "react-hook-form";
import type { HistoryType, OrderType, PaymentMetodType } from "../../../types/types";
import { addOrder } from "../../../store/slices/orderSlice";
import { addHistory } from "../../../store/slices/history";
import OrderTable from "../OrderTable/OrderTable";
import { handleCalculate } from "../../../store/slices/finance";

const Order = () => {
  const dispatch=useDispatch();
  const [isModalCustomer,setIsModalCustomer]=useState<boolean>(false);
  const customers=useSelector((state:RootState)=>state.order.customers);
  const inventors=useSelector((state:RootState)=>state.inventory.inventory)
  const cashAmount=useSelector((state:RootState)=>state.finance.cashAmount);
const bankAmount=useSelector((state:RootState)=>state.finance.bankAmount);
const debitorAmount=useSelector((state:RootState)=>state.finance.debitorAmount);
const liabilityAmount=useSelector((state:RootState)=>state.finance.liabilityAmount);

  const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<OrderType>({
      mode:"onSubmit",
      defaultValues:{
        customer:"",
        product:"",
        method:"",
      }
    });
    const onSubmit=(data:Omit<OrderType,"id"|"ordernumber"|"desc"|"total">)=>{
      const orderId=Date.now();
      const orderNumber=Number(orderId.toString().slice(-6));
      const orderItem:OrderType={
        ...data,
        id:orderId,
        ordernumber:orderNumber,
        desc:"Məhsul Satışı",
        count:Number(data.count),
        prices:Number(data.prices),
        total:Number(data.count)*Number(data.prices),
      };
      const historyOrder:HistoryType={
        id:orderId,
        desc:`${data.product} satışı`,
        date:data.date,
        name:data.product,
        transaction:"gəlir",
        method:data.method,
        total:Number(data.count)*Number(data.prices),

      };
       const itemForFinance:PaymentMetodType={
          amount:Number(data.count)*Number(data.prices),
          method:data.method
      
        }
        reset();
      dispatch(addOrder(orderItem));
      dispatch(addHistory(historyOrder));
      dispatch(handleCalculate(itemForFinance));
      console.log(bankAmount,cashAmount,debitorAmount,liabilityAmount)

    }

  return (
    <div className={style.orderComp}>
      {isModalCustomer?<NewCustomer  setIsModalCustomer={setIsModalCustomer}/>:null}
      <form onSubmit={handleSubmit(onSubmit)} className={style.orderComp_form}>
        <h2 className={style.orderComp_title}>Yeni Sifariş</h2>
        <div
          className={classNames(
            style.orderComp_form_item,
            style.orderComp_form_item_customer
          )}
        >
         
        </div>
         <div className={style.orderComp_form_item}>
          <label className={style.orderComp_form_item_label} htmlFor="">
            Müştəri 
             <button
            className={style.orderComp_form_item_customer_button}
            type="button"
            onClick={()=>setIsModalCustomer(prev=>!prev)}
          >
            * Yeni Müştəri
          </button>
          </label>
          <select
            className={style.orderComp_form_item_select}
            id="customer"
             {...register("customer", {
                required: {
                  value: true,
                  message: "Müştəri adı daxil edin!",
                },
              })}
          >
            <option value="" disabled>---</option>
            {customers&&customers.map((item)=>(
              <option key={item.id} value={item.name}>{item.name}</option>
            ))}
          </select>
          <p style={{color:"red"}}>{errors.customer?.message}</p>
        </div>
         <div className={style.orderComp_form_item}>
          <label className={style.orderComp_form_item_label} htmlFor="method">
            Məhsul
          </label>
          <select
            className={style.orderComp_form_item_select}
            id="product"
             {...register("product", {
                required: {
                  value: true,
                  message: "Məhsul adı daxil edin!",
                },
              })}
          >
            <option value="" disabled>---</option>
            {
              inventors&&inventors.map((item)=>(
                <option key={item.id} value={item.name}>{item.name}</option>
              ))
            }
          </select>
          <p style={{color:"red"}}>{errors.product?.message}</p>
        </div>
        <div className={style.orderComp_form_item}>
          <label className={style.orderComp_form_item_label} htmlFor="">
            Miqdar
          </label>
          <input className={style.orderComp_form_item_input_date} type="number"
           {...register("count", {
                required: {
                  value: true,
                  message: "Miqdar daxil edin!",
                },min:{
                  value:1,
                  message:"Ən azı 1 ədəd olmalıdır!"
                }
              })}
          />
          <p style={{color:"red"}}>{errors.count?.message}</p>
        </div>
        <div className={style.orderComp_form_item}>
          <label className={style.orderComp_form_item_label} htmlFor="">
            Qiymət
          </label>
          <input className={style.orderComp_form_item_input_date} type="number"
          {...register("prices", {
                required: {
                  value: true,
                  message: "Qiymət daxil edin!",
                },min:{
                  value:0.01,
                  message:"Qiymət 0.01 AZN-dən az ola bilməz!"
                }
              })}
          />
          <p style={{color:"red"}}>{errors.prices?.message}</p>
        </div>
        <div className={style.orderComp_form_item}>
          <label className={style.orderComp_form_item_label} htmlFor="">
            Sifariş Tarixi
          </label>
          <input className={style.orderComp_form_item_input_date} type="date" 
          {...register("date", {
                required: {
                  value: true,
                  message: "Tarix daxil edin!",
                }
              })}
          />
          <p style={{color:"red"}}>{errors.date?.message}</p>
        </div>
        
        <div className={style.orderComp_form_item}>
          <label className={style.orderComp_form_item_label} htmlFor="method">
            Ödəniş Metodu
          </label>
          <select
            className={style.orderComp_form_item_select}
            id="method"
            {...register("method", {
                required: {
                  value: true,
                  message: "Mədaxil formasını seçin!",
                }
              })}
          >
            <option value="" disabled>---</option>
            <option value="cash-in">Nağd Mədaxil</option>
            <option value="bank-in">Bank Hesabına Mədaxil</option>
            <option value="debitor-in">Nisyə Satış</option>
          </select>
          <p style={{color:"red"}}>{errors.method?.message}</p>
        </div>
        <div className={style.orderComp_form_item}>
          <label className={style.orderComp_form_item_label} htmlFor="notes">
            Qeydlər
          </label>
          <textarea
            className={style.orderComp_form_item_notes}
            id="note"
            {...register("note",{
              required:{
                value:true,
                message:"Qeyd Yazın!"
              }
            })}

          ></textarea>
          <p style={{color:"red"}}>{errors.note?.message}</p>
        </div>
        <button className={style.addButton} type="submit">Əlavə Et</button>
      </form>
      <OrderTable/>
    </div>
  );
};

export default Order;
