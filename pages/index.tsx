import useSWR from "swr";

interface Time {
  current: number;
  previous: number;
}
interface Activity {
  title: string;
  timeframes: {
    [key: string]: Time;
  };
}
const fetcher = (url: URL) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR<Activity[]>("/api/staticdata", fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            {item.title}
            <div>Current: {item.timeframes.daily.current}</div>
            <div>Previous: {item.timeframes.daily.previous}</div>
          </div>
        );
      })}
    </div>
  );
}
