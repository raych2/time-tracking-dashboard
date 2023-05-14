import styles from "./ActivityCard.module.css";

export default function TimeDisplay({ time }: any) {
  return (
    <div className={styles.time}>
      <h2 className={styles.current}>{time.current}hrs</h2>
      <h3 className={styles.previous}>Last Week - {time.previous}hrs</h3>
    </div>
  );
}
