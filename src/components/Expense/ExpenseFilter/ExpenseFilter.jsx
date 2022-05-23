import React from "react";
import styles from "./ExpenseFilter.module.css";

const ExpenseFilter = (props) => {
  const selectHandler = (event) => {
    props.onChangedFilter(event.target.value);
  };

  return (
    <div className={`${styles["expenses-filter"]}`}>
      <div className={`${styles["expenses-filter-control"]}`}>
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
