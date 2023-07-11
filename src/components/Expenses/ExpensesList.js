import XcpenseItem from "./expenseItem"; //we can give here any name irrespective of the name of the function or the name of the file ...just keep in mind that component's nane should start with capital letter ..otherwise react will treat it as a tag
const ExpensesList = (props) => {
    let expensecontent = (
      <p style={{ marginLeft: "15px", color: "white" }}>NO Expenses found</p>
    );
    
    if (props.sub_expenses.length > 0) {
      expensecontent = props.sub_expenses.map((expens) => (
        <XcpenseItem
          key={expens.id}
          title={expens.title}
          amount={expens.amount}
          date={expens.date}
        />
      ));
    }
    return <>{expensecontent}</>;
}
export default ExpensesList;