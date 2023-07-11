import "./ExpenseForm.css";
import React, { useState } from "react";
const ExpenseForm = (props) => {
const [enteredTitle, setEnteredTitle] = useState("");
 
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
   const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredTitle.length && enteredAmount !== "" && enteredDate !== "") {
      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      };
      props.onSaveExpenseData(expenseData);
      setEnteredAmount("");
      setEnteredDate("");
      setEnteredTitle("");
    }
  };

  const [show, setShow] = useState(false);

  const addExpenseButton = () => {
    setShow(true);
  };
  const cancelButton = () => {
    setShow(false);
  };
  return (
    <form action="" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        {show && (
          <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
          </div>
        )}
        {show && (
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
        )}
        {show && (
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
        )}
        <div className="new-expense__actions">
          {show && (<button type="" onClick={cancelButton}>Cancel </button> )}
          <button type="submit" onClick={addExpenseButton}> Add New Expense </button>        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
