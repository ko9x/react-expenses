import { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";

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
  const filteredArray = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onChangeYear={changeYear} />
        <ExpensesList items={filteredArray}/>
      </Card>
    </div>
  );
};

export default Expenses;
