type NavbarProps = {
  setTimeframe: React.Dispatch<React.SetStateAction<string>>;
};

export default function Navbar({ setTimeframe }: NavbarProps) {
  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => setTimeframe("daily")}>Daily</button>
        </li>
        <li>
          <button onClick={() => setTimeframe("weekly")}>Weekly</button>
        </li>
        <li>
          <button onClick={() => setTimeframe("monthly")}>Monthly</button>
        </li>
      </ul>
    </nav>
  );
}
