import React from "react";
import { useForm, Controller } from "react-hook-form";
import classNames from "classnames";
import style from "./hr.module.scss";
import { useDispatch, useSelector } from "react-redux";
import type { EmployeeType } from "../../../types/types";
import {
  addWorker,
  handleIsWorkerTable,
  removeWorker,
} from "../../../store/slices/workerSlice";
import type { RootState } from "../../../store/store";
import HrTable from "./HrTable";

const HR = () => {
  const dispatch = useDispatch();
  const employeeData = useSelector(
    (state: RootState) => state.employee.workers
  );
  const isWorkerTable = useSelector(
    (state: RootState) => state.employee.isWorkerTable
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmployeeType>({
    defaultValues: {
      fullname: "",
      email: "",
      phoneNumber: null,
      position: "",
      salary: null,
      date: "",
      department: "",
    },
  });
  const onSubmit = (data: EmployeeType) => {
    const newEmployee: EmployeeType = {
      ...data,
      id: Date.now(),
    };
    dispatch(addWorker(newEmployee));
    console.log(employeeData);
    reset();
  };

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
              {...register("fullname", {
                required: {
                  value: true,
                  message: "Xananı tam doldurun",
                },
              })}
              className={style.hrComp_form_input_item}
            />
            <p>{errors.fullname?.message}</p>
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
              {...register("phoneNumber", {
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
              {...register("workplace", {
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
          <button
            onClick={() => dispatch(handleIsWorkerTable())}
            className={style.hrComp_form_submit}
          >
            {isWorkerTable
              ? "İşçi Siyahısını gizlət"
              : "İşçi Siyahısını göstər"}
          </button>
        </form>
      </div>
      {isWorkerTable && <HrTable />}
    </div>
  );
};

export default HR;
