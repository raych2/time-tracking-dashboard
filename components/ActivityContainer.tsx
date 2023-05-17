import ActivityCard from "./ActivityCard";
import { Activity } from "../pages";
import styles from "./ActivityContainer.module.css";

type ActivityContainerProps = {
  selectedTime: string;
  data: Activity[];
};

export default function ActivityContainer({
  selectedTime,
  data,
}: ActivityContainerProps) {
  return (
    <div className={styles.container}>
      {data.map((item, index) => {
        return (
          <ActivityCard
            key={index}
            background={index}
            activity={item}
            selectedTime={selectedTime}
          />
        );
      })}
    </div>
  );
}
