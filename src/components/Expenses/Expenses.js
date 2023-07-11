import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.js";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
  const [filterYear, setFilterYear] = useState("");
  //let filterInfoText = "2021,2022 & 2023 ";

  const sub_expenses = props.items.filter((list) => {
    if (filterYear === "" || filterYear === "0000") return true;
    else return list.date.getFullYear().toString() === filterYear;
  });
  

  

  // if (filterYear === "2021") filterInfoText = "2020,2022 & 2023";
  // else if (filterYear === "2022") filterInfoText = "2020,2021 & 2023";
  // else if (filterYear === "2023") filterInfoText = "2020,2021 & 2022";
  // else filterInfoText = "2021,2022 & 2023";

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
        <ExpensesList sub_expenses={ sub_expenses} />
        {/*<XcpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <XcpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <XcpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <XcpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />*/}
      </Card>
    </div>
  );
}
export default Expenses;
