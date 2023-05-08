import Image from "next/image";
import userPic from "public/images/image-jeremy.png";
import Navbar from "./Navbar";

type UserContainerProps = {
  setTimeframe: React.Dispatch<React.SetStateAction<string>>;
};

export default function UserContainer({ setTimeframe }: UserContainerProps) {
  return (
    <div>
      <div>
        <Image src={userPic} alt="User picture" />
        <p>Report for</p>
        <h1>Jeremy Robson</h1>
      </div>
      <Navbar setTimeframe={setTimeframe} />
    </div>
  );
}
