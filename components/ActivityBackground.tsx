import Image from "next/image";
import work from "public/images/icon-work.svg";
import play from "public/images/icon-play.svg";
import study from "public/images/icon-study.svg";
import exercise from "public/images/icon-exercise.svg";
import social from "public/images/icon-social.svg";
import selfCare from "public/images/icon-self-care.svg";
import styles from "./ActivityBackground.module.css";

type ActivityBackgroundProps = {
  background: number;
  activityType: string;
};
interface IconEnum {
  [key: string]: HTMLImageElement;
}

export default function ActivityBackground({
  background,
  activityType,
}: ActivityBackgroundProps) {
  const ICON_STATES: IconEnum = {
    0: work,
    1: play,
    2: study,
    3: exercise,
    4: social,
    5: selfCare,
  };
  const activityBackgroundType: string[] = [
    "work",
    "play",
    "study",
    "exercise",
    "social",
    "selfCare",
  ];

  return (
    <div
      className={`${styles[activityBackgroundType[background]]} ${
        styles.container
      }`}
    >
      <Image
        src={ICON_STATES[background]}
        alt={`${activityType} icon`}
        className={styles.img}
        priority={true}
      />
    </div>
  );
}
