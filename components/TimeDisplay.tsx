import styles from "./ActivityCard.module.css";
import { Time } from "../pages";

type TimeDisplayProps = {
  time: Time;
  previousPeriod: string;
};

export default function TimeDisplay({
  time,
  previousPeriod,
}: TimeDisplayProps) {
  return (
    <div className={styles.time}>
      <h2 className={styles.current}>{time.current}hrs</h2>
      <h3 className={styles.previous}>
        {previousPeriod} - {time.previous}hrs
      </h3>
    </div>
  );
}
