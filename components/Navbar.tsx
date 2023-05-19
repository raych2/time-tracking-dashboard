import styles from "./UserContainer.module.css";

type NavbarProps = {
  timeframe: string;
  setTimeframe: React.Dispatch<React.SetStateAction<string>>;
};

export default function Navbar({ timeframe, setTimeframe }: NavbarProps) {
  return (
    <nav>
      <ul className={styles.timeItem}>
        <li>
          <button
            onClick={() => setTimeframe("daily")}
            className={
              timeframe === "daily"
                ? styles.timeDisplayed
                : styles.timeSelection
            }
          >
            Daily
          </button>
        </li>
        <li>
          <button
            onClick={() => setTimeframe("weekly")}
            className={
              timeframe === "weekly"
                ? styles.timeDisplayed
                : styles.timeSelection
            }
          >
            Weekly
          </button>
        </li>
        <li>
          <button
            onClick={() => setTimeframe("monthly")}
            className={
              timeframe === "montly"
                ? styles.timeDisplayed
                : styles.timeSelection
            }
          >
            Monthly
          </button>
        </li>
      </ul>
    </nav>
  );
}
