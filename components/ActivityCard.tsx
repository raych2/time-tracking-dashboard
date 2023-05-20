import Image from "next/image";
import ellipsis from "public/images/icon-ellipsis.svg";
import TimeDisplay from "./TimeDisplay";
import { Activity } from "../pages";
import styles from "./ActivityCard.module.css";
import ActivityBackground from "./ActivityBackground";

type ActivityCardProps = {
  background: number;
  activity: Activity;
  selectedTime: string;
};
interface TimeEnum {
  [key: string]: JSX.Element;
}

export default function ActivityCard({
  background,
  activity,
  selectedTime,
}: ActivityCardProps) {
  const TIMEFRAME_STATES: TimeEnum = {
    daily: (
      <TimeDisplay
        time={activity.timeframes.daily}
        previousPeriod={"Yesterday"}
      />
    ),
    weekly: (
      <TimeDisplay
        time={activity.timeframes.weekly}
        previousPeriod={"Last Week"}
      />
    ),
    monthly: (
      <TimeDisplay
        time={activity.timeframes.monthly}
        previousPeriod={"Last Month"}
      />
    ),
  };
  return (
    <div className={styles.container}>
      <ActivityBackground
        background={background}
        activityType={activity.title}
      />
      <div className={styles.activity}>
        <div className={styles.heading}>
          <h1 className={styles.activityType}>{activity.title}</h1>
          <Image src={ellipsis} alt="ellipsis" className={styles.ellipsis} />
        </div>
        {TIMEFRAME_STATES[selectedTime]}
      </div>
    </div>
  );
}
