import React, { useState } from "react";
import classNames from "classnames";
import style from "./hr.module.scss";
import type { WorkersType } from "../../../types/types";
import { useDispatch } from "react-redux";
import { changeWorker, deleteWorker } from "../../../store/slices/workerSlice";

type WorkerTableProps = {
  worker: WorkersType;
  index: number;
};
const HrTable = ({ worker, index }: WorkerTableProps) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<WorkersType>(worker);
  const handleSave = () => {
    setIsEdit((prev) => !prev);
    dispatch(changeWorker(editValue));
  };
  return (
    <ul className={style.hrComp_table_wrapper}>
      <li className={style.hrComp_table_wrapper_item}>
        <p className={style.hrComp_table_wrapper_item_text}>{index}</p>
      </li>
      {
        <li className={style.hrComp_table_wrapper_item}>
          {isEdit ? (
            <input
              className={style.hrComp_table_wrapper_item_input}
              type="text"
              value={editValue.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEditValue({ ...editValue, name: e.target.value })
              }
            />
          ) : (
            <p className={style.hrComp_table_wrapper_item_text}>
              {worker.name}
            </p>
          )}
        </li>
      }
      {
        <li className={style.hrComp_table_wrapper_item}>
          {isEdit ? (
            <input
              className={style.hrComp_table_wrapper_item_input}
              type="text"
              value={editValue.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEditValue({ ...editValue, email: e.target.value })
              }
            />
          ) : (
            <p className={style.hrComp_table_wrapper_item_text}>
              {worker.email}
            </p>
          )}
        </li>
      }
      {
        <li className={style.hrComp_table_wrapper_item}>
          {isEdit ? (
            <input
              className={style.hrComp_table_wrapper_item_input}
              value={editValue.number}
              type="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEditValue({ ...editValue, number: Number(e.target.value) })
              }
            />
          ) : (
            <p className={style.hrComp_table_wrapper_item_text}>
              {worker.number}
            </p>
          )}
        </li>
      }
      {
        <li className={style.hrComp_table_wrapper_item}>
          {isEdit ? (
            <input
              className={style.hrComp_table_wrapper_item_input}
              value={editValue.position}
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEditValue({ ...editValue, position: e.target.value })
              }
            />
          ) : (
            <p className={style.hrComp_table_wrapper_item_text}>
              {worker.position}
            </p>
          )}
        </li>
      }
      {
        <li className={style.hrComp_table_wrapper_item}>
          {isEdit ? (
            <input
              className={style.hrComp_table_wrapper_item_input}
              type="number"
              value={editValue.salary}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEditValue({ ...editValue, salary: Number(e.target.value) })
              }
            />
          ) : (
            <p className={style.hrComp_table_wrapper_item_text}>
              {worker.salary}
            </p>
          )}
        </li>
      }
      {
        <li className={style.hrComp_table_wrapper_item}>
          {isEdit ? (
            <input
              className={style.hrComp_table_wrapper_item_input}
              value={editValue.date}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEditValue({ ...editValue, date: e.target.value })
              }
            />
          ) : (
            <p className={style.hrComp_table_wrapper_item_text}>
              {worker.date}
            </p>
          )}
        </li>
      }
      {
        <li className={style.hrComp_table_wrapper_item}>
          {isEdit ? (
            <input
              className={style.hrComp_table_wrapper_item_input}
              value={editValue.department}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEditValue({ ...editValue, department: e.target.value })
              }
            />
          ) : (
            <p className={style.hrComp_table_wrapper_item_text}>
              {worker.department}
            </p>
          )}
        </li>
      }
      {
        <li className={style.hrComp_table_wrapper_item}>
          {isEdit ? (
            <input
              className={style.hrComp_table_wrapper_item_input}
              value={editValue.place}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEditValue({ ...editValue, place: e.target.value })
              }
            />
          ) : (
            <p className={style.hrComp_table_wrapper_item_text}>
              {worker.place}
            </p>
          )}
        </li>
      }
      <li
        className={classNames(
          style.hrComp_table_wrapper_item,
          style.hrComp_table_wrapper_item_buttons
        )}
      >
        <button
          onClick={() => dispatch(deleteWorker(worker.id))}
          className={style.hrComp_table_wrapper_item_buttons_item}
        >
          Sil
        </button>
        {isEdit ? (
          <button
            type="button"
            onClick={handleSave}
            className={style.hrComp_table_wrapper_item_buttons_item}
          >
            Saxla
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setIsEdit((prev) => !prev)}
            className={style.hrComp_table_wrapper_item_buttons_item}
          >
            Dəyiş
          </button>
        )}
      </li>
    </ul>
  );
};

export default HrTable;
