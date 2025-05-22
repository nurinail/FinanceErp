import React from "react";
import type { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import style from "./hr.module.scss";
import { removeWorker } from "../../../store/slices/workerSlice";

const HrTable = () => {
    const dispatch=useDispatch()
  const employeeData=useSelector((state:RootState)=>state.employee.workers)

  return <>
    <div className={style.hrComp_table}>
        <h2 className={style.hrComp_table_title}>İşçilər</h2>
      <table className={style.hrComp_table_wrapper}>
        <thead>
            <tr className={style.hrComp_table_wrapper_thead_row}>
                <th>№</th>
                <th>Ad Soyad</th>
                <th>Email</th>
                <th>Telefon Nömrəsi</th>
                <th>Vəzifə</th>
                <th>Maaş</th>
                <th>Başlama Tarixi</th>
                <th>Departament</th>
                <th>İşləmə Yeri</th>
                <th>Əməliyyat</th>
            </tr>
        </thead>
        <tbody>
            {employeeData.map((data,index)=>(
              <tr key={data.id}>
                <td>{index+1}</td>
                <td>{data.fullname}</td>
                <td>{data.email}</td>
                <td>{data.phoneNumber}</td>
                <td>{data.position}</td>
                <td>{data.salary} AZN</td>
                <td>{data.date}</td>
                <td>{data.department}</td>
                <td>{data.workplace}</td>
                <td className={style.hrComp_table_wrapper_buttons}>
                    <button onClick={()=>dispatch(removeWorker(data.id))} className={classNames(style.hrComp_table_wrapper_buttons_item,style.deleteBtn)}>Sil</button>
                </td>
            </tr>
            ))}
            
        </tbody>
        
      </table>

      </div></>;
};

export default HrTable;
