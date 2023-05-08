import ActivityCard from "./ActivityCard";
import { Activity } from "../pages";

type ActivityContainerProps = {
  selectedTime: string;
  data: Activity[];
};

export default function ActivityContainer({
  selectedTime,
  data,
}: ActivityContainerProps) {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <ActivityCard
            key={index}
            activity={item}
            selectedTime={selectedTime}
          />
        );
      })}
    </div>
  );
}
