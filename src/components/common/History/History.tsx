import style from "./history.module.scss";
import balance from "../../../assets/image/balance.svg";
import saving from "../../../assets/image/saving.svg";
import income from "../../../assets/image/income.svg";
import expenses from "../../../assets/image/expenses.svg";
import HistoryTable from "./HistoryTable";
const History = () => {
  return (
    <div className={style.historyComp}>
      <div className={style.historyComp_head}>
        <div className={style.historyComp_head_item}>
          <img
            className={style.historyComp_head_item_icon}
            src={balance}
            alt="balance"
          />
          <div className={style.historyComp_head_item_text}>
            <span className={style.historyComp_head_item_text_title}>
              Balans
            </span>
            <h2 className={style.historyComp_head_item_text_amount}>
              $12345.00
            </h2>
          </div>
        </div>
        <div className={style.historyComp_head_item}>
          <img
            className={style.historyComp_head_item_icon}
            src={saving}
            alt="saving"
          />
          <div className={style.historyComp_head_item_text}>
            <span className={style.historyComp_head_item_text_title}>
              Saving
            </span>
            <h2 className={style.historyComp_head_item_text_amount}>
              $1223.00
            </h2>
          </div>
        </div>
        <div className={style.historyComp_head_item}>
          <img
            className={style.historyComp_head_item_icon}
            src={income}
            alt="income"
          />
          <div className={style.historyComp_head_item_text}>
            <span className={style.historyComp_head_item_text_title}>
              Gəlir
            </span>
            <h2 className={style.historyComp_head_item_text_amount}>
              $12985.00
            </h2>
          </div>
        </div>
        <div className={style.historyComp_head_item}>
          <img
            className={style.historyComp_head_item_icon}
            src={expenses}
            alt="expenses"
          />
          <div className={style.historyComp_head_item_text}>
            <span className={style.historyComp_head_item_text_title}>
              Xərclər
            </span>
            <h2 className={style.historyComp_head_item_text_amount}>
              $1245.00
            </h2>
          </div>
        </div>
      </div>
      <HistoryTable/>
    </div>
  );
};

export default History;
