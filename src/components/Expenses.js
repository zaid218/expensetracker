import XcpenseItem from "./expenseItem"; //we can give here any name irrespective of the name of the function or the name of the file ...just keep in mind that component's nane should start with capital letter ..otherwise react will treat it as a tag
import "./Expenses.css";
function Expenses(props) {
  return (
    <div className='expenses'>
      <XcpenseItem
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
      />
    </div>
  );
}
export default Expenses;
