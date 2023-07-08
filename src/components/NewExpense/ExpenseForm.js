import './ExpenseForm.css';
import React,{useState} from 'react'
const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState(''); {/*useState is not primarily for updating the component when using onChange on an input field. Instead, it is used to store the value in a separate variable that remains detached from the component's lifecycle. This ensures that the state persists and survives, independent of how often the component function executes. The main goal is to store the value in a variable that is not tied to the component's lifecycle, rather than focusing solely on updating the component.*/}
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState(""); {/* strings are consistently used as the initial values for variables stored in the useState function. This is because when capturing the value of an input field through the onChange event, the retrieved value will always be a string. Even if the input field is intended to store a number or date, the value will be obtained as a string. Therefore, to ensure consistency, all states are initialized with strings. This accounts for the fact that input values are naturally received as strings, regardless of their underlying data type. */}
    //other way of using states by grouping them all
    //the best approach is using multiple states ..but returing it as a function is also okk..but never use object method bcoz it sometimes fails 
    //const [userInput, setUserInput] = useState({ enteredTitle: '', enteredAmount: '', enteredDate: '' })
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        
        //setUserInput({
          //...userInput,
              //enteredTitle:event.target.value
        //  })

        //function method is better but not better than using multiple states

    // setUserInput((prevState)=>{
    //       return {...prevState,enteredTitle:event.target.value};
    //     })
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    return (
      <form action="">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input type="text" onChange={titleChangeHandler} />
            {/* onChange is a prop that is used to attach an event listener to an input field in React. It is not a standalone feature or method like useState. The purpose of using the onChange prop is to define a function that will be executed when the input field's value changes. This allows you to handle and respond to the user's input in real-time. By using onChange and providing a corresponding event handler function, you can update the component's state or perform other necessary actions based on the changed input value./onchane  works with different input types like text inputs, dropdowns, and
            checkboxes. it provides even object .it provides an event object that contains information about the event and the element that triggered it.event object contains propterties such as 'target' which references the DOM element that triggered the event.ccess the element's value, type, or other attributes using event.target.value, event.target.type, and so on. The event object also includes the value property, which represents the current value of the input field that triggered the event. Additionally, the event object has the name property, which stores the name of the input field, and the type property, which indicates the type of the input field (e.g., "text", "number", "checkbox", etc.).*/}
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
                    <label htmlFor="">Date</label>
            <input
              type="date"
              min="2022-08-08"
              max="2023-08-08"
              onChange={dateChangeHandler}
            />
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    );
};
export default ExpenseForm;
