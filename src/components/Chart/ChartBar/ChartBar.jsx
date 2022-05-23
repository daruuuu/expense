import styles from "./ChartBar.module.css";

const ChartBar = (props) => {
  let barFill = "0%";

  if (props.maxValue > 0) {
    barFill = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className={`${styles["chart-bar"]}`}>
      <div className={`${styles["chart-bar-inner"]}`}>
        <div
          className={`${styles["chart-bar-fill"]}`}
          style={{ height: barFill }}
        ></div>
      </div>
      <div className={`${styles["chart-bar-label"]}`}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
