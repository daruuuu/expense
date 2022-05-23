import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import styles from "./NewExpense.module.css";

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsAdding(false);
  };

  const addExpenseHandler = () => {
    setIsAdding(true);
  };

  const cancelExpenseHandler = () => {
    setIsAdding(false);
  };

  return (
    <div className={`${styles["new-expense"]}`}>
      {!isAdding && <button onClick={addExpenseHandler}>Add Expense</button>}
      {isAdding && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
