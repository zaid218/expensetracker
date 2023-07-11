import { useState } from "react";
import XcpenseItem from "./expenseItem"; //we can give here any name irrespective of the name of the function or the name of the file ...just keep in mind that component's nane should start with capital letter ..otherwise react will treat it as a tag
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.js";
import Card from "../UI/Card";
function Expenses(props) {
  const [filterYear, setFilterYear] = useState("");
  //let filterInfoText = "2021,2022 & 2023 ";

  let expensecontent = (
    <p style={{ marginLeft: "15px", color: "white" }}>NO Expenses found</p>
  );
  const sub_expenses = props.items.filter((list) => {
    if (filterYear === "" || filterYear === "0000") return true;
    else return list.date.getFullYear().toString() === filterYear;
  });
  if (sub_expenses.length > 0) {
    expensecontent=sub_expenses.map((expens) => (
      <XcpenseItem
        key={expens.id}
        title={expens.title}
        amount={expens.amount}
        date={expens.date}
      />
    ));
  }

  

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
        {expensecontent}
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
