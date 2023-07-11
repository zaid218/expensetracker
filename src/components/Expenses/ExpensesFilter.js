import React, { useState } from 'react';
import './ExpensesFilter.css'
const ExpensesFilter = (props) => {
  const filterChangeHandler = (event) => {
    props.onChangeFilter(event.target.value)
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Your's Expenses</label>
        <select
          name=""
          id=""
          value={props.selected}
          onChange={filterChangeHandler}
        >
          <option hidden value="0000"> Filter By Year</option>
          <option value="0000">ALL</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;