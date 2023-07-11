import React ,{useState} from 'react'
import "./ExpenseItem.css";
//props is just an object that contains prototype .we can give any name other than props
import Card from '../UI/Card'
import ExpenseDate from "./ExpenseDate";
function XpenseItem(props) {
  const [title ,setTitle]=useState(props.title); //In React, we can use the useState hook inside component functions. useState is an important React hook that allows us to create variables that trigger re-rendering of the component when their values change. These hooks, including useState, must be called directly inside React component functions and not in nested functions or outside of component functions or inside return statement. useState requires an initial value for the variable it creates, similar to assigning a value to a regular variable.In useState, the first element represents the current state value, and the second element is the update function.In useState, we update the state value by calling the state updating function (in this case, setTitle) and passing a new value as an argument. This triggers the re-evaluation of the component function where useState was initialized, allowing React to update the JSX code and reflect the changes on the screen. The state update is scheduled, so the new value may not be immediately available in the next line of code. However, the component is eventually called again, and the updated value is displayed on the screen.
  
  const clickHandler = () => {
    setTitle('updated')
    console.log(title)
  }
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>{" "}{/*In React, we can add an event listener to a JSX element, such as a button. We achieve this by adding a special prop that begins with "on." Unlike other props that set values for the element, these "on" props correspond to default events exposed by React.This listener triggers a function when a click event occurs. We define the function as a value for onClick, which is executed when the click event happens.*/}
      </Card>
    </li>
  );
}
export default XpenseItem;
//now all items are lost bcoz we cant use custom components as wrapper of other types of compone