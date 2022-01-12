import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

// You can write the functions in this style

// function Expenses(props) {
//   return (
//     <Card className="expenses">
//       <ExpenseItem
//         title={props.items[0].title}
//         amount={props.items[0].amount}
//         date={props.items[0].date}
//       />
//       <ExpenseItem
//         title={props.items[1].title}
//         amount={props.items[1].amount}
//         date={props.items[1].date}
//       />
//       <ExpenseItem
//         title={props.items[2].title}
//         amount={props.items[2].amount}
//         date={props.items[2].date}
//       />
//       <ExpenseItem
//         title={props.items[3].title}
//         amount={props.items[3].amount}
//         date={props.items[3].date}
//       />
//     </Card>
//   );
// }

// Or in the FAT ARROW style
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const changeYear = (passedInYear) => {
    setSelectedYear(passedInYear);
  };
  
  // for assignment 3 I think we need to filter the props.items array and find all the items that have a year that matches the selected year from the drop down. then pass that array to the map function on line 48. 
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onChangeYear={changeYear} />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
