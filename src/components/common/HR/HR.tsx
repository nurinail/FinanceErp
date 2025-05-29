import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import classNames from "classnames";
import style from "./hr.module.scss";
import { useDispatch, useSelector } from "react-redux";
import HrTable from "./HrTable";
import type { WorkersType } from "../../../types/types";
import { addWorker } from "../../../store/slices/workerSlice";

const HR = () => {
  const dispatch=useDispatch();
 const [showWorkers,setShowWorkers]=useState<boolean>(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WorkersType>({
    mode:"onSubmit",
    defaultValues:{
      department:"",
      place:"",
    }
  });
  
const onSubmit=(data:Omit<WorkersType,"id" | "desc"|"">)=>{
  console.log(data);
  const workerId=Date.now();
  const newWorker:WorkersType={
    ...data,
    number:Number(data.number),
    salary:Number(data.salary),
    id:workerId,
    desc:"Yeni İşçi Əlavə edildi"
  }
  dispatch(addWorker(newWorker))

}
  return (
    <div className={style.container}>
      <div className={style.hrComp}>
        <h2 className={style.hrComp_title}>İnsan Resursları</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={style.hrComp_form}>
          <div className={style.hrComp_form_input}>
            <label
              htmlFor="fullnameInput"
              className={style.hrComp_form_input_label}
            >
              Ad və Soyad
            </label>

            <input
              id="fullnameInput"
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: "Xananı tam doldurun",
                },
              })}
              className={style.hrComp_form_input_item}
            />
            <p></p>
          </div>

          <div className={style.hrComp_form_input}>
            <label
              htmlFor="emailInput"
              className={style.hrComp_form_input_label}
            >
              Email
            </label>

            <input
              id="emailInput"
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Xananı tam doldurun",
                },
              })}
              className={style.hrComp_form_input_item}
            />
          </div>

          <div className={style.hrComp_form_input}>
            <label
              htmlFor="phoneNumberInput"
              className={style.hrComp_form_input_label}
            >
              Telefon Nömrəsi
            </label>
            <input
              id="phoneNumberInput"
              type="text"
              {...register("number", {
                required: {
                  value: true,
                  message: "Xananı tam doldurun",
                },
              })}
              className={style.hrComp_form_input_item}
            />
          </div>

          <div className={style.hrComp_form_input}>
            <label
              htmlFor="positionInput"
              className={style.hrComp_form_input_label}
            >
              Vəzifə
            </label>
            <input
              id="positionInput"
              type="text"
              {...register("position", {
                required: {
                  value: true,
                  message: "Xananı tam doldurun",
                },
              })}
              className={style.hrComp_form_input_item}
            />
          </div>

          <div className={style.hrComp_form_input}>
            <label
              htmlFor="salaryInput"
              className={style.hrComp_form_input_label}
            >
              Maaş
            </label>
            <input
              id="salaryInput"
              type="number"
              {...register("salary", {
                required: {
                  value: true,
                  message: "Xananı tam doldurun",
                },
              })}
              className={style.hrComp_form_input_item}
            />
          </div>

          <div className={style.hrComp_form_input}>
            <label
              htmlFor="dateInput"
              className={style.hrComp_form_input_label}
            >
              Başlama Tarixi
            </label>
            <input
              id="dateInput"
              type="date"
              {...register("date", {
                required: {
                  value: true,
                  message: "Xananı tam doldurun",
                },
              })}
              className={style.hrComp_form_input_item}
            />
          </div>

          <div className={style.hrComp_form_input}>
            <label
              htmlFor="department"
              className={style.hrComp_form_input_label}
            >
              Departament
            </label>
            <select
              id="department"
              {...register("department", {
                required: {
                  value: true,
                  message: "Xananı tam doldurun",
                },
              })}
              className={style.hrComp_form_input_item}
            >
              <option value="" disabled>
                ---
              </option>
              <option value="İnsan Resursları">İnsan Resursları (HR)</option>
              <option value="Maliyyə">Maliyyə</option>
              <option value="Mühasibat">Mühasibat</option>
              <option value="Marketinq">Marketinq</option>
              <option value="Satış">Satış</option>
              <option value="Müştəri Xidmətləri">Müştəri Xidmətləri</option>
              <option value="İnformasiya Texnologiyaları">
                İnformasiya Texnologiyaları (IT)
              </option>
              <option value="Logistika">Logistika</option>
              <option value="Hüquq">Hüquq</option>
              <option value="Tədqiqat və İnkişaf&d">
                Tədqiqat və İnkişaf (R&D)
              </option>
              <option value="İctimai Əlaqələr">İctimai Əlaqələr (PR)</option>
              <option value="İdarəetmə">İdarəetmə</option>
              <option value="Daxili Nəzarət">Daxili Nəzarət</option>
            </select>
          </div>

          <div className={style.hrComp_form_input}>
            <label
              htmlFor="workplaceType"
              className={style.hrComp_form_input_label}
            >
              İş yerinin növü
            </label>
            <select
              id="workplaceType"
              {...register("place", {
                required: {
                  value: true,
                  message: "Xananı tam doldurun",
                },
              })}
              className={style.hrComp_form_input_item}
            >
              <option value="">
                ---
              </option>
              <option value="Ofis">Ofis</option>
              <option value="Uzaqdan">Uzaqdan</option>
              <option value="Hibrid">Hibrid</option>
            </select>
          </div>

          <button type="submit" className={style.hrComp_form_submit}>
            Əlavə Et
          </button>
          <button onClick={()=>setShowWorkers(prev=>!prev)} type="button" className={style.hrComp_form_submit}>
           Siyahını göstər
          </button>
          
        </form>
      </div>
      {showWorkers?<HrTable />:null}
       
    </div>
  );
};

export default HR;
