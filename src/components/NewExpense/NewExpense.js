import React,{useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
       // console.log(expenseData)
        setIsEditing(false)
        props.onAddExpense(expenseData)
    }
    const startEditingHandler = () => {
        setIsEditing(true)
    }
    const stopEditingHandler = () => {
        setIsEditing(false)
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={ stopEditingHandler} />}{/*the value of this props is a function which will eventually triggered when something happens  inside this component,inthis case when user submits the form ..In React, data can be passed from child to parent components through the use of custom event props. These props enable the transfer of functions from parent components to child components, allowing for effective communication and data exchange. To illustrate this concept, consider an example involving an expense form component. Within this component, a new prop called onSaveExpenseData is introduced to capture a function provided by the parent component. This function, known as saveExpenseDataHandler, receives and logs the expense data that is passed to it. Within the expense form component, the onSaveExpenseData prop is invoked in the submit handler, triggering the associated function in the parent component and logging the data accordingly. Furthermore, to pass the data up the component hierarchy, an addExpenseHandler function is implemented in the app component... This function can then be called from the new expense component, passing the expense data as an argument. Overall, this pattern facilitates seamless communication and data flow between components in React...n the expense form component, the onSaveExpenseData prop is expected to be received. By accessing props.onSaveExpenseData, the function passed as the prop can be executed within the submit handler. The execution is possible because the value of onSaveExpenseData is a function passed from the parent component (new expense component). The ability to execute this function in the expense form component is due to passing a pointer to it through the onSaveExpenseData prop.   */}{/*so this saveExpenseDataHandler function defined defined int the newexpense component ,which we will now  execute in ExpenseForm.we can execute although its not defined in the expenseform becoz we are passing a pointer  at it thourh onsaveexpensedata prop.*/}
        </div>
    );
}
export default NewExpense;