import Image from "next/image";
import ellipsis from "public/images/icon-ellipsis.svg";
import TimeDisplay from "./TimeDisplay";
import { Activity } from "../pages";
import styles from "./ActivityCard.module.css";

type ActivityCardProps = {
  activity: Activity;
  selectedTime: string;
};
interface TimeEnum {
  [key: string]: JSX.Element;
}

export default function ActivityCard({
  activity,
  selectedTime,
}: ActivityCardProps) {
  const TIMEFRAME_STATES: TimeEnum = {
    daily: <TimeDisplay time={activity.timeframes.daily} />,
    weekly: <TimeDisplay time={activity.timeframes.weekly} />,
    monthly: <TimeDisplay time={activity.timeframes.monthly} />,
  };
  return (
    <div className={styles.container}>
      <div></div>
      <div className={styles.activity}>
        <div className={styles.heading}>
          <h1 className={styles.activityType}>{activity.title}</h1>
          <Image src={ellipsis} alt="ellipsis" className={styles.ellipsis}/>
        </div>
        {TIMEFRAME_STATES[selectedTime]}
      </div>
    </div>
  );
}
