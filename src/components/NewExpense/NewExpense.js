import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [allowAddExpense, setAllowAddExpense] = useState(false);
  const allowExpenseHandler = (prevState) => {
    setAllowAddExpense((prevState) => !prevState);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  if (!allowAddExpense) {
    return (
      <div className="new-expense">
        <button onClick={allowExpenseHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onAllowExpenseHandler={allowExpenseHandler}
      />
    </div>
  );
};

export default NewExpense;
