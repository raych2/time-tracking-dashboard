import styles from "./UserContainer.module.css"

type NavbarProps = {
  setTimeframe: React.Dispatch<React.SetStateAction<string>>;
};

export default function Navbar({ setTimeframe }: NavbarProps) {
  return (
    <nav>
      <ul className={styles.timeItem}>
        <li>
          <button onClick={() => setTimeframe("daily")} className={styles.timeSelection}>Daily</button>
        </li>
        <li>
          <button onClick={() => setTimeframe("weekly")} className={styles.timeSelection}>Weekly</button>
        </li>
        <li>
          <button onClick={() => setTimeframe("monthly")} className={styles.timeSelection}>Monthly</button>
        </li>
      </ul>
    </nav>
  );
}
