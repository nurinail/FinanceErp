import style from "./history.module.scss";
import balance from "../../../assets/image/balance.svg";
import saving from "../../../assets/image/saving.svg";
import income from "../../../assets/image/income.svg";
import expenses from "../../../assets/image/expenses.svg";
import HistoryTable from "./HistoryTable";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
const History = () => {

  const cashAmount=useSelector((state:RootState)=>state.finance.cashAmount);
const bankAmount=useSelector((state:RootState)=>state.finance.bankAmount);
const debitorAmount=useSelector((state:RootState)=>state.finance.debitorAmount);
const incomeAmount=useSelector((state:RootState)=>state.finance.income);
const expensesAmount=useSelector((state:RootState)=>state.finance.expenses);
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
              AZN {cashAmount+bankAmount}
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
              Debitor
            </span>
            <h2 className={style.historyComp_head_item_text_amount}>
              AZN {debitorAmount}
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
              AZN {incomeAmount}
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
              AZN {expensesAmount}
            </h2>
          </div>
        </div>
      </div>
      <HistoryTable/>
    </div>
  );
};

export default History;
