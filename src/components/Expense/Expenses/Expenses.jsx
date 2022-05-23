import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import styles from "./Expenses.module.css";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseChart from "../ExpenseChart/ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const selectChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const expensesFilter = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className={styles.expenses}>
        <ExpenseFilter
          selected={filteredYear}
          onChangedFilter={selectChangeHandler}
        />
        <ExpenseChart expenses={expensesFilter} />
        {/* {expensesFilter.length === 0 && <p>No expenses to show</p>}
        {expensesFilter.length > 0 &&
          expensesFilter.map((items) => (
            <ExpenseItem
              key={items.id}
              title={items.title}
              amount={items.amount}
              date={items.date}
            />
          ))} */}
        <ExpenseList expenses={expensesFilter} />
      </Card>
    </div>
  );
}

export default Expenses;
