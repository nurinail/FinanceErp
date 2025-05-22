import React from "react";
import { useForm, Controller } from "react-hook-form";
import classNames from "classnames";
import style from "./hr.module.scss";
import { useDispatch } from "react-redux";
import type { EmployeeType } from "../../../types/types";

type Inputs = {
  fullname: string;
  email: string;
  phonenumber: string;
  position: string;
  salary: number;
  date: string;
  department: string;
  workplacetype: string;
};

const HR = () => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit = (data:any) => {
    console.log("Submitted:", data);
    reset(); 
  };

  return (
    <div className={style.hrComp}>
      <h2 className={style.hrComp_title}>İnsan Resursları</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={style.hrComp_form}>
        <div className={style.hrComp_form_input}>
          <label htmlFor="fullnameInput" className={style.hrComp_form_input_label}>Ad və Soyad</label>
          <Controller
            name="fullname"
            control={control}
            rules={{ required: "Ad Soyad tələb olunur" }}
            render={({ field:{onChange,value} }) => (
              <input
                onChange={onChange}
                value={value ?? ""}
                id="fullnameInput"
                type="text"
                className={style.hrComp_form_input_item}
              />
            )}
          />
        </div>

        <div className={style.hrComp_form_input}>
          <label htmlFor="emailInput" className={style.hrComp_form_input_label}>Email</label>
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email tələb olunur" }}
            render={({ field:{onChange} }) => (
              <input
                onChange={onChange}
                id="emailInput"
                type="email"
                className={style.hrComp_form_input_item}
              />
            )}
          />
        </div>

        <div className={style.hrComp_form_input}>
          <label htmlFor="phoneNumberInput" className={style.hrComp_form_input_label}>Telefon Nömrəsi</label>
          <Controller
            name="phonenumber"
            control={control}
            render={({ field:{onChange} }) => (
              <input
                onChange={onChange}
                id="phoneNumberInput"
                type="text"
                className={style.hrComp_form_input_item}
              />
            )}
          />
        </div>

        <div className={style.hrComp_form_input}>
          <label htmlFor="positionInput" className={style.hrComp_form_input_label}>Vəzifə</label>
          <Controller
            name="position"
            control={control}
            render={({ field:{onChange} }) => (
              <input
                onChange={onChange}
                id="positionInput"
                type="text"
                className={style.hrComp_form_input_item}
              />
            )}
          />
        </div>

        <div className={style.hrComp_form_input}>
          <label htmlFor="salaryInput" className={style.hrComp_form_input_label}>Maaş</label>
          <Controller
            name="salary"
            control={control}
            render={({ field:{onChange} }) => (
              <input
                onChange={onChange}
                id="salaryInput"
                type="number"
                className={style.hrComp_form_input_item}
              />
            )}
          />
        </div>

        <div className={style.hrComp_form_input}>
          <label htmlFor="dateInput" className={style.hrComp_form_input_label}>Başlama Tarixi</label>
          <Controller
            name="date"
            control={control}
            render={({ field:{onChange} }) => (
              <input
                onChange={onChange}
                id="dateInput"
                type="date"
                className={style.hrComp_form_input_item}
              />
            )}
          />
        </div>

        {/* <div className={style.hrComp_form_input}>
          <label htmlFor="department" className={style.hrComp_form_input_label}>Departament</label>
          <Controller
            name="department"
            control={control}
            render={({ field:{onChange} }) => (
              <select onChange={onchange} id="department" className={style.hrComp_form_input_item}>
                <option value="">Departament Seç</option>
                <option value="hr">İnsan Resursları (HR)</option>
                <option value="finance">Maliyyə</option>
                <option value="accounting">Mühasibat</option>
                <option value="marketing">Marketinq</option>
                <option value="sales">Satış</option>
                <option value="customer-service">Müştəri Xidmətləri</option>
                <option value="it">İnformasiya Texnologiyaları (IT)</option>
                <option value="logistics">Logistika</option>
                <option value="legal">Hüquq</option>
                <option value="r&d">Tədqiqat və İnkişaf (R&D)</option>
                <option value="pr">İctimai Əlaqələr (PR)</option>
                <option value="administration">İdarəetmə</option>
                <option value="qa">Daxili Nəzarət</option>
              </select>
            )}
          />
        </div> */}

        {/* <div className={style.hrComp_form_input}>
          <label htmlFor="workplaceType" className={style.hrComp_form_input_label}>İş yerinin növü</label>
          <Controller
            name="workplacetype"
            control={control}
            render={({ field }) => (
              <select {...field} id="workplaceType" className={style.hrComp_form_input_item}>
                <option value="">İş yerinin növü seç</option>
                <option value="office">Ofis</option>
                <option value="remote">Uzaqdan</option>
                <option value="hybrid">Hibrid</option>
              </select>
            )}
          />
        </div> */}

        <button type="submit" className={style.hrComp_form_submit}>Əlavə Et</button>
      </form>

      {/* Cədvəl qismində dəyişikliklər etməyə ehtiyac var */}
    </div>
  );
};

export default HR;
