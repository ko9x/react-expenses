import { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// You can write the function in the FAT ARROW style

// const ExpenseItem = (props) => {
//   return (
//     <Card className="expense-item">
//       <ExpenseDate date={props.date} /> 
//         <div className="expense-item__description">
//           <h2>{props.title}</h2>
//           <div className="expense-item__price">${props.amount}</div>
//         </div>
//     </Card>
//   );
// }


// Or in this style
function ExpenseItem(props) {

  // the convention is to use a variable name that describes the value, such as title and then to name the function "set" + "variable name". So in this instance the value is "title " and the function is setTitle
  const [title, setTitle] = useState(props.title);

  // Naming your function with the "event type" and then the word "Handler" is the convention in react. So in this case the "onClick" type function I created is named clickHandler
  const clickHandler = () => {
    setTitle('this is the title');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} /> 
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
