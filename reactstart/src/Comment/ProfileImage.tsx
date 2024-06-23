import { CSSProperties } from "react";

export type ProfileImageProbs = {
  imgSrc?: string;
};
//이미지가 안주어지면 imgSrc="" 기본이미지를 defualt.jpeg로 사용
const ProfileImage = ({ imgSrc = "defualt.jpeg" }: ProfileImageProbs) => {
  // tailwind는 className으로 사용. css를 tailwind방식으로 사용하는 것 같음.
  return (
    <div className="w-8 h-8  rounded-full overflow-hidden  ">
      <img className="w-full h-full object-cover" src={imgSrc} alt="" />
    </div>
  );
};

export default ProfileImage;
