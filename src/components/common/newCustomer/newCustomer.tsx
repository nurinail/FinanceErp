import React, { useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import style from "./newCustomer.module.scss";
import { MdOutlineFileUpload } from "react-icons/md";

const NewCustomer = () => {
    
  const {
    register,handleSubmit,reset,formState:{errors}
  }=useForm();
  
  return <form className={style.newCustomer_form}>
    <h2 className={style.newCustomer_form_title}>Yeni Müştəri</h2>
    <div className={style.newCustomer_form_item}>
      <label htmlFor="customername" className={style.newCustomer_form_item_label}>Müştəri Adı</label>
      <input type="text" 
      className={style.newCustomer_form_item_input}
      id="customername"
      {...register("customername",{required:true})}
      />
    </div>
    <div className={style.newCustomer_form_item}>
      <label htmlFor="contract" className={style.newCustomer_form_item_label}>Müqavilə tarixi</label>
      <input type="date" 
      className={style.newCustomer_form_item_input}
      id="contract"
      {...register("contract",{required:true})}
      />
    </div>
    <div className={style.newCustomer_form_item}>
      <label htmlFor="document" className={classNames(style.newCustomer_form_item_label,style.newCustomer_form_item_label_file)}>
        <p className={style.newCustomer_form_item_label_file_title}>Müqavilə Sənədi</p>
        <div className={style.newCustomer_form_item_label_file_parent}>
          <MdOutlineFileUpload className={style.newCustomer_form_item_label_file_parent_icon}/>
          <span className={style.newCustomer_form_item_label_file_parent_text}>Sənədi Əlavə Edin</span>
        </div>
      </label>
      <input type="file" 
      className={classNames(style.newCustomer_form_item_input,style.newCustomer_form_item_input_file)}
      id="document"
      {...register("document")}
      />
    </div>
    <button type="submit" className={style.newCustomer_form_button}>Əlavə Et</button>
    <p className={style.newCustomer_form_message}>Müştəri əlavə edildi</p>
  </form>;
};

export default NewCustomer;
