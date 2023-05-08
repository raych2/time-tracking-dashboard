export default function TimeDisplay({ time }: any) {
  return (
    <div>
      <h2>{time.current}hrs</h2>
      <h3>Last Week - {time.previous}hrs</h3>
    </div>
  );
}
