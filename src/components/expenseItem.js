import "./ExpenseItem.css";
//props is just an object that contains prototype .we can give any name other than props
import ExpenseDate from "./ExpenseDate";
function xpenseItem(props) {
     return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
export default xpenseItem;
