import useSWR from "swr";
import { useState } from "react";
import UserContainer from "../components/UserContainer";
import ActivityContainer from "../components/ActivityContainer";

export interface Time {
  current: number;
  previous: number;
}
export interface Activity {
  title: string;
  timeframes: {
    [key: string]: Time;
  };
}
const fetcher = (url: URL) => fetch(url).then((res) => res.json());

export default function Index() {
  const [timeframe, setTimeframe] = useState("daily");
  const { data, error } = useSWR<Activity[]>("/api/staticdata", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="reportContainer">
      <UserContainer timeframe={timeframe} setTimeframe={setTimeframe} />
      <ActivityContainer selectedTime={timeframe} data={data} />
    </div>
  );
}
