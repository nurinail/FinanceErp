import React, { useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import style from "./newCustomer.module.scss";
import { MdOutlineFileUpload } from "react-icons/md";
import { useDispatch } from "react-redux";
import type { CustomerType } from "../../../types/types";
import { addCustomer } from "../../../store/slices/orderSlice";

type ModalType = {
  setIsModalCustomer: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewCustomer = ({ setIsModalCustomer }: ModalType) => {
  const dispatch = useDispatch();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [selectedFileName, setSelectedFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFileName(file.name);
    }
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CustomerType>();
  const onSubmit = (data: Omit<CustomerType, "id">) => {
    const customerId = Date.now();
    const newCustomer = {
      ...data,
      id: customerId,
    };
    reset();
    setIsSuccess(true);
    dispatch(addCustomer(newCustomer));
    setTimeout(() => {
      setIsSuccess(false);
      setIsModalCustomer((prev) => !prev);
    }, 1500);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.newCustomer_form}>
      <h2 className={style.newCustomer_form_title}>Yeni Müştəri</h2>
      <div className={style.newCustomer_form_item}>
        <label htmlFor="name" className={style.newCustomer_form_item_label}>
          Müştəri Adı
        </label>
        <input
          type="text"
          className={style.newCustomer_form_item_input}
          id="name"
          {...register("name", { required: {
            value:true,
            message:"Müştəri adını daxil et!"
          } })}
        />
        <p style={{color:"red"}}>{errors.name?.message}</p>
      </div>
      <div className={style.newCustomer_form_item}>
        <label htmlFor="contract" className={style.newCustomer_form_item_label}>
          Müqavilə tarixi
        </label>
        <input
          type="date"
          className={style.newCustomer_form_item_input}
          id="contract"
          {...register("contract", { required: {
            value:true,
            message:"Müqavilə tarixi seçin!"
          } })}
        />
        <p style={{color:"red"}}>{errors.contract?.message}</p>
      </div>
      <div className={style.newCustomer_form_item}>
        <label
          htmlFor="document"
          className={classNames(
            style.newCustomer_form_item_label,
            style.newCustomer_form_item_label_file
          )}
        >
          <p className={style.newCustomer_form_item_label_file_title}>
            Müqavilə Sənədi
          </p>
          <div className={style.newCustomer_form_item_label_file_parent}>
            <MdOutlineFileUpload
              className={style.newCustomer_form_item_label_file_parent_icon}
            />
            <span
              className={style.newCustomer_form_item_label_file_parent_text}
            >
              {selectedFileName || "Sənədi Əlavə Edin"}
            </span>
          </div>
        </label>

        <input
          type="file"
          id="document"
          className={classNames(
            style.newCustomer_form_item_input,
            style.newCustomer_form_item_input_file
          )}
          {...register("document")}
          onChange={handleFileChange}
        />
      </div>

      <button type="submit" className={style.newCustomer_form_button}>
        Əlavə Et
      </button>
      {isSuccess ? (
        <p className={style.newCustomer_form_message}>Müştəri əlavə edildi</p>
      ) : null}
    </form>
  );
};

export default NewCustomer;
