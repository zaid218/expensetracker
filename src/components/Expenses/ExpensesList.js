import XcpenseItem from "./expenseItem"; //we can give here any name irrespective of the name of the function or the name of the file ...just keep in mind that component's nane should start with capital letter ..otherwise react will treat it as a tag
import './ExpensesList.css'
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
        )
)}
    </ul>
);
}
export default ExpensesList;