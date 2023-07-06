import "./ExpenseItem.css";
//props is just an object that contains prototype .we can give any name other than props
import Card from '../UI/Card'
import ExpenseDate from "./ExpenseDate";
function xpenseItem(props) {
     return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
export default xpenseItem;
//now all items are lost bcoz we cant use custom components as wrapper of other types of componenet