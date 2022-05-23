import styles from "./ExpenseDate.module.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className={`${styles["expense-date"]}`}>
      <div className={`${styles["expense-date-month"]}`}>{month}</div>
      <div className={`${styles["expense-date-day"]}`}>{day}</div>
      <div className={`${styles["expense-date-year"]}`}>{year}</div>
    </div>
  );
}

export default ExpenseDate;
