import React from "react";
import XcpenseItem from "./expenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.sub_expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.sub_expenses.map((expens) => (
        <XcpenseItem
          key={expens.id}
          title={expens.title}
          amount={expens.amount}
          date={expens.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
