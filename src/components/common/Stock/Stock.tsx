import React, { useState } from "react";
import { useForm } from "react-hook-form";
import style from "./stock.module.scss";
import type { InventoryType } from "../../../types/types";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { addNeWInventory, handleUpdatedInventory } from "../../../store/slices/productSlice";

const Stock = () => {
  const [editingId, setEditingId] = useState<number | null>(null);
const [editedProduct, setEditedProduct] = useState<Pick<InventoryType, "total" |"count" | "prices">>({
  count: 0,
  prices: 0,
  total:0,
});

  const inventoryData = useSelector(
    (state: RootState) => state.product.inventory
  );
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InventoryType>();

  const onSubmit = (data: Partial<InventoryType>) => {
    const newInventor: InventoryType = {
      id: Date.now(),
      name: data.name!,
      date: data.date!,
      desc: "Mal Alışı",
      transaction: data.transaction!,
      count: Number(data.count!),
      prices: Number(data.prices!),
      category: data.category!,
      total: data.count! * data.prices!,
    };
    dispatch(addNeWInventory(newInventor));
    console.log(newInventor);
    console.log(inventoryData)
    reset();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setEditedProduct(prev => ({
    ...prev,
    [name]: Number(value)
  }));
};

  console.log(inventoryData);

  return (
    <div className={style.stockComp}>
      <h2 className={style.stockComp_title}>Anbar İdarəçiliyi</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={style.stockComp_form}>
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
            {...register("name", { required: true })}
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
            {...register("count", { required: true, min: 1 })}
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
            type="number"
            step="0.01"
            {...register("prices", { required: true, min: 0 })}
          />
        </div>
        <div className={style.stockComp_form_item}>
          <label
            className={style.stockComp_form_item_label}
            htmlFor="productPrice"
          >
            Tarix
          </label>
          <input
            className={style.stockComp_form_item_input}
            id="date"
            type="date"
            {...register("date", { required: true })}
          />
        </div>

        <div className={style.stockComp_form_item}>
          <label className={style.stockComp_form_item_label} htmlFor="category">
            Kateqoriya
          </label>
          <select
            className={style.stockComp_form_item_select}
            id="category"
            {...register("category", { required: true })}
          >
            <option value="">Seçin</option>
            <option value="Elektronik">Elektronik</option>
            <option value="Məişət">Məişət</option>
            <option value="Mobil">Mobil</option>
          </select>
        </div>
        <div className={style.stockComp_form_item}>
          <label className={style.stockComp_form_item_label} htmlFor="category">
            Əməliyyat
          </label>
          <select
            className={style.stockComp_form_item_select}
            id="transaction"
            {...register("transaction", { required: true })}
          >
            <option value="nağd">nağd məxaric</option>
            <option value="bank hesabı">bank hesabı</option>
            <option value="borc">borc</option>
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
       {inventoryData.map(data => (
  <ul className={style.stockComp_table_wrapper} key={data.id}>
    <li className={style.stockComp_table_wrapper_item}>
      <input type="text" value={data.name} readOnly />
    </li>
    <li className={style.stockComp_table_wrapper_item}>
      <input type="text" value={data.category} readOnly />
    </li>
    <li className={style.stockComp_table_wrapper_item}>
      <input
        type="number"
        name="count"
        value={editingId === data.id ? editedProduct.count : data.count}
        onChange={handleChange}
        readOnly={editingId !== data.id}
      />
    </li>
    <li className={style.stockComp_table_wrapper_item}>
      <input
        type="number"
        name="prices"
        value={editingId === data.id ? editedProduct.prices : data.prices}
        onChange={handleChange}
        readOnly={editingId !== data.id}/>
    </li>
    <li className={style.stockComp_table_wrapper_item}>
      <input
        type="text"
        value={
          editingId === data.id
            ? editedProduct.count * editedProduct.prices
            : data.count * data.prices
        }
        readOnly/>
    </li>
    <li className={style.stockComp_table_wrapper_item}>
      {editingId === data.id ? (
        <button
          className={style.changeBtn}
          onClick={() => {
            dispatch(handleUpdatedInventory({ id: data.id, editedProduct:{
              ...editedProduct,
    total: editedProduct.count * editedProduct.prices
            } }));
            setEditingId(null);}}>
          Saxla
        </button>
      ) : (
        <button
          className={style.changeBtn}
          onClick={() => {
            
            setEditingId(data.id);
            setEditedProduct({
              count: data.count,
              prices: data.prices,
              total:data.count*data.prices
            });
          }}>
          Dəyiş
        </button>
      )}
    </li>
  </ul>
))}

      </div>
    </div>
  );
};

export default Stock;
