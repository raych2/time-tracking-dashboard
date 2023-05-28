import Image from "next/image";
import userPic from "public/images/image-jeremy.png";
import Navbar from "./Navbar";
import styles from "./UserContainer.module.css";

type UserContainerProps = {
  timeframe: string;
  setTimeframe: React.Dispatch<React.SetStateAction<string>>;
};

export default function UserContainer({
  timeframe,
  setTimeframe,
}: UserContainerProps) {
  return (
    <div className={styles.user}>
      <div className={styles.userIntro}>
        <Image src={userPic} alt="User picture" className={styles.img} />
        <span>
          <p className={styles.intro}>Report for</p>
          <h1 className={styles.name}>Jeremy Robson</h1>
        </span>
      </div>
      <Navbar timeframe={timeframe} setTimeframe={setTimeframe} />
    </div>
  );
}
