import { useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import style from "./hr.module.scss";
import { useDispatch, useSelector } from "react-redux";
import HrTable from "./HrTable";
import type { HistoryType, WorkersType } from "../../../types/types";
import { addWorker } from "../../../store/slices/workerSlice";
import { addHistory } from "../../../store/slices/history";
import type { RootState } from "../../../store/store";

const HR = () => {
  const dispatch = useDispatch();
  const workersData = useSelector((state: RootState) => state.worker.workers);
  const [showWorkers, setShowWorkers] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WorkersType>({
    mode: "onSubmit",
    defaultValues: {
      department: "",
      place: "",
    },
  });

  const onSubmit = (data: Omit<WorkersType, "id" | "desc" | "">) => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = currentDate.getFullYear();

    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");

    const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}`;
    const workerId = Date.now();
    const newWorker: WorkersType = {
      ...data,
      name:data.name.trim(),
      email:data.email.trim(),
      number: Number(data.number),
      salary: Number(data.salary),
      id: workerId,
      desc: "Yeni İşçi Əlavə edildi",
      date:formattedDate,
    };
    const historyWorkerItem: HistoryType = {
      id: workerId,
      desc: "",
      transaction: "İşçi qəbulu",
      date: formattedDate,
      total: Number(data.salary),
      name: data.name.trim(),
      method: "",
    };
    dispatch(addWorker(newWorker));
    dispatch(addHistory(historyWorkerItem));
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
              className={style.hrComp_form_input_label}>
              Ad və Soyad
            </label>
            <input
              id="fullnameInput"
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: "Xananı tam doldurun!",
                },
                minLength: {
                  value: 6,
                  message: "Ad və Soyad 6 simvoldan az ola bilməz!",
                },
              })}
              className={style.hrComp_form_input_item}
            />
            <p style={{ color: "red" }}>{errors.name?.message}</p>
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
                  message: "Xananı tam doldurun!",
                },
              })}
              className={style.hrComp_form_input_item}
            />
            <p style={{ color: "red" }}>{errors.email?.message}</p>
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
                  message: "Xananı tam doldurun!",
                },
                minLength: {
                  value: 10,
                  message: "Nömrəni düzgün daxil et!",
                },
              })}
              className={style.hrComp_form_input_item}
            />
            <p style={{ color: "red" }}>{errors.number?.message}</p>
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
                  message: "Xananı tam doldurun!",
                },
                minLength: {
                  value: 3,
                  message: "Vəzifə adı 3 simvoldan az ola bilməz!",
                },
              })}
              className={style.hrComp_form_input_item}
            />
            <p style={{ color: "red" }}>{errors.position?.message}</p>
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
                  message: "Xananı tam doldurun!",
                },
                min: {
                  value: 400,
                  message:
                    "Minimum Əmək Haqqına görə, ƏməkHaqqı 400 manatdan az ola bilməz!",
                },
              })}
              className={style.hrComp_form_input_item}
            />
            <p style={{ color: "red" }}>{errors.salary?.message}</p>
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
                  message: "Tarix seçin!",
                },
              })}
              className={style.hrComp_form_input_item}
            />
            <p style={{ color: "red" }}>{errors.date?.message}</p>
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
                  message: "Departamenti seçin!",
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
            <p style={{ color: "red" }}>{errors.department?.message}</p>
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
                  message: "İşləmə yerini seç!",
                },
              })}
              className={style.hrComp_form_input_item}
            >
              <option value="">---</option>
              <option value="Ofis">Ofis</option>
              <option value="Uzaqdan">Uzaqdan</option>
              <option value="Hibrid">Hibrid</option>
            </select>
            <p style={{ color: "red" }}>{errors.place?.message}</p>
          </div>

          <button type="submit" className={style.hrComp_form_submit}>
            Əlavə Et
          </button>
          <button
            onClick={() => setShowWorkers((prev) => !prev)}
            type="button"
            className={style.hrComp_form_submit}
          >
            Siyahını {showWorkers ? "gizlət" : "göstər"}
          </button>
        </form>
      </div>
      <div>
        {showWorkers ? (
          <div className={style.hrComp_table}>
            <ul
              className={classNames(
                style.hrComp_table_wrapper,
                style.hrComp_table_head
              )}
            >
              <li className={style.hrComp_table_wrapper_item}>№</li>
              <li className={style.hrComp_table_wrapper_item}>Ad Soyad</li>
              <li className={style.hrComp_table_wrapper_item}>Email</li>
              <li className={style.hrComp_table_wrapper_item}>
                Telefon Nömrəsi
              </li>
              <li className={style.hrComp_table_wrapper_item}>Vəzifə</li>
              <li className={style.hrComp_table_wrapper_item}>Maaş</li>
              <li className={style.hrComp_table_wrapper_item}>
                Başlama Tarixi
              </li>
              <li className={style.hrComp_table_wrapper_item}>Departament</li>
              <li className={style.hrComp_table_wrapper_item}>Yeri</li>
              <li className={style.hrComp_table_wrapper_item}>Əməliyyat</li>
            </ul>
            {workersData.map((item: WorkersType, index: number) => (
              <HrTable key={item.id} index={index + 1} worker={item} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HR;
