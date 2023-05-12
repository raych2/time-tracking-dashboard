import Image from "next/image";
import userPic from "public/images/image-jeremy.png";
import Navbar from "./Navbar";
import styles from "./UserContainer.module.css"

type UserContainerProps = {
  setTimeframe: React.Dispatch<React.SetStateAction<string>>;
};

export default function UserContainer({ setTimeframe }: UserContainerProps) {
  return (
    <div className={styles.user}>
      <div className={styles.userIntro}>
        <Image src={userPic} alt="User picture" className={styles.img}/>
        <p className={styles.intro}>Report for</p>
        <h1 className={styles.name}>Jeremy Robson</h1>
      </div>
      <Navbar setTimeframe={setTimeframe} />
    </div>
  );
}
