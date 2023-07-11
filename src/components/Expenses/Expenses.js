import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.js";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filterYear, setFilterYear] = useState("");
  const sub_expenses = props.items.filter((list) => {
    if (filterYear === "" || filterYear === "0000") return true;
    else return list.date.getFullYear().toString() === filterYear;
  });
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={sub_expenses} />
        <ExpensesList sub_expenses={sub_expenses} />
      </Card>
    </div>
  );
}
export default Expenses;
