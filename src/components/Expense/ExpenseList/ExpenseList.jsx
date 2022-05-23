import ExpenseItem from "../ExpenseItem/ExpenseItem";
import styles from "./ExpenseList.module.css";
const ExpenseList = (props) => {
  if (props.expenses.length === 0) {
    return (
      <h2 className={`${styles["expenses-list-fallback"]}`}>
        No expenses to show
      </h2>
    );
  }

  return (
    <ul className={`${styles["expenses-list"]}`}>
      {props.expenses.map((items) => (
        <ExpenseItem
          key={items.id}
          title={items.title}
          amount={items.amount}
          date={items.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
