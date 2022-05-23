import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import styles from "./ExpenseItem.module.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  return (
    <li>
      <Card className={`${styles["expense-item"]}`}>
        <ExpenseDate date={props.date} />
        <div className={`${styles["expense-description"]}`}>
          <h2>{title}</h2>
          <div className={`${styles["expense-price"]}`}>{props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
