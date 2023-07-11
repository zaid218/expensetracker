import './ExpenseForm.css';
import React, { useState } from 'react'
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState(''); {/*useState is not primarily for updating the component when using onChange on an input field. Instead, it is used to store the value in a separate variable that remains detached from the component's lifecycle. This ensures that the state persists and survives, independent of how often the component function executes. The main goal is to store the value in a variable that is not tied to the component's lifecycle, rather than focusing solely on updating the component.*/ }
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState(""); {/* strings are consistently used as the initial values for variables stored in the useState function. This is because when capturing the value of an input field through the onChange event, the retrieved value will always be a string. Even if the input field is intended to store a number or date, the value will be obtained as a string. Therefore, to ensure consistency, all states are initialized with strings. This accounts for the fact that input values are naturally received as strings, regardless of their underlying data type. */ }
    //other way of usng states by grouping them all
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


    //merging all the changehangler in a single handler
    // const inputChangeHandler = (identifier,value) => {
    //     if (identifier ==='amount')
    //         setEnteredAmount(value)
    //     else if (identifier === 'date')
    //         setEnteredDate(value);
    //     else setEnteredTitle(value)
    // }

    const submitHandler = (event) => {
        event.preventDefault(); //When the "add expense" button is clicked, the default browser behavior causes the page to reload because the browser automatically sends a request to the server hosting the webpage. However, in this case, we want to handle the form submission with JavaScript and manually collect and process the data. Fortunately, we can prevent this default behavior by calling the preventDefault method on the event object. This method is a built-in JavaScript feature and allows us to stop the request from being sent. By preventing the request, the page will not reload, and we can continue handling the form submission using JavaScript.
      if (enteredTitle !== '' && enteredAmount !== '' && enteredDate !== '')
        {const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredAmount('')
        setEnteredDate('')
        setEnteredTitle('')}
    }
    return (
      <form action="" onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
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
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Date</label>
            <input
              type="date"
              min="2020-01-01"
              max="2023-12-31"
              onChange={dateChangeHandler}
              value={enteredDate} 
            />
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>   
            <button type="submit">Add Expense</button> {/*Adding a click listener to the "add expense" button is not the recommended approach because browsers and web pages have default behaviors. When a button with the "submit" type is pressed inside a form, the form element emits a "submit" event. It is better to listen for the "submit" event on the form itself and execute a function when the form is submitted.*/}
          </div>
        </div>
      </form>
    );
};
export default ExpenseForm;
