import useSWR from "swr";
import Head from "next/head";
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
    <>
      <Head>
        <title>Frontend Mentor | Time tracking dashboard</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        />
      </Head>
      <div className="reportContainer">
        <UserContainer timeframe={timeframe} setTimeframe={setTimeframe} />
        <ActivityContainer selectedTime={timeframe} data={data} />
      </div>
    </>
  );
}
